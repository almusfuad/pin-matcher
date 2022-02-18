const clacInput = document.getElementById('typed-number');


function getPin() {
    //     const clacInput = document.getElementById('typed-number');
    clacInput.value = '';
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;

    } else {
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    //     console.log(pin);
}


document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    //     const clacInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            clacInput.value = "";
        }
    } else {
        const previousNumber = clacInput.value;
        const newNumber = previousNumber + number;
        clacInput.value = newNumber;
    }


});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-failed');
    if (pin == typedNumbers) {

        successMessage.style.display = 'block';
        failError.style.display = 'none';

    } else {
        successMessage.style.display = 'none';

        failError.style.display = 'block';

    }
}