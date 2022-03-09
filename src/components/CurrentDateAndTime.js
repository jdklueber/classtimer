import React, {useContext} from "react";
import {ConfigContext} from "../context/ConfigContext";

function CurrentDateAndTime({now}) {
    const config = useContext(ConfigContext);

    return (
        <div className={"text-4xl border-b pb-5 mb-5"}>
            <div>{now.format('MMMM D, YYYY')}</div>
            <div>{now.format('h:mm A')} ({config.tz})</div>
        </div>
    )
}


export default CurrentDateAndTime;