import React, { useEffect } from 'react'
import logo from './image/logo.svg';
import Selecttipcontext from './Selecttipcontext';
import Result from './Result';
import { useState } from 'react';
import dollar from './image/icon-dollar.svg'
import personimg from './image/icon-person.svg'
import Cuntbezero from './Cuntbezero';
export default function Maincontainer() {
    const [bill, setBill] = useState('');
    const [person, setPerson] = useState('');
    const [percent, setPercent] = useState('');
    const [percentinput, setPercentinput] = useState('');
    const [result1, setResult1] = useState('0.00');
    const [result2, setResult2] = useState('0.00');
    const [resetactive, setResetactive] = useState(true)
    const [visable, setVisable] = useState(false);
    function click(event) {
        document.querySelectorAll('.btnprecent').forEach((btn) => {
            btn.removeAttribute('id')
        })
        event.target.id = 'backactive'
    }
    function inputBorder(event) {
        document.querySelectorAll('.input,.customInput').forEach((inp) => {
            inp.removeAttribute('id')
        })
        event.target.id = 'idborder'
    }

    useEffect(() => {
        if (bill > 0 && (percent > 0 || percentinput > 0) && person > 0) {
            setResult1((bill * percent) / (person * 100))
            if (percent == '') {
                setResult1((bill * percentinput) / (person * 100))
            }
            setResult2((bill / person) + result1)
            setResetactive(false);

        }
    })
    return (

        <div className='maincontainer'>
            <div className='logo'><img src={logo} alt="logoimg" /></div>
            <div className='card'>
                <div className='left'>
                    {(bill == '' && visable) && <div className='cuntbezero1'>
                        <Cuntbezero />
                    </div>}

                    <div className='inputdiv'>
                        <p className='leftp'>Bill</p>
                        <input type="number" className='input' onClick={(event) => { setVisable(true); inputBorder(event) }} onChange={(event) => { setBill(event.target.value) }} value={bill} placeholder='0' />
                        <div><img src={dollar} alt="dollarlogo" /></div>
                    </div>
                    {((percent == '' && percentinput == '') && visable) && <div className='cuntbezero2'>
                        <Cuntbezero />
                    </div>}
                    <Selecttipcontext setPercent={setPercent} percent={percent} percentinput={percentinput} setPercentinput={setPercentinput} click={click} setVisable={setVisable} inputBorder={inputBorder} />
                    <div className='inputdiv'>
                        {(person == '' && visable) && <div className='cuntbezero3'>
                            <Cuntbezero />
                        </div>}
                        <p className='leftp'>Number of People</p>
                        <input className='input' type="number" onClick={(event) => { setVisable(true); inputBorder(event) }} onChange={(event) => { setPerson(event.target.value) }} placeholder='0' value={person} />
                        <div><img src={personimg} alt="personlogo" /></div>
                    </div>
                </div>
                <div>
                    <Result setResetactive={setResetactive} resetactive={resetactive} setBill={setBill} setPerson={setPerson} result1={result1} result2={result2} setPercent={setPercent} setPercentinput={setPercentinput} setResult1={setResult1} setResult2={setResult2} />
                </div>

            </div>
        </div>


    )
}
