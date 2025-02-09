// const { isNumber } = require("mathjs");

function NumberOFIncomeTax() {
    //defined income factor
    const incomefactor = g("#variable-income-factor");
    //defined input
    const incomeTaxYears = g("#incometax-amount-12year");
    const incomeTaxYears2 = g("#incometax-amount-22year");
    //===============================================================================================================================
    const nonEmptyCount = [incomeTaxYears, incomeTaxYears2].filter(variable => variable !== "").length;
    //===============================================================================================================================

    return nonEmptyCount;
}

function automateCalculateforBalance_2(){
    const array = {
        "#BalanceBankStatement-1-12": ["#DebitBankStatement-1-12","#CreditBankStatement-1-12","#BalanceBankStatement-1-12"],
        "#BalanceBankStatement-1-22": ["#DebitBankStatement-1-22","#CreditBankStatement-1-22","#BalanceBankStatement-1-12"],
        "#BalanceBankStatement-1-32": ["#DebitBankStatement-1-32","#CreditBankStatement-1-32","#BalanceBankStatement-1-22"],
        "#BalanceBankStatement-1-42": ["#DebitBankStatement-1-42","#CreditBankStatement-1-42","#BalanceBankStatement-1-32"],
        "#BalanceBankStatement-1-52": ["#DebitBankStatement-1-52","#CreditBankStatement-1-52","#BalanceBankStatement-1-42"],
        "#BalanceBankStatement-1-62": ["#DebitBankStatement-1-62","#CreditBankStatement-1-62","#BalanceBankStatement-1-52"],        
    }
    Object.keys(array).forEach(balance =>{
        try{
            const [debit,credit,lastBalance] = array[balance];
            if(credit !== "#CreditBankStatement-1-12"){
                if(g(debit) !== "" && g(credit) !== "" && g(lastBalance) !== ""
                ){
                    // alert((g(debit)))
                    const balanceAmount = tc(g(lastBalance)) + tc(g(credit)) - tc(g(debit));
                    document.querySelector(balance).value = balanceAmount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});              
                }
            }else{

            }

        }catch(e){

        }
    });
}
function automateCalculateforBalance2_2(){
    const array = {
        "#BalanceBankStatement-2-12": ["#DebitBankStatement-2-12","#CreditBankStatement-2-12","#BalanceBankStatement-2-12"],
        "#BalanceBankStatement-2-22": ["#DebitBankStatement-2-22","#CreditBankStatement-2-22","#BalanceBankStatement-2-12"],
        "#BalanceBankStatement-2-32": ["#DebitBankStatement-2-32","#CreditBankStatement-2-32","#BalanceBankStatement-2-22"],
        "#BalanceBankStatement-2-42": ["#DebitBankStatement-2-42","#CreditBankStatement-2-42","#BalanceBankStatement-2-32"],
        "#BalanceBankStatement-2-52": ["#DebitBankStatement-2-52","#CreditBankStatement-2-52","#BalanceBankStatement-2-42"],
        "#BalanceBankStatement-2-62": ["#DebitBankStatement-2-62","#CreditBankStatement-2-62","#BalanceBankStatement-2-52"],        
    }
    Object.keys(array).forEach(balance =>{
        try{
            const [debit,credit,lastBalance] = array[balance];
            if(credit !== "#CreditBankStatement-2-12"){
                if(g(debit) !== "" && g(credit) !== "" && g(lastBalance) !== ""
                ){
                    // alert((g(debit)))
                    const balanceAmount = tc(g(lastBalance)) + tc(g(credit)) - tc(g(debit));
                    document.querySelector(balance).value = balanceAmount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});              
                }
            }else{

            }

        }catch(e){

        }
    });
}
function automateCalculateforBalance3_2(){
    const array = {
        "#BalanceBankStatement-3-12": ["#DebitBankStatement-3-12","#CreditBankStatement-3-12","#BalanceBankStatement-3-12"],
        "#BalanceBankStatement-3-22": ["#DebitBankStatement-3-22","#CreditBankStatement-3-22","#BalanceBankStatement-3-12"],
        "#BalanceBankStatement-3-32": ["#DebitBankStatement-3-32","#CreditBankStatement-3-32","#BalanceBankStatement-3-22"],
        "#BalanceBankStatement-3-42": ["#DebitBankStatement-3-42","#CreditBankStatement-3-42","#BalanceBankStatement-3-32"],
        "#BalanceBankStatement-3-52": ["#DebitBankStatement-3-52","#CreditBankStatement-3-52","#BalanceBankStatement-3-42"],
        "#BalanceBankStatement-3-62": ["#DebitBankStatement-3-62","#CreditBankStatement-3-62","#BalanceBankStatement-3-52"],        
    }
    Object.keys(array).forEach(balance =>{
        try{
            const [debit,credit,lastBalance] = array[balance];
            if(credit !== "#CreditBankStatement-3-12"){
                if(g(debit) !== "" && g(credit) !== "" && g(lastBalance) !== ""
                ){
                    // alert((g(debit)))
                    const balanceAmount = tc(g(lastBalance)) + tc(g(credit)) - tc(g(debit));
                    document.querySelector(balance).value = balanceAmount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});              
                }
            }else{

            }

        }catch(e){

        }
    });
}
function totalIncomeFromSelfEmployment2(){
    if(document.querySelector("#type-of-income-2").value === "Self Employment-BS"){
        const array = [".total-credit-amount-12", ".total-credit-amount-22", ".total-credit-amount-32"]
    
        let sum = 0;
    
        array.forEach(input => {
            const value = parseFloat(document.querySelector(input).innerText.replace(/,/g, '')); 
            if (!isNaN(value)) { 
                sum += value; 
            }
        });
        document.querySelector(".Sec-applicant-self-employment-income-amount").innerText = sum.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    }else if(document.querySelector("#type-of-income-2").value ==="Self Employment-IncomeTax"){
        const income = document.querySelector(".net-income-tax2").innerText;

        document.querySelector(".Sec-applicant-self-employment-income-amount").innerText = income;
    }
    //Perform Net income and DSR Calculation
    performIncomeCalculation2()
    DsrCalculation()   

}
//======================================================================================================================================================================================

function IncomeTaxCalculation2(){

    const incomeTaxYears = g("#incometax-amount-12year");
    const incomeTaxYears2 = g("#incometax-amount-22year");
    const incomeTaxFactor = g("#Income-Tax-factor")

    const year = NumberOFIncomeTax()
    // alert((tc(incomeTaxYears2)+tc(incomeTaxYears))/year)

    let totalIncomeTax = (tc(incomeTaxYears2)+tc(incomeTaxYears))/year;
    let IncomeTaxVariance = (tc(incomeTaxYears2) - tc(incomeTaxYears))/tc(incomeTaxYears);

    if (IncomeTaxVariance == "Infinity") {
        IncomeTaxVariance = 1;
        // Perform your desired actions here
    } 
    if(isNaN(IncomeTaxVariance)){
        IncomeTaxVariance = 0.00
    }

    if (isNaN(incomeTaxFactor)){
        netIncomeTax = (totalIncomeTax/12)
    }else{
        netIncomeTax = (totalIncomeTax*tc(incomeTaxFactor))/12
    }
    if(isNaN(netIncomeTax)){
        netIncomeTax = 0.00
    }

    ni(".net-income-tax2", netIncomeTax);
    ni(".number-of-year-recognized-net-income-tax2", year);
    ni(".income-tax-variance2", IncomeTaxVariance);

    //send finalIncomeToDSRCalculation
    totalIncomeFromSelfEmployment2()
}

function ShareOwnershipCalculation2(){
    const shareOwnership = g("#share-ownership-amount2");
    const shareOwnershipFactor = g("#total-issued-capital-amount2");

    shareOwnershipPercentage = tc(shareOwnership)/tc(shareOwnershipFactor);

    if(isNaN(shareOwnershipPercentage)){
        shareOwnershipPercentage = 0.00
    }

    ni(".actual-share-ownership2", shareOwnershipPercentage);
}
//======================================================================================================================================================================================
function ShareHoldingAlert2(){
    if(document.querySelector("#shareholding-income-factor2").innerText == 0.00){
        alert("Kindly defined total shareholding");
    }else{   
    }
}

//1st bank statement
function NewtotalCreditAfterShareholdingincomefactor2(){
    //Credit Calculation
    const shareholdingincomefactor = document.getElementById("shareholding-income-factor2").innerText;
    const bankStatementFactor = g("#Bank-Statement-Factor");
    array = {
        ".total-credit-amount-12": ["#CreditBankStatement-1-12","#CreditBankStatement-1-22","#CreditBankStatement-1-32","#CreditBankStatement-1-42","#CreditBankStatement-1-52","#CreditBankStatement-1-62"],
        ".total-credit-amount-22": ["#CreditBankStatement-2-12","#CreditBankStatement-2-22","#CreditBankStatement-2-32","#CreditBankStatement-2-42","#CreditBankStatement-2-52","#CreditBankStatement-2-62"],
        ".total-credit-amount-32": ["#CreditBankStatement-3-12","#CreditBankStatement-3-22","#CreditBankStatement-3-32","#CreditBankStatement-3-42","#CreditBankStatement-3-52","#CreditBankStatement-3-62"],
    }
    Object.keys(array).forEach(total =>{
        try{
            const [i1,i2,i3,i4,i5,i6] = array[total];
            const totalbankstatement = [g(i1), g(i2), g(i3), g(i4), g(i5), g(i6)].filter(variable => variable !== "").length;
            let totalCredit = (((tc(g(i1)) + tc(g(i2)) + tc(g(i3)) + tc(g(i4)) + tc(g(i5)) + tc(g(i6)))/totalbankstatement)*tc(shareholdingincomefactor))*tc(bankStatementFactor);         
            
                if(isNaN(totalCredit)){
                    totalCredit = 0.00
                }

            document.querySelector(total).innerText = totalCredit.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
            
            //Automate calculate for balance
            if(total === ".total-credit-amount-12"){
                automateCalculateforBalance_2()
            }else if(total === ".total-credit-amount-22"){
                automateCalculateforBalance2_2()
            }else if(total === ".total-credit-amount-32"){
                automateCalculateforBalance3_2()
            }

            
        }catch(e){

        }
    })
    //send finalIncomeToDSRCalculation
    totalIncomeFromSelfEmployment2()

}


