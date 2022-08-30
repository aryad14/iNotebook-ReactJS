import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const s1 = {
        "name": "Arya",
        "id": "1B"
    }
    const [state, setstate] = useState(s1);

    //Function to Update a State and Exporting it
    const update = ()=>{
        setTimeout(() => {
            setstate({
                "name": "Krish",
                "id": "5B"
            })
        }, 4000);
    }
    return(
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;