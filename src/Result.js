import Buttonreset from './Buttonreset'

export default function Result(props) {

    return (
        <div className='right'>
            <div className='boxright'>
                <div className='tipamount'>
                    <div>
                        <p className='p1'>Tip Amount</p>
                        <p className='p2'>/ person</p>
                    </div>
                    <div className='resultprice'>
                        ${props.result1}
                    </div>
                </div>
                <div className='totalperson'>
                    <div>
                        <p className='p1'>Total</p>
                        <p className='p2'>/ person</p>
                    </div>
                    <div className='resultprice'>
                        ${props.result2}
                    </div>
                </div>
            </div>
            <div className='resetbox'>
                <Buttonreset resetactive={props.resetactive} setBill={props.setBill} setPerson={props.setPerson} setResult1={props.setResult1} setResult2={props.setResult2} setPercent={props.setPercent} setPercentinput={props.setPercentinput} setResetactive={props.setResetactive} />
            </div>
        </div>
    )
}
