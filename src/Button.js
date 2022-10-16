import React from 'react'

export default function Button(props) {

    return (
        <button className='btnprecent' onClick={(event) => { props.setPercent(Number(props.num)); props.click(event); props.setVisable(true) }}>{props.num}%</button>

    )
}
