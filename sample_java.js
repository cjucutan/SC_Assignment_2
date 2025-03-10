// Vulnerable Code

// 1. Eval Injection
function evalInjection(userInput) {
    // This is a vulnerable code because eval() will execute arbitrary JavaScript.
    eval(userInput); // Never use eval() with user input!
}

// Example of a dangerous call
let userInput1 = "alert('Hacked!')";
evalInjection(userInput1);  // This will trigger an alert and execute arbitrary code.

// 2. Insecure Direct Object Reference (IDOR)
let sensitiveData = {
    user: "admin",
    password: "1234"
};

// A bad way to access data directly without authentication check.
function getSensitiveData(user) {
    if (user === 'admin') {
        console.log(sensitiveData.password);  // This should be restricted!
    } else {
        console.log('Unauthorized access');
    }
}

// Calling with user input
getSensitiveData('admin');  // This exposes the password for an unauthorized user.

// 3. Cross-Site Scripting (XSS)
function injectXSS(userInput) {
    // This allows user input to be directly inserted into the page, leading to potential XSS attacks.
    document.getElementById('output').innerHTML = userInput;
}

// Example of injecting XSS
let userInput2 = "<script>alert('XSS');</script>";
injectXSS(userInput2);  // This will execute the JavaScript code in the user input and show the alert.

// Valid Code

// 1. Proper Input Validation
function validateInput(userInput) {
    let number = parseInt(userInput);
    if (isNaN(number)) {
        console.log('Invalid number input');
    } else {
        console.log('Valid number: ' + number);
    }
}

// Validating input
let input = '123';
validateInput(input);  // Logs: Valid number: 123

// 2. Event Handling
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// HTML Button Example
/*
<button id="myButton">Click Me</button>
*/

