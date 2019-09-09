// Your code goes here
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let menuLinks = document.querySelectorAll('.main-navigation .nav-container .nav a');
menuLinks.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        let actualFontSize = window.getComputedStyle(element).getPropertyValue('font-size');
        event.target.style.fontSize = parseFloat(actualFontSize) + 3 + 'px';
        event.target.style.backgroundColor = getRandomColor();
    });
})

function randomRange(start, stop) {
    return Math.floor(Math.random() * (stop - start)) + start;
}  

let otherImages = document.querySelectorAll('.other-images');
otherImages.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
        event.target.style.transform = `skew(${randomRange(20, 180)}deg, ${randomRange(20, 180)}deg)`;
    });
})

let funBus = document.querySelector('.fun-bus');
funBus.addEventListener('click', (event) => {
    event.target.style.width = randomRange(100, 1200) + 'px';
})

let logo = document.querySelector('.logo-heading');
document.addEventListener('keydown', (event) => {
    let leftMargin = window.getComputedStyle(logo).getPropertyValue('margin-left');
    // event.target.style.marginLeft = parseFloat(leftMargin) + 10 + 'px';
    // logo.style.backgroundColor = getRandomColor();
    logo.style.marginLeft = parseFloat(leftMargin) + 10 + 'px';
})

let headingTwo = document.querySelectorAll('h2');
document.addEventListener('scroll', (event) => {
    headingTwo.forEach((element) => {
        element.style.fontSize = '6.5rem';
    });
})

window.addEventListener('load', (event) => {
    let loadedMessage = document.createElement("p");
    loadedMessage.innerHTML = "We're LOAAADED";
    loadedMessage.style.cssText = "color: white; background: black; text-align: center; border-radius: 10px; margin: 0 auto; position: absolute; width: 200px; left: 50%; margin-left: -100px; padding: 10px 15px; top: 20px";
    document.body.appendChild(loadedMessage);
})

const messageToast = (text) => {
    let loadedMessage = document.createElement("p");
    loadedMessage.innerHTML = text;
    loadedMessage.style.cssText = "color: white; background: blue; text-align: center; border-radius: 10px; margin: 0 auto; position: absolute; width: 200px; left: 50%; margin-left: -100px; padding: 10px 15px; top: 70px";
    document.body.appendChild(loadedMessage);
    setTimeout(() => {
        loadedMessage.parentNode.removeChild(loadedMessage);
    }, 1000);
}

window.addEventListener('resize', (event) => {
    messageToast('Resiiiiiiiiized');
})