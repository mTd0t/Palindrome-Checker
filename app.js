const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkPalindromeBtn.addEventListener("click", checkIfEmpty);

function checkIfEmpty() {
    if(userInput.value === "") {
        alert("Please input a value");
    }

    const configuredUserInput = userInput.value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/gi, "");
    const reversedStr = configuredUserInput.split('').reverse().join('');

    if(configuredUserInput === reversedStr) {
        resultDiv.replaceChildren(userInput.value + " is a palindrome");
    }else{
        resultDiv.replaceChildren(userInput.value + " is not a palindrome");
    }
}

