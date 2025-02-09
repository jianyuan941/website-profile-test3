
// Global function to update the result in the target element
const ud = (selector, forcast, different) => {
    document.querySelector(selector).innerText = `${f(forcast)}/${f(different)}`;
};

//===============================================================================================================================
function newalertValues(){
    const array ={
        "#basic1":["#epf1","#variable1",".epf-analysis",".g-net-income1"],
        "#basic2":["#epf2","#variable2",".epf-analysis2",".g-net-income2"],
        "#basic3":["#epf3","#variable3",".epf-analysis3",".g-net-income3"],
        "#basic4":["#epf4","#variable4",".epf-analysis4",".g-net-income4"],
        "#basic5":["#epf5","#variable5",".epf-analysis5",".g-net-income5"],
        "#basic6":["#epf6","#variable6",".epf-analysis6",".g-net-income6"],
    };
    Object.keys(array).forEach(item =>{
        try{
            const [epf,variable,result,netincomeresult] = array[item];
            const amount = (math.evaluate(document.querySelector(epf).value));

                if(document.querySelector(epf).value === ""){
                    document.querySelector(result).innerText ="0.00 (%)";
                    document.querySelector(netincomeresult).innerText = "0.00";
                    return;
                }
                if(isNaN(amount)){
                    amount = 0.00;
                }
            const amount2 = tc(document.querySelector(result).innerText.split("+")[0].trim());
            if(amount === amount2){
            }else{
                //calculate epf constribution percentage
                const totalbasic = tc(document.querySelector(item).value);
                    if(isNaN(totalbasic)){
                        totalbasic = 0.00;
                    }

                const variableIncome = tc(document.querySelector(variable).value);
                    if(isNaN(variableIncome)){
                        variableIncome = 0.00;
                    }
                
                const Bepfpercentage = (amount/totalbasic).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
                const totalepfpercentage = (amount/(totalbasic+variableIncome)).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

                let epfpercentage = 0;
                    if(Bepfpercentage >= 0.11 && Bepfpercentage <= 0.12){
                        epfpercentage = "B("+Bepfpercentage+")";
                    }else if(totalepfpercentage < 0.11){
                        epfpercentage = "UN("+Bepfpercentage+")";
                    }else if(totalepfpercentage >= 0.11 && totalepfpercentage <= 0.12){
                        epfpercentage = "T("+totalepfpercentage+")";
                    } else {
                        epfpercentage = "EX("+totalepfpercentage+")";
                    };
                document.querySelector(result).innerText = `${document.querySelector(epf).value} + ${epfpercentage}`;
                document.querySelector(epf).value = amount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
                //calculate net income
                const basic = tc(document.querySelector(item).value);
                const variableAfterHaircut = tc(document.querySelector(variable).value) * tc(document.querySelector("#variable-income-factor").value);
                const statutoryhaircut = tc(document.querySelector("#net-income-factor").value);
                const netIncome = ((basic + variableAfterHaircut)*statutoryhaircut).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
                
                document.querySelector(netincomeresult).innerText = netIncome;
            }
        }catch (e) {
            // alert(e);
        };

    });
    //perform inform calculation
    performIncomeCalculation()
    DsrCalculation()


}
