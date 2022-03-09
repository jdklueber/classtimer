import React, {useContext, useEffect, useState} from "react";
import CurrentDateAndTime from "./CurrentDateAndTime";
import CountDown from "./CountDown";
import TimeDisplay from "./TimeDisplay";
import Button from "./Button";
import dayjs from "dayjs";
import {ConfigContext} from "../context/ConfigContext";

function MainDisplay({setConfigMode}) {
    const config = useContext(ConfigContext);
    const [classHour, classMin] = config.class? config.class.split(":") : ["00","00"];
    const [lunchHour, lunchMin] = config.lunch? config.lunch.split(":") : ["00","00"];
    const [now, setNow] = useState(new dayjs());
    const [until, setUntil] = useState(new dayjs());

    useEffect(() =>{
        setInterval(() => {
            setNow(dayjs().tz(config.tz));
        },  250)
    },[])

    const startBreak = () => {
        setUntil(new dayjs().add(config.breaklen, "Minutes").tz(config.tz));
    }

    const startLunch = () => {
        setUntil(new dayjs().add(config.lunchlen, "Minutes").tz(config.tz));
    }

    return (
        <div>

            <CurrentDateAndTime now={now}/>

            <CountDown now={now} until={until}/>
            <TimeDisplay label={"Returning at..."} time={until}/>

            <div className={"border-t pt-5 mt-10"}>
                <Button label={config.breaklen + " Min"} action={startBreak}/>
                <Button label={config.lunchlen + " Min"} action={startLunch}/>
                <Button label={"Cancel Timer"} action={() => {setUntil(new dayjs().tz(config.tz))}}/>
                <Button label={"Start Class Countdown"} action={()=>{setUntil(new dayjs().tz(config.tz).hour(Number(classHour) ).minute(classMin))}}/>
                <Button label={"Start Lunch"} action={()=>{setUntil(new dayjs().tz(config.tz).hour(Number(lunchHour) ).minute(lunchMin))}}/>
                <Button label={"Configure"} action={()=>{setConfigMode(true)}}/>
            </div>
        </div>
    )
}


export default MainDisplay;