const lightOrbsList = document.getElementsByClassName('ligthOrb');
let goingRight = true;
let lightAutoInterval = null;
let autoOn = false;

function moveLightOn() {
    for (let index = 0; index < lightOrbsList.length; index++) {
        const element = lightOrbsList[index];
        if (element.classList.contains('ligthOrbOn')) {
            if (index === lightOrbsList.length - 1 || index === 0) {
                goingRight = !goingRight;
            }
            element.classList.toggle('ligthOrbOn');
            if (goingRight) {
                lightOrbsList[index + 1].classList.toggle('ligthOrbOn');
            }
            else {
                lightOrbsList[index - 1].classList.toggle('ligthOrbOn');
            }
            break;
        }
    }
}

function moveLightAuto() {

    if (!autoOn) {
        lightAutoInterval = setInterval(() => {
            moveLightOn();
        }, 100);
        autoOn = true;
    } else {
        clearInterval(lightAutoInterval);
        autoOn = false;
    }
}