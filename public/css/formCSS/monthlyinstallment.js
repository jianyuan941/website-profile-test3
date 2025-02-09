function installment(){
    let principal = tc(document.querySelector("#mortgage-loan-amount1").value);
    let Cashout = tc(document.querySelector("#Cash-out-amount1").value);
    let Fec = tc(document.querySelector("#Fec").value);
    let insurance = tc(document.querySelector("#insurance").value);
    let interestRate = tc(document.querySelector("#interest-rate").value);
    let tenure = tc(document.querySelector("#tenure").value);

    //=============================================================================================
    //total installment
    let total = principal + Fec + insurance;
    //mortgage installment calculation
    const above = (interestRate/12)*(1+(interestRate/12))**(tenure*12)
    const below = ((1+(interestRate/12))**(tenure*12))-1
    let installment = (total*above)/below
    // //cash out calculation
    const above2 = (interestRate/12)*(1+(interestRate/12))**(10*12)
    const below2 = ((1+(interestRate/12))**(10*12))-1
    let Cashout2 = (Cashout*above2)/below2
    
    
        if(isNaN(Cashout)){
            Cashout2 = 0.00
        }
        if(isNaN(installment)){
            installment = 0.00
        }

        let FinalInstallment = installment + Cashout2
        if(isNaN(FinalInstallment)){
            FinalInstallment = 0.00
        }else if(FinalInstallment === Infinity){
            FinalInstallment = 0.00
            document.querySelector(".total-interest-charges").innerText = "0.00";
        }

        document.querySelector(".monthly-installment").innerText = f(FinalInstallment);
    //=============================================================================================
    //total interest charged
    const totaldifferent = (installment*(tenure*12)) +(Cashout2*(10*12)) - (total+ Cashout)
        if(isNaN(totaldifferent)){
            totaldifferent = 0.00
        }
    document.querySelector(".total-interest-charges").innerText = f(totaldifferent);
    //=============================================================================================
    //net disposable income and dsr calculation
    DsrCalculation();
}
function DsrCalculation(){
    let existingCommitment = tc(document.querySelector(".main-applicant-total-commitment-amount").innerText);
    let existingCommitment2 = tc(document.querySelector(".Sec-applicant-total-commitment-amount").innerText);
    let NewInstallment = tc(document.querySelector(".monthly-installment").innerText);

            //Total income and Total Net Income from all applicant
            let netIncome = tc(document.querySelector(".main-applicant-total-amount").innerText);
            let netIncome2 = tc(document.querySelector(".Sec-applicant-total-amount").innerText);
            
                if(isNaN(netIncome)){
                    totalIncome = 0.00;
                }
                if(isNaN(netIncome2)){
                    totalIncome = 0.00;
                }
                if(isNaN(existingCommitment)){
                    existingCommitment = 0.00;
                }
                if(isNaN(existingCommitment2)){
                    existingCommitment2 = 0.00;
                }
            let totalIncome = netIncome + netIncome2;
            let totalNetIncome = totalIncome - existingCommitment - existingCommitment2;
            document.querySelector(".total-gross-income").innerText = totalIncome.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
            document.querySelector(".total-net-income").innerText = totalNetIncome.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

    let DSR = ((NewInstallment + existingCommitment + existingCommitment2) / totalIncome)*100;
    let NDI = totalIncome - NewInstallment - existingCommitment - existingCommitment2;
        if(DSR === Infinity){
            DSR = 0.00
            NDI = 0.00
        }else if(isNaN(DSR)){
            DSR = 0.00
            NDI = 0.00           
        }else{
            document.querySelector(".DSR-calculation").innerText = DSR.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) +" %";
        }
    document.querySelector(".total-net-disposable-income").innerText = NDI.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function mortgageloanAmount(){
    let purchasePrice = tc(document.querySelector("#purchase-price-amount").value);
    let loanMargin = tc(document.querySelector("#mortgage-loan-amount1").value);

        if(loanMargin <1){
            const LoanAmount = purchasePrice * loanMargin
            document.querySelector("#mortgage-loan-amount1").value = f(LoanAmount);
        }

    let loanMarginToPurchasePrice = tc(document.querySelector("#mortgage-loan-amount1").value)/purchasePrice
        if(isNaN(loanMarginToPurchasePrice)){
            loanMarginToPurchasePrice = 0.00
        }else if(loanMarginToPurchasePrice === Infinity){
            loanMarginToPurchasePrice = 0.00
        }
    document.querySelector("#loanfinancing-description").innerText = "Mortgage Loan Amount (" + loanMarginToPurchasePrice.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:3}) + ")"
}

