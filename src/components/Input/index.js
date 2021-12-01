import { useState } from "react";
import QRCodeCanvas from "../QRCodeCanvas";

import './style.css';

const Input = ({placeholder}) => {
    
    const [text, setText] = useState("")

    return(
        <main>
            <input placeholder={placeholder}
                onChange={(element)=>{
                    setText(element.target.value)
                }}
                value={text}>
            </input>
            <br/>
            <QRCodeCanvas text={text}></QRCodeCanvas>
            
        </main>
    )
}

export default Input;