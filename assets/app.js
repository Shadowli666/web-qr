//Variable Global para generar el qr
var qrcode = new QRCode("qrcode");

const init = () =>{
    //Se añade el evento al keyup
    //input-text es el input
    document.querySelector("#input-text").addEventListener("keyup",generateQR,false);
}

const generateQR = (e) =>{
    qrcode.makeCode(e.target.value);
}

init();