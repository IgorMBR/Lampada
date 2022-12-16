const TurnOn = document.getElementById ('TurnOn');
const TurnOff = document.getElementById ('TurnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf('broken') > -1
}

function lampOn () {
    if( !isLampBroken  () ) {
    lamp.src = './img/lampada_ligada.jpg';
    }
}

function lampOff () {
    lamp.src = './img/lampada_apagada.jpg';
}
function lampBroken(){
    lamp.src = './img/lampadaquebrada.jpg';
}

TurnOn.addEventListener('click', lampOn);
TurnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dbclick', lampBroken);