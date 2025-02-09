// const { isNumber } = require("mathjs");

function NumberOFIncomeTax2() {
    //defined income factor
    const incomefactor = g("#variable-income-factor");
    //defined input
    const incomeTaxYears = g("#incometax-amount-1year");
    const incomeTaxYears2 = g("#incometax-amount-2year");
    //===============================================================================================================================
    const nonEmptyCount = [incomeTaxYears, incomeTaxYears2].filter(variable => variable !== "").length;
    //===============================================================================================================================

    return nonEmptyCount;
}

function automateCalculateforBalance(){
    const array = {
        "#BalanceBankStatement-1-1": ["#DebitBankStatement-1-1","#CreditBankStatement-1-1","#BalanceBankStatement-1-1"],
        "#BalanceBankStatement-1-2": ["#DebitBankStatement-1-2","#CreditBankStatement-1-2","#BalanceBankStatement-1-1"],
        "#BalanceBankStatement-1-3": ["#DebitBankStatement-1-3","#CreditBankStatement-1-3","#BalanceBankStatement-1-2"],
        "#BalanceBankStatement-1-4": ["#DebitBankStatement-1-4","#CreditBankStatement-1-4","#BalanceBankStatement-1-3"],
        "#BalanceBankStatement-1-5": ["#DebitBankStatement-1-5","#CreditBankStatement-1-5","#BalanceBankStatement-1-4"],
        "#BalanceBankStatement-1-6": ["#DebitBankStatement-1-6","#CreditBankStatement-1-6","#BalanceBankStatement-1-5"],        
    }
    Object.keys(array).forEach(balance =>{
        try{
            const [debit,credit,lastBalance] = array[balance];
            if(credit !== "#CreditBankStatement-1-1"){
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
function automateCalculateforBalance2(){
    const array = {
        "#BalanceBankStatement-2-1": ["#DebitBankStatement-2-1","#CreditBankStatement-2-1","#BalanceBankStatement-2-1"],
        "#BalanceBankStatement-2-2": ["#DebitBankStatement-2-2","#CreditBankStatement-2-2","#BalanceBankStatement-2-1"],
        "#BalanceBankStatement-2-3": ["#DebitBankStatement-2-3","#CreditBankStatement-2-3","#BalanceBankStatement-2-2"],
        "#BalanceBankStatement-2-4": ["#DebitBankStatement-2-4","#CreditBankStatement-2-4","#BalanceBankStatement-2-3"],
        "#BalanceBankStatement-2-5": ["#DebitBankStatement-2-5","#CreditBankStatement-2-5","#BalanceBankStatement-2-4"],
        "#BalanceBankStatement-2-6": ["#DebitBankStatement-2-6","#CreditBankStatement-2-6","#BalanceBankStatement-2-5"],        
    }
    Object.keys(array).forEach(balance =>{
        try{
            const [debit,credit,lastBalance] = array[balance];
            if(credit !== "#CreditBankStatement-2-1"){
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
function automateCalculateforBalance3(){
    const array = {
        "#BalanceBankStatement-3-1": ["#DebitBankStatement-3-1","#CreditBankStatement-3-1","#BalanceBankStatement-3-1"],
        "#BalanceBankStatement-3-2": ["#DebitBankStatement-3-2","#CreditBankStatement-3-2","#BalanceBankStatement-3-1"],
        "#BalanceBankStatement-3-3": ["#DebitBankStatement-3-3","#CreditBankStatement-3-3","#BalanceBankStatement-3-2"],
        "#BalanceBankStatement-3-4": ["#DebitBankStatement-3-4","#CreditBankStatement-3-4","#BalanceBankStatement-3-3"],
        "#BalanceBankStatement-3-5": ["#DebitBankStatement-3-5","#CreditBankStatement-3-5","#BalanceBankStatement-3-4"],
        "#BalanceBankStatement-3-6": ["#DebitBankStatement-3-6","#CreditBankStatement-3-6","#BalanceBankStatement-3-5"],        
    }
    Object.keys(array).forEach(balance =>{
        try{
            const [debit,credit,lastBalance] = array[balance];
            if(credit !== "#CreditBankStatement-3-1"){
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
function totalIncomeFromSelfEmployment(){
    if(document.querySelector("#type-of-income-1").value === "Self Employment-BS"){
        const array = [".total-credit-amount-1", ".total-credit-amount-2", ".total-credit-amount-3"]
    
        let sum = 0;
    
        array.forEach(input => {
            const value = parseFloat(document.querySelector(input).innerText.replace(/,/g, '')); 
            if (!isNaN(value)) { 
                sum += value; 
            }
        });
        document.querySelector(".main-applicant-self-employment-income-amount").innerText = sum.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    }else if(document.querySelector("#type-of-income-1").value ==="Self Employment-IncomeTax"){
        const income = document.querySelector(".net-income-tax").innerText;

        document.querySelector(".main-applicant-self-employment-income-amount").innerText = income;
    }
    //Perform Net income and DSR Calculation
    performIncomeCalculation()
    DsrCalculation()   

}
//======================================================================================================================================================================================

function IncomeTaxCalculation(){

    const incomeTaxYears = g("#incometax-amount-1year");
    const incomeTaxYears2 = g("#incometax-amount-2year");
    const incomeTaxFactor = g("#Income-Tax-factor")
    
    const year = NumberOFIncomeTax2()
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

    ni(".net-income-tax", netIncomeTax);
    ni(".number-of-year-recognized-net-income-tax", year);
    ni(".income-tax-variance", IncomeTaxVariance);

    //send finalIncomeToDSRCalculation
    totalIncomeFromSelfEmployment()
}

function ShareOwnershipCalculation(){
    const shareOwnership = g("#share-ownership-amount");
    const shareOwnershipFactor = g("#total-issued-capital-amount");

    shareOwnershipPercentage = tc(shareOwnership)/tc(shareOwnershipFactor);

    if(isNaN(shareOwnershipPercentage)){
        shareOwnershipPercentage = 0.00
    }

    ni(".actual-share-ownership", shareOwnershipPercentage);
}
//======================================================================================================================================================================================
function ShareHoldingAlert(){
    if(document.querySelector("#shareholding-income-factor").innerText == 0.00){
        alert("Kindly defined total shareholding");
    }else{

    }
}
//1st bank statement
function NewtotalCreditAfterShareholdingincomefactor(){
    //Credit Calculation
    const shareholdingincomefactor = document.getElementById("shareholding-income-factor").innerText;
    const bankStatementFactor = g("#Bank-Statement-Factor");
    array = {
        ".total-credit-amount-1": ["#CreditBankStatement-1-1","#CreditBankStatement-1-2","#CreditBankStatement-1-3","#CreditBankStatement-1-4","#CreditBankStatement-1-5","#CreditBankStatement-1-6"],
        ".total-credit-amount-2": ["#CreditBankStatement-2-1","#CreditBankStatement-2-2","#CreditBankStatement-2-3","#CreditBankStatement-2-4","#CreditBankStatement-2-5","#CreditBankStatement-2-6"],
        ".total-credit-amount-3": ["#CreditBankStatement-3-1","#CreditBankStatement-3-2","#CreditBankStatement-3-3","#CreditBankStatement-3-4","#CreditBankStatement-3-5","#CreditBankStatement-3-6"],
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
            if(total === ".total-credit-amount-1"){
                automateCalculateforBalance()
            }else if(total === ".total-credit-amount-2"){
                automateCalculateforBalance2()
            }else if(total === ".total-credit-amount-3"){
                automateCalculateforBalance3()
            }

            
        }catch(e){

        }
    })
    //send finalIncomeToDSRCalculation
    totalIncomeFromSelfEmployment()

}

function NewtotalDebitAfterShareholdingincomefactor(){
    //Credit Calculation
    const shareholdingincomefactor = document.getElementById("shareholding-income-factor").innerText;
    const bankStatementFactor = g("#Bank-Statement-Factor");
    array = {
        ".total-debit-amount-1": ["#DebitBankStatement-1-1","#DebitBankStatement-1-2","#DebitBankStatement-1-3","#DebitBankStatement-1-4","#DebitBankStatement-1-5","#DebitBankStatement-1-6"],
        ".total-debit-amount-2": ["#DebitBankStatement-2-1","#DebitBankStatement-2-2","#DebitBankStatement-2-3","#DebitBankStatement-2-4","#DebitBankStatement-2-5","#DebitBankStatement-2-6"],
        ".total-debit-amount-3": ["#DebitBankStatement-3-1","#DebitBankStatement-3-2","#DebitBankStatement-3-3","#DebitBankStatement-3-4","#DebitBankStatement-3-5","#DebitBankStatement-3-6"],
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
            if(total === ".total-debit-amount-1"){
                automateCalculateforBalance()
            }else if(total === ".total-debit-amount-2"){
                automateCalculateforBalance2()
            }else if(total === ".total-debit-amount-3"){
                automateCalculateforBalance3()
            }
        }catch(e){

        }
    })
    //send finalIncomeToDSRCalculation
    totalIncomeFromSelfEmployment()

}


function NewtotalBalanceAfterShareholdingincomefactor(){
    //Credit Calculation
    const shareholdingincomefactor = document.getElementById("shareholding-income-factor").innerText;
    const bankStatementFactor = g("#Bank-Statement-Factor");
    array = {
        ".total-balance-amount-1": ["#BalanceBankStatement-1-1","#BalanceBankStatement-1-2","#BalanceBankStatement-1-3","#BalanceBankStatement-1-4","#BalanceBankStatement-1-5","#BalanceBankStatement-1-6"],
        ".total-balance-amount-2": ["#BalanceBankStatement-2-1","#BalanceBankStatement-2-2","#BalanceBankStatement-2-3","#BalanceBankStatement-2-4","#BalanceBankStatement-2-5","#BalanceBankStatement-2-6"],
        ".total-balance-amount-3": ["#BalanceBankStatement-3-1","#BalanceBankStatement-3-2","#BalanceBankStatement-3-3","#BalanceBankStatement-3-4","#BalanceBankStatement-3-5","#BalanceBankStatement-3-6"],
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
    totalIncomeFromSelfEmployment()
}

