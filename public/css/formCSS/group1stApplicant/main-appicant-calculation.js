const { re } = require("mathjs");

function calculateAverage() {
    const Array = ["#basic1","#basic2","#basic3","#basic4","#basic5","#basic6"]
    Array.forEach(item=>{
        try{
            const amount = math.evaluate(g(item));
            document.querySelector(item).value = amount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
        }catch(e){

        };
    });
    //==============================================================================================================================
    //calculation for employment income
    const inputs = document.querySelectorAll(' .basic-income');
    const VariableIncomes = document.querySelectorAll('.variable-income');
    const variableFactor = document.querySelector('#variable-income-factor').value;
    //alert(variableFactor)

    //fixed income
    let sum = 0;
    let count = 0; 

    //variable income
    let sum2 = 0;
    let count2 = 0; 

    // Loop through each input element
    inputs.forEach(input => {
        const value = parseFloat(input.value.replace(/,/g, '')); // Remove commas and convert to number
        if (!isNaN(value)) { // Check if it's a valid number
            sum += value; // Add to sum
            count++; // Increment count
        }
    });

    VariableIncomes.forEach(VariableIncome => {
        const value2 = parseFloat(VariableIncome.value.replace(/,/g, '')); // Remove commas and convert to number
        if (!isNaN(value2)) { // Check if it's a valid number
            sum2 += value2*tc(variableFactor); // Add to sum
            count2++; // Increment count
        }
    });

        if(count > count2){
            count2 = count;
        }

    // Calculate the average if count > 0
    const average = count > 0 ? (sum / count) : 0;   //basic income
    const average2 = count2 > 0 ? (sum2 / count2) : 0; //varianble income

    const TotalAverage = average + average2;
    const TotalAverageIncomeAfterStatutoryDeduction = TotalAverage * tc(document.querySelector("#net-income-factor").value);

    //Array
    const arrays = [TotalAverage, TotalAverageIncomeAfterStatutoryDeduction];

    const formattedValue = arrays.map(array => 
        parseFloat(array).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }));

    // Display the result (you can modify this to suit your needs)
    document.querySelector(".main-applicant-gross-income-amount").innerText = `${formattedValue[0]}`;
    document.querySelector(".main-applicant-net-income-amount").innerText = `${formattedValue[1]}`;

    //perform inform calculation
    performIncomeCalculation()
}

function bornYearMainApplicant(){
    const bornYear = tc(document.querySelector("#Applicant-born-year-1").value);

        if(bornYear ==""){
            document.querySelector("#tenure").value = "";
            document.querySelector("#Applicant-born-year-1").value = "";
            document.querySelector("#tenure-description").innerText = "Tenure (" + 0 + " months)";
            return
        }

    const thisYear = new Date(new Date().getFullYear()-0,0,1).toLocaleString('en-US', {year: 'numeric'});
    let remainingTenure = 70-(thisYear - bornYear);
    const age = thisYear - bornYear;

        if(remainingTenure >35){
            remainingTenure = 35;
        } 

    document.querySelector("#tenure").value = remainingTenure;
    document.querySelector("#Applicant-born-year-1").value = age;

    totalTenure()
    installment()
}