import { useState } from "react";
import QRCodeCanvas from "../QRCodeCanvas";

import './style.css';

const Input = ({placeholder}) => {
    
    const [text, setText] = useState("https://lucasgabrielmoya-nu.vercel.app/")

    return(
        <>
            <input placeholder={placeholder}
                onChange={(element)=>{
                    setText(element.target.value)
                }}
                value={text}>
            </input>
            <br/>
            <QRCodeCanvas text={text}></QRCodeCanvas>
        </>
    )
}

export default Input;