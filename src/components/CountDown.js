import React from "react";
import DigitDisplay from "./DigitDisplay";

function CountDown({now, until}) {
    let display = [];
    if (now != null && until != null) {
        let ms =until.diff(now, 'ms');
        let hours = parseInt(ms/(1000 * 60 * 60))
        if (!hours) { hours = '00'}
        ms = ms - (hours * 60 * 60 * 1000);
        let minutes = parseInt(ms/(1000 * 60))
        if (!minutes) { minutes = '00'}
        ms = ms - (minutes * 60 * 1000);
        let seconds = parseInt(ms/(1000))
        if (!seconds) { seconds = '00'}

        if (hours < 0 || minutes < 0 || seconds < 0) {
            hours = "00";
            minutes = "00";
            seconds = "00";
        }

        if (seconds < 10 && seconds > 0) {
            seconds = "0" + seconds;
        }

        if (minutes < 10 && minutes > 0) {
            minutes = "0" + minutes;
        }


        if (hours > 0) {
            display.push(<DigitDisplay digit={hours}/> );
            display.push(<DigitDisplay digit={':'}/> );
        }
        display.push(<DigitDisplay digit={minutes}/> );
        display.push(<DigitDisplay digit={':'}/> );
        display.push(<DigitDisplay digit={seconds}/> );
    }

    return (
        <>
            <div className={'text-2xl'}>Time Remaining</div>
            <div>{display}</div>
        </>
    )
}


export default CountDown;