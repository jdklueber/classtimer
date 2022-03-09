import React from "react";
import {get_tzs_by_group, tz_groups} from "../data/timezones";

function TzPicker({tz, setTz, tzGroup, setTzGroup}) {
    return (
        <div>
            <label htmlFor="TzGroup">Time Zone Group</label>
            <select name="TzGroup" className={"text-black mt-1 block min-w-max pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"} value={tzGroup} onChange={(e) => {setTzGroup(e.target.value)}} defaultValue={""}>
                {tz_groups.map(g=> {return <option value={g}>{g}</option>})}
            </select>
            <label htmlFor="Tz">Time Zone</label>
            <select name="Tz" className={"text-black mt-1 block min-w-max pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"} value={tz} onChange={(e) => {setTz(e.target.value)}}>
                {get_tzs_by_group(tzGroup).map(z=> {return <option value={z.value}>{z.name}</option>})}
            </select>
        </div>
    )
}


export default TzPicker;