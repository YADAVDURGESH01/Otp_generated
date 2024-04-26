
let generaotp = () => {
    const otplength = 4;
    const otp = Math.floor(Math.random() * Math.pow(10, otplength));
    document.getElementById("box").innerHTML =  otp;
};

document.getElementById("btn").addEventListener("click",generaotp);
window.addEventListener("load", generaotp);