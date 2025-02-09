
function TotalBonusYearSubmit() {
    const bonusInput = g("#bonus1");
    const bonusInput2 = g("#bonus2");

    const nonEmptyCountBonus = [bonusInput, bonusInput2].filter(variable => variable !== "").length;

    //alert("Total Bonus Year: " + nonEmptyCountBonus)
    return nonEmptyCountBonus
}
function bonusincome(){
    
      const incomefactor = g("#bonus-income-factor");
    //defined input
    const bonusInput = g("#bonus1");
    const bonusInput2 = g("#bonus2");

    const year = TotalBonusYearSubmit() 
    let totalBonus = ((tc(bonusInput) + tc(bonusInput2))*tc(incomefactor))/(year*12);
    let variance = (tc(bonusInput) - tc(bonusInput2))/tc(bonusInput2);

    if(isNaN(totalBonus)){
        totalBonus = 0.00;
    }
    if(isNaN(variance)){
        variance = 0.00;
    }else if(variance === Infinity) {
        variance = 1;
    }else if(variance === -Infinity) {
        variance = -1;
    }
    
    ni(".bonus-analysis-year1-1", totalBonus);//send data to bonus income analysis table
    // ni(".bonus-analysis-year1-1", totalBonus);//send data to Applicants Analysis table
    ni(".bonus-analysis-year2-1", totalBonus);
    ni(".main-applicant-net-bonus-amount", totalBonus);
    ni(".bonus-income-variance-result", variance);
    ni(".number-of-year-result", year);

    //==================================================================================================
    //Perform Income Calculation
    const incomeinputs = document.querySelectorAll(".main-app-all-income");

    let totalIncome = 0;
    incomeinputs.forEach(incomeinput => {
        const number = parseFloat(incomeinput.innerText.replace(/,/g, ''));
        if(!isNaN(number)) {
            totalIncome += number
        }
    });
    document.querySelector(".main-applicant-total-amount").innerText =`${totalIncome.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
    //Perform DSR Calculation
    DsrCalculation()
}
function bonusincome2(){

    const incomefactor = g("#bonus-income-factor");
    //defined input
    const bonusInput = g("#bonus1");
    const bonusInput2 = g("#bonus2");

    const year = TotalBonusYearSubmit() 
    let totalBonus = ((tc(bonusInput) + tc(bonusInput2))*tc(incomefactor))/(year*12);
    let variance = (tc(bonusInput) - tc(bonusInput2))/tc(bonusInput);

    if(isNaN(totalBonus)){
        totalBonus = 0.00;
    }
    if(isNaN(variance)){
        variance = 0.00;
    }

    ni(".bonus-analysis-year2-1", totalBonus); //send data to bonus income analysis table
    ni(".bonus-income-variance-result", variance);
    ni(".number-of-year-result", year);

    //==================================================================================================
    //Perform Income Calculation
    const incomeinputs = document.querySelectorAll(".main-app-all-income");

    let totalIncome = 0;
    incomeinputs.forEach(incomeinput => {
        const number = parseFloat(incomeinput.innerText.replace(/,/g, ''));
        if(!isNaN(number)) {
            totalIncome += number
        }
    });
    document.querySelector(".main-applicant-total-amount").innerText =`${totalIncome.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;

}

