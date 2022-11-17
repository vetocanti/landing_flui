import  QRCode  from "qrcode";
import { useEffect ,useState } from "react"

const CodigoQr=({text})=>{
    const [src,setSrc]= useState('');



    useEffect(() => {
        QRCode.toDataURL(text).then((setSrc))
    })
    return (  
    <div class="flex justify-center p-3">
        <img src={src}/>
    </div>
    );
};

export default CodigoQr;