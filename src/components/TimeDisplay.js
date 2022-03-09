import React from "react";
import DigitDisplay from "./DigitDisplay";

function TimeDisplay({time, label}) {
    let output = time.format("h:mm A").split().map(t => {return <DigitDisplay digit={t}/>})

    return (
        <>
            <div className={'text-2xl'}>
                {label}
            </div>
            <div>
                {output}
            </div>
        </>
    )
}


export default TimeDisplay;