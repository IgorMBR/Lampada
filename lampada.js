const TurnOn = document.getElementById ('TurnOn');
const TurnOff = document.getElementById ('TurnOff');
const lamp = document.getElementById('lamp');

function lampOn () {
    lamp.src = './img/lampada_ligada.jpg';
}

function lampOff () {
    lamp.src = './img/lampada_apagada.jpg';
}
function lampBroken(){
    lamp.src = './img/lampada_quebrada.jpg';
}

TurnOn.addEventListener('click', lampOn);
TurnOff.addEventListener('click', lampOff);