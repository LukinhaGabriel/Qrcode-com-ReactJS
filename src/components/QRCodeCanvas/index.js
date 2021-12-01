import React, { useEffect, useRef } from "react";
import QRCode  from "qrcode";

const QRCodeCanvas = ( {text} ) => {

    const canvasRef = useRef();

    useEffect( () => {
        QRCode.toCanvas(canvasRef.current, text, {width:300},(error)=>{
            console.log(error);
        })
    },[text]);

    return(
        <canvas ref={canvasRef} id="canvas"></canvas>
    )
}   

export default QRCodeCanvas;