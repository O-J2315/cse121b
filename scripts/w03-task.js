/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1,number2){
    return number1 + number2;
}

function addNumbers() {
    let addnumber1 = parseFloat(document.querySelector('#add1').value);
    let addnumber2 = parseFloat(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addnumber1,addnumber2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = ()=>{
    let subtractNumber1 = parseFloat(document.querySelector('#subtract1').value);
    let subtractNumber2 = parseFloat(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1,number2) => number1 * number2;
const multiplyNumbers = () => document.querySelector('#product').value = multiply(document.querySelector('#factor1').value, document.querySelector('#factor2').value);
document.getElementById('multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1,number2) => number1 / number2;
const divideNumbers = () => document.querySelector('#quotient').value = (divide(document.querySelector('#dividend').value, document.querySelector('#divisor').value)).toFixed(2);
document.getElementById('divideNumbers').addEventListener('click',divideNumbers);


/* Decision Structure */
function getTotal(){
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    if (document.getElementById('member').checked) {
        let total = subtotal*.80;
        document.querySelector('#total').innerHTML = `$${total.toFixed(2)}`;
    }else{
        let total = subtotal; 
        document.querySelector('#total').innerHTML = `$${total.toFixed(2)}`;
    }
}
document.getElementById('getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
function isOdd(number){
    if (number % 2 ===  1) {
        return true;
    } else {
        return false;
    }
}
document.getElementById('odds').innerHTML = numbersArray.filter(isOdd);

/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbersArray.reduce((sum, number)=>sum+number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numbersArray.map(number => number *2);

/* Output Sum of Multiplied by 2 Array */

document.getElementById('sumOfMultiplied').innerHTML = numbersArray.reduce((sum, number)=>sum + (number * 2), 0);