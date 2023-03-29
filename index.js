const numKeys = document.querySelectorAll('.num-key');
const opKeys = document.querySelectorAll('.op-key');
const equalsKey = document.getElementById('equals-key');
const resetKey = document.getElementById('reset-key');
const delKey = document.getElementById('del-key');
const screen = document.querySelector('.screen');

let operation = '';
let num1;
let num2;

let secondNum = false;

numKeys.forEach(key => {
    key.addEventListener('click', () => {
        if (screen.textContent === '0') {
            screen.textContent = '';
        }
        if (!secondNum) {
            screen.textContent += key.textContent;
        } else {
            screen.textContent = '';
            screen.textContent += key.textContent;
            secondNum = false;
        }

    });
});

opKeys.forEach(key => {
    key.addEventListener('click', () => {
        operation = key.textContent.toLowerCase();
        num1 = +screen.textContent;
        secondNum = true;
    });
});

equalsKey.addEventListener('click', () => {

    num2 = +screen.textContent;

    if (num1 && num2) {
        let answer = '';

        switch(operation) {
            case '+': answer = num1 + num2; break;
            case '-': answer = num1 - num2; break;
            case 'x': answer = num1 * num2; break;
            case '/': answer = num1 / num2; break;
        }

        screen.textContent = answer;
    }
});

resetKey.addEventListener('click', () => {
    screen.textContent = '0';
});

delKey.addEventListener('click', () => {
    const prevText = screen.textContent;
    screen.textContent = prevText.substring(0, prevText.length - 1);
    if (screen.textContent === '') {
        screen.textContent = '0';
    }
});


// THEMES

const body = document.querySelector('body');
const themes = ['dark', 'light', 'purple'];
let curTheme = 0;

const btnToggle = document.querySelector('#btn-toggle');
const circle = document.querySelector('.circle');

body.className = themes[curTheme];

btnToggle.addEventListener('click', () => {
    if (curTheme < 2) {
        curTheme += 1;
    } else {
        curTheme = 0;
    }
    body.className = themes[curTheme];
    circle.style.transform = `translate(${curTheme * 15}px, 0)`;
});