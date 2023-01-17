let runningtotal = 0;
let buffer = "0";
let previowsOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningtotal = 0;
            break;
        case '=':
            if (previowsOperator === null) {
                return
            }
            flushOperation(preseint(buffer));
            previowsOperator = null;
            buffer = runningtotal;
            runningtotal = 0;
            break;
        case '←';
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const inBuffer = parent(buffer);
    if (runningtotal === 0) {
        runningtotal = inBuffer;
    } else {
        flashOperation(inBuffer);
    }
    previowsOperator = symbol;
    buffer = '0';

}

function flashOperation(inBuffer) {
    if (previowsOperator === '+') {
        runningtotal += inBuffer;
    } else if (previowsOperator === '-') {
        runningtotal -= inBuffer;
    } else if (previowsOperator === '*') {
        runningtotal *= inBuffer
    } else if (previowsOperator === '/') {
        runningtotal /= inBuffer;
    }
}


function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (event){
        buttonClick(event.target.innerText);
})
    
}
init();