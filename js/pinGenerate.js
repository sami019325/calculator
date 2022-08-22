console.log("pin generator");

function randomPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinLength = pin.toString().length
    if (pinLength === 4) {
        return pin;
    }
    else {
        return randomPin();
    };
};

// =============== get element by id and insert value =============================

function getElementAndInsertValue(id, Value) {
    document.getElementById(id).value = Value;
}


document.getElementById('generate-pin-btn').addEventListener('click', function () {


    const randomNumber = randomPin();
    console.log(randomNumber);
    getElementAndInsertValue("InputBarOfrandom", randomNumber)
});

document.getElementById('numbers').addEventListener('click', function (eventNumber) {
    const GottenValue = eventNumber.target.innerText
    if (isNaN(GottenValue)) {
        if (GottenValue === 'C') {
            // console.log('Its Cccccccccccccccccccccccccccc')
            getElementAndInsertValue("inputOfType", " ")
        }
        // &lt;
        else if (GottenValue === "<") {
            const Numbers = document.getElementById("inputOfType").value
            const numbersInString = Numbers.split('');
            numbersInString.pop();
            const reformOfNumbers = numbersInString.join("");
            console.log(reformOfNumbers);
            getElementAndInsertValue("inputOfType", reformOfNumbers)
        }

    }
    else {
        const previousNumbers = document.getElementById("inputOfType").value

        const totalPin = previousNumbers + GottenValue

        getElementAndInsertValue("inputOfType", totalPin)
    }
});


// ============================================== verify pin ===============================
document.getElementById('verify-btn').addEventListener("click", function () {
    const generatedValue = document.getElementById('InputBarOfrandom').value;
    const dialedValue = document.getElementById('inputOfType').value;


    if (generatedValue !== "" && generatedValue === dialedValue) {
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-error').style.display = 'none';
    }

    else {
        document.getElementById('notify-error').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';

        const totalAction = document.getElementById('action-left');
        const totalActionString = parseInt(totalAction.innerText);
        const actionLeft = totalActionString - 1;
        totalAction.innerText = actionLeft;
        if (actionLeft == 0) {
            document.getElementById('verify-btn').disabled = true;
        }
    }

});