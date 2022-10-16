import React, { useContext } from 'react'
import Button from './Button.js';

export default function Selecttipcontext(props) {

    // function click(event) {
    //     document.querySelectorAll('.btnprecent').forEach((btn) => {
    //         btn.removeAttribute('id')
    //     })
    //     event.target.id = 'backactive'
    //     document.querySelector('.customInput').setAttribute('placeholder', 'Custom')

    // }

    function click1() {
        document.querySelectorAll('.btnprecent').forEach((btn) => {
            btn.removeAttribute('id')
        })
        // document.querySelector('.customInput').removeAttribute('placeholder')

    }
    return (
        <div className='mediabtn'>
            <p id='p11'>Select Tip %</p>
            <div className='btncontainer'>
                <Button num='5' setPercent={props.setPercent} click={props.click} setVisable={props.setVisable} />
                <Button num='10' setPercent={props.setPercent} click={props.click} setVisable={props.setVisable} />
                <Button num='15' setPercent={props.setPercent} click={props.click} setVisable={props.setVisable} />
                <Button num='25' setPercent={props.setPercent} click={props.click} setVisable={props.setVisable} />
                <Button num='50' setPercent={props.setPercent} click={props.click} setVisable={props.setVisable} />
                <input type="number" className='customInput' onChange={(event) => { props.setPercentinput(event.target.value) }} onClick={(event) => { click1(); props.setVisable(true); props.inputBorder(event) }} value={props.percentinput} placeholder='Custom' />
            </div>

        </div>
    )
}
