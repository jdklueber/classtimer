import React, {useEffect, useState} from "react";


const ConfigContext = React.createContext()

function ConfigProvider({children}) {
    const [config, setConfig] = useState({});


    useEffect(() => {
        const newConfig = {};
        newConfig.tz = localStorage.getItem("tz") || "America/New_York";
        newConfig.tzGroup = localStorage.getItem("tzGroup") || "US (Common)";
        newConfig.lunch = localStorage.getItem("lunch") || "13:00";
        newConfig.class = localStorage.getItem("class") || "10:00";
        newConfig.breaklen = localStorage.getItem("breaklen") || 10;
        newConfig.lunchlen = localStorage.getItem("lunchlen") || 60;
        setConfig(newConfig);
    },[])

    const saveCookie = (data) => {
        window.localStorage.setItem("tz", data.tz);
        window.localStorage.setItem("tzGroup", data.tzGroup);
        window.localStorage.setItem("lunch", data.lunch);
        window.localStorage.setItem("class", data.class);
        window.localStorage.setItem("breaklen", data.breaklen);
        window.localStorage.setItem("lunchlen", data.lunchlen);
    }

    const updateState = (field, val) => {
        let newConfig = {...config};
        newConfig[field] = val;
        setConfig(newConfig);
        saveCookie(newConfig);
    }

    const setTzGroup = (group) => {
        updateState("tzGroup", group);
    }

    const setTz = (tz) => {
        updateState("tz", tz);
    }

    const setLunchEndTime = (time) => {
        updateState("lunch", time);
    }

    const setClassStartTime = (time) => {
        updateState("class", time);
    }

    const setLunchLength = (minutes) => {
        updateState("lunchlen", minutes);
    }

    const setBreakLength = (minutes) => {
        updateState("breaklen", minutes);
    }


    const configObj = {
        tz: config.tz,
        tzGroup: config.tzGroup,
        lunch: config.lunch,
        class: config.class,
        lunchlen: config.lunchlen,
        breaklen: config.breaklen,
        setTz,
        setTzGroup,
        setLunchEndTime,
        setClassStartTime,
        setBreakLength,
        setLunchLength
    }

    return (
        <ConfigContext.Provider value={configObj}>
            {children}
        </ConfigContext.Provider>
    )
}

export default ConfigProvider
export {ConfigContext}