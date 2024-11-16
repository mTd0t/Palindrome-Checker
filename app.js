const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('results');

checkPalindromeBtn.addEventListener("click", checkIfEmpty);

function checkIfEmpty() {
    if(userInput.value === "") {
        alert('Please enter a valid input');
    }

    let inputStr = userInput.value.trim().toLowerCase();
    let reversedStr = inputStr.split('').reverse().join('');

    if(inputStr === reversedStr) {
        resultDiv.replaceChildren(inputStr + " is a palindrome");
    }else{
        resultDiv.replaceChildren(inputStr + " is not a palindrome");
    }
}



