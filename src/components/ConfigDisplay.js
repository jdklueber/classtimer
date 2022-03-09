import React, {useContext} from "react";
import TzPicker from "./TzPicker";
import {ConfigContext} from "../context/ConfigContext";
import Button from "./Button";
import LabeledInput from "./LabeledInput";

function ConfigDisplay({setConfigMode}) {
    const config = useContext(ConfigContext);

    return (
        <div>
            <div className={"text-4xl border-b pb-5 mb-5"}>
                Configuration
            </div>
            <TzPicker tz={config.tz} setTz={config.setTz} setTzGroup={config.setTzGroup} tzGroup={config.tzGroup}/>
            <LabeledInput name={"ClassStartTime"} label={"Class Start Time"} type={"time"} value={config.class} setValue={config.setClassStartTime}/>
            <LabeledInput name={"LunchEndTime"} label={"Lunch End Time"} type={"time"} value={config.lunch} setValue={config.setLunchEndTime}/>
            <LabeledInput name={"LunchLen"} label={"Lunch Length"} type={"number"} value={config.lunchlen} setValue={config.setLunchLength}/>
            <LabeledInput name={"BreakLen"} label={"Break Length"} type={"number"} value={config.breaklen} setValue={config.setBreakLength}/>

            <div className={"border-t pt-5 mt-10"}>
                <Button label={"Main Display"} action={()=>{setConfigMode(false)}}/>
            </div>
        </div>
    )
}


export default ConfigDisplay;