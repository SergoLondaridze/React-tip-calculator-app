import React, { useEffect } from 'react'

export default function Buttonreset(props) {
    function click1(event) {
        document.querySelectorAll('.btnprecent').forEach((btn) => {
            btn.removeAttribute('id')
        })
    }
    useEffect((event) => {
        if (props.resetactive) {
            document.querySelector('.btnrst').setAttribute('id', 'rstbtn')
        } else {
            document.querySelector('.btnrst').removeAttribute('id')
        }
    })
    return (
        <div>
            <button className='btnrst' onClick={() => { props.setBill(''); props.setPerson(''); props.setResult1('0.00'); props.setResult2('0.00'); props.setPercent(''); props.setPercentinput(''); props.setResetactive(true); click1() }} disabled={props.resetactive}>RESET</button>
        </div>
    )
}
