const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const message = document.getElementById('message');
const imgElement = document.createElement('img')
const btnContainer = document.getElementById('btnContainer')

let counter = 0;
const increaseCounter = () => {
    counter++
    if(counter === 1){
        document.body.style.background = "orange",
        document.body.style.transitions = "1s"
        message.style.color = "white",
        message.innerText = "Thank you, your response has been sent"
    } 
    if(counter === 3){
        document.body.style.background = "red",
        message.innerText = "Warning! Your message has already been sent",
        btnLeft.classList.add('brokenBtnLight'),
        btnRight.classList.add('brokenBtnRightLight')
    }
    if(counter === 5){
        message.innerText = "Well done, you just broke the button",
        btnContainer.style.boxShadow = 'none',

        setTimeout(() => {
            document.body.style.backgroundImage = 'url("./img/smoke.gif")',
            document.body.style.backgroundSize = "contain",
            document.body.style.backgroundPosition = 'center',
            document.body.style.backgroundRepeat = "no-repeat"          
        }, 1200);
        setTimeout(() => {
            document.body.style.background = "#202020"
        }, 2750);
        clearTimeout();
        document.body.style.background = "#202020",
        btnLeft.classList.remove('brokenBtnLight'),
        btnRight.classList.remove('brokenBtnRightLight')
        btnLeft.classList.add('brokenBtn'),
        btnRight.classList.add('brokenBtnRight')
    }
    if(counter > 6){
        message.innerText = "You mad bro !!!",
        document.body.style.background = "#202020"
        btnLeft.classList.remove('brokenBtn'),
        btnLeft.classList.add('brokenBtnFall'),
        btnContainer.style.boxShadow = 'none',
        setTimeout(() => {
            imgElement.src = './img/newBack.jpeg';
            btnContainer.style.display = "none";
            document.body.appendChild(imgElement)
        }, 2000);

    }
}

