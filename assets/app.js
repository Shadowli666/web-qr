//Variable Global para generar el qr
const generateQRCode = () => {
  document.querySelector('#qrcode').innerHTML = '';
  var text = document.querySelector("#input-text").value;
  var colorDark = document.querySelector("#input-dark-color").value;
  var colorlight = document.querySelector("#input-light-color").value;

  var qrcode = new QRCode("qrcode", {
    text: text,
    colorDark: colorDark,
    colorLight: colorlight,
    correctLevel: QRCode.CorrectLevel.H,
  });
};

const init = () => {
  //Se añade el evento al keyup
  //input-text es el input
  document
    .querySelector("#input-text")
    .addEventListener("keyup", generateQR, false);
  document
    .querySelector("#input-light-color")
    .addEventListener("change", updateLight, false);
  document
    .querySelector("#input-dark-color")
    .addEventListener("change", updateDark, false);
};

const generateQR = (e) => {
  generateQRCode();
};

const updateLight = (e) => {
    generateQRCode();
};

const updateDark = (e) => {
    generateQRCode();
};

init();