function calculateCashout(){
    let cashout = document.querySelector("#Cash-out-amount1").value;
    let purchasePrice = tc(document.querySelector("#purchase-price-amount").value);
    let loanMargin = tc(document.querySelector("#mortgage-loan-amount1").value);

        let totalCashout= 0
        if(cashout ==="yes"||cashout==="Yes"||cashout==="YES"){
            totalCashout = (purchasePrice*0.9) - loanMargin
            document.querySelector("#Cash-out-amount1").value = f(totalCashout);
        }
        if(cashout<1){
            totalCashout = purchasePrice*cashout
            document.querySelector("#Cash-out-amount1").value = f(totalCashout);
        }

        let cashOutToPurchasePrice = tc(document.querySelector("#Cash-out-amount1").value)/purchasePrice
            if(isNaN(cashOutToPurchasePrice)){
                cashOutToPurchasePrice = 0.00
            }else if(cashOutToPurchasePrice === Infinity){
                cashOutToPurchasePrice = 0.00
            }
        document.querySelector("#Cash-out-description").innerText = "Cash Out Amount (" + cashOutToPurchasePrice.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}) + ")"

}
function FecFinancing(){
    //adjustment for fec
    try{
        const amount = math.evaluate(g("#Fec"));
        document.querySelector("#Fec").value = amount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }catch(e){
        //alert(e);
    }
    //=============================================================================================
    let purchasePrice = tc(document.querySelector("#purchase-price-amount").value);  
    let fec = document.querySelector("#Fec").value;

        let totalFec= 0
        if(fec==="yes"||fec==="Yes"||fec==="YES"){
            totalFec = purchasePrice*0.05
            document.querySelector("#Fec").value = f(totalFec);
        }
        if(fec<1){
            totalFec = purchasePrice*fec   
            document.querySelector("#Fec").value = f(totalFec);
        }
        let FectoPurchasePrice = tc(document.querySelector("#Fec").value)/purchasePrice
            if(isNaN(FectoPurchasePrice)){
                FectoPurchasePrice = 0.00
            }else if(FectoPurchasePrice === Infinity){
                FectoPurchasePrice = 0.00
            }
        document.querySelector("#fec-description").innerText = "Fec (" + FectoPurchasePrice.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:3}) + ")"
}
function MrttFinancing(){
    let purchasePrice = tc(document.querySelector("#purchase-price-amount").value); 
    let mrtt = document.querySelector("#insurance").value;

        let totalMrtt= 0
        if(mrtt==="yes"||mrtt==="Yes"||mrtt==="YES"){
            const totalMrtt = purchasePrice*0.05
            document.querySelector("#insurance").value = f(totalMrtt);
        }
        if(mrtt<1){
            totalMrtt = purchasePrice*mrtt   
            document.querySelector("#insurance").value = f(totalMrtt);
        }
        let MrtttoPurchasePrice = tc(document.querySelector("#insurance").value)/purchasePrice
            if(isNaN(MrtttoPurchasePrice)){
                MrtttoPurchasePrice = 0.00
            }else if(MrtttoPurchasePrice === Infinity){
                MrtttoPurchasePrice = 0.00
            }
        document.querySelector("#mrtt-description").innerText = "Mrtt/Mrta (" + MrtttoPurchasePrice.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:3}) + ")"
}
function totalTenure(){
    let tenure = tc(document.querySelector("#tenure").value);
    let totalTenure = tenure*12
    document.querySelector("#tenure-description").innerText = "Tenure (" + totalTenure + " months)";
}