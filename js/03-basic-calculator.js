// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case "+":
            return x + y

        case "-":
            return x - y

        case "*":
            return x * y

        case "/":
            return x / y

        default:
            return "invalid"
    }
}


// COLLECT FIRST NUMBER FROM USER
let num1 = parseInt(prompt("Enter first number: "))

// COLLECT SECOND NUMBER FROM USER
let num2 = parseInt(prompt("Enter second number: "))


// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt("Enter operation to be performed: (+ or - or * or /) ")

let result

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
result = calculate(num1, num2, operation)

    if (result === "invalid") {
        window.alert("Invalid operation. Please try again.")
    } else {
        window.alert("The result is " + result)
    }