function NewtotalDebitAfterShareholdingincomefactor2(){
    //Credit Calculation
    const shareholdingincomefactor = document.getElementById("shareholding-income-factor2").innerText;
    const bankStatementFactor = g("#Bank-Statement-Factor");
    array = {
        ".total-debit-amount-12": ["#DebitBankStatement-1-12","#DebitBankStatement-1-22","#DebitBankStatement-1-32","#DebitBankStatement-1-42","#DebitBankStatement-1-52","#DebitBankStatement-1-62"],
        ".total-debit-amount-22": ["#DebitBankStatement-2-12","#DebitBankStatement-2-22","#DebitBankStatement-2-32","#DebitBankStatement-2-42","#DebitBankStatement-2-52","#DebitBankStatement-2-62"],
        ".total-debit-amount-32": ["#DebitBankStatement-3-12","#DebitBankStatement-3-22","#DebitBankStatement-3-32","#DebitBankStatement-3-42","#DebitBankStatement-3-52","#DebitBankStatement-3-62"],
    }
    Object.keys(array).forEach(total =>{
        try{
            const [i1,i2,i3,i4,i5,i6] = array[total];
            const totalbankstatement = [g(i1), g(i2), g(i3), g(i4), g(i5), g(i6)].filter(variable => variable !== "").length;
            let totalCredit = (((tc(g(i1)) + tc(g(i2)) + tc(g(i3)) + tc(g(i4)) + tc(g(i5)) + tc(g(i6)))/totalbankstatement)*tc(shareholdingincomefactor))*tc(bankStatementFactor);         
            
                if(isNaN(totalCredit)){
                    totalCredit = 0.00
                }

            document.querySelector(total).innerText = totalCredit.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

            //Automate calculate for balance
            if(total === ".total-debit-amount-12"){
                automateCalculateforBalance_2()
            }else if(total === ".total-debit-amount-22"){
                automateCalculateforBalance2_2()
            }else if(total === ".total-debit-amount-32"){
                automateCalculateforBalance3_2()
            }
        }catch(e){

        }
    })
    //send finalIncomeToDSRCalculation
    totalIncomeFromSelfEmployment2()

}


function NewtotalBalanceAfterShareholdingincomefactor2(){
    //Credit Calculation
    const shareholdingincomefactor = document.getElementById("shareholding-income-factor2").innerText;
    const bankStatementFactor = g("#Bank-Statement-Factor");
    array = {
        ".total-balance-amount-12": ["#BalanceBankStatement-1-12","#BalanceBankStatement-1-22","#BalanceBankStatement-1-32","#BalanceBankStatement-1-42","#BalanceBankStatement-1-52","#BalanceBankStatement-1-62"],
        ".total-balance-amount-22": ["#BalanceBankStatement-2-12","#BalanceBankStatement-2-22","#BalanceBankStatement-2-32","#BalanceBankStatement-2-42","#BalanceBankStatement-2-52","#BalanceBankStatement-2-62"],
        ".total-balance-amount-32": ["#BalanceBankStatement-3-12","#BalanceBankStatement-3-22","#BalanceBankStatement-3-32","#BalanceBankStatement-3-42","#BalanceBankStatement-3-52","#BalanceBankStatement-3-62"],
    }
    Object.keys(array).forEach(total =>{
        try{
            const [i1,i2,i3,i4,i5,i6] = array[total];
            const totalbankstatement = [g(i1), g(i2), g(i3), g(i4), g(i5), g(i6)].filter(variable => variable !== "").length;
            let totalCredit = (((tc(g(i1)) + tc(g(i2)) + tc(g(i3)) + tc(g(i4)) + tc(g(i5)) + tc(g(i6)))/totalbankstatement)*tc(shareholdingincomefactor))*tc(bankStatementFactor);         
            
                if(isNaN(totalCredit)){
                    totalCredit = 0.00
                }

            document.querySelector(total).innerText = totalCredit.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

        }catch(e){

        }
    })
    //send finalIncomeToDSRCalculation
    totalIncomeFromSelfEmployment2()
}

