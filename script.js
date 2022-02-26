// declare variables to fetch the various inputs captured by the user in the calculator

var principal = document.getElementById("principal");
var str = document.getElementById("result");
var rate = document.getElementById("rate");
var years = document.getElementById("years");

//decalre variable that calculates the interest earned
var interest = principal * years * rate /100;

//declare a variable that fetches the full year YYYY
var year = new Date().getFullYear();

function updateRate() 

// update the rate displayed in the HTML as the user selects from the range available
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}

function compute () {

//set the values of the initialised variables by fetching the data captured in the HTML
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    years = parseInt(years);
// declare a variable that will determine the value of interest on the principal amount over the period set
    interest = (principal * years * rate) /100;
    var amount = interest;
    var period = year+years;
    let x = document.getElementById("principal").value;
    if (x==false) {
      alert("The principal must a positive number");
      document.reload()
    }



    //write to the element with the id result the results from the compute function called
    document.getElementById("result").innerHTML="If you deposit <em>"+principal+"</em>,\<br\>at an interest rate of <em>"+rate+"</em>%\<br\>You will receive an amount of <em>"+amount+"</em>,\<br\>in the year <em>"+period+"</em>\<br\>"

}

function validateInput() {
  // initializing a variable set to the input captured for principal amount
    let x = document.getElementById("principal").value;
  // if statement to check if the user inputs a negative principal amount
    if (x < 0 ) {
  // if the amount is negative, display an alert message asking them to input a positive amount
      alert("The principal must a positive number");
  // return to the input field
      return false;
    }
  }
