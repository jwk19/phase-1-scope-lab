// Step 1: Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// Step 2: Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
    // Access the global variable customerName and convert it to uppercase
    customerName = customerName.toUpperCase();
}

// Step 3: Write a function that declares a variable called bestCustomer in global scope and assigns it to 'not bob'.
function setBestCustomer() {
    // Declare a global variable bestCustomer and assign it the value 'not bob'
    bestCustomer = 'not bob';
}

// Step 4: Write a function that changes the global bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    // Change the value of the global variable bestCustomer
    bestCustomer = 'maybe bob';
}

// Step 5: Declare a constant in global scope called leastFavoriteCustomer and assign it an initial value
const leastFavoriteCustomer = 'some initial value';

// Step 5: Write a function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    // Attempt to change the value of the constant leastFavoriteCustomer
    // This will throw an error because constants cannot be reassigned
    throw new Error("Cannot reassign a constant variable");
}

