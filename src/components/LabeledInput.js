import React from "react";

function LabeledInput({label, name, type, value, setValue}) {

    return (
        <div className={"mt-5"}>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <div>
                <input className={"text-black"} type={type} name={name} value={value} onChange={(e) => {setValue(e.currentTarget.value)}}/>
            </div>
        </div>
    )
}


export default LabeledInput;