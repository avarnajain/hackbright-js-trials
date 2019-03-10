// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers['home'] = '123-456-7890';
phoneNumbers['business'] = '098-7654-321';
phoneNumbers['mobile'] = '111-222-3333';




// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo(name, number, busiName) {
  console.log(`Name: ${name}`);
  console.log(`Number: ${number}`);
  console.log(`Business Name: ${busiName}`);
}


// Add function to print all addresses, including a header

function printAddresses(addressList) {
  console.log('Address:');
  for (let address of addressList) {
    console.log(address);
  }
}
// Add function to print phone types and numbers

function showPhoneNums(phoneNumsMap) {
  console.log('Phone Numbers:');
  for (let [device, phoneNum] of Object.entries(phoneNumsMap)) {
    console.log(`${device}:${phoneNum}`);
  }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();
// Add function to add transactions

function addTransaction(date, amt) {
  transactions[date] = amt;
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);


// Add function to show balance status
function showBalanceStatus(balanceAmt) {
  if (balanceAmt < 0) {
    console.log('YOU ARE OVERDRAWN');
  } else if (balanceAmt > 0 && balanceAmt < 20) {
    console.log('YOU are close to ZERO balance!');
  } else {
    console.log('Thank you for your business!');
  }
}

// Add function to show transactions
function showTransactions(transMap, startBal) {
  console.log(`Starting Balance: ${startBal}`);
  for (let [date, amt] of Object.entries(transMap)) {
    if (amt < 0) {
      console.log(`Date: ${date}, 
        Withdrawal: ${amt}, 
        Balance: ${startBal += amt}`);
    } else {
      console.log(`Date: ${date}, 
        Deposit: ${amt}, 
        Balance: ${startBal += amt}`);
    }
  }
  console.log(`Balance: ${showBalanceStatus(startBal)}`);
  if (startBal < 0) {
    console.log('If the balance falls below zero, there is a one-time $25 fee charged to the account.');
  }
} 

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




