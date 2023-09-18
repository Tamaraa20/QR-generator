let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let error = document.getElementById("error")

function generateQR() {

    if (qrText.value.length > 0 && qrText.value !== ' ') {
        
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img')
    }
    else {

        error.textContent = 'Please enter a valid value';

    }
}
