//function for calculation
const f = (value) => parseFloat(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const tc = (input) => parseFloat(input.replace(/,/g, '')) || 0;

const g = (id) => {
    const inputElement = document.querySelector(id);
    return inputElement ? inputElement.value : '';
};
function performIncomeCalculation(){
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


    const arrayForNetIncomeCalculation ={
        "#basic1":["#epf1","#variable1",".epf-analysis",".g-net-income1"],
        "#basic2":["#epf2","#variable2",".epf-analysis2",".g-net-income2"],
        "#basic3":["#epf3","#variable3",".epf-analysis3",".g-net-income3"],
        "#basic4":["#epf4","#variable4",".epf-analysis4",".g-net-income4"],
        "#basic5":["#epf5","#variable5",".epf-analysis5",".g-net-income5"],
        "#basic6":["#epf6","#variable6",".epf-analysis6",".g-net-income6"],
    };

    Object.keys(arrayForNetIncomeCalculation).forEach(item =>{
        try{
            const [epf,variable,result,netincomeresult] = arrayForNetIncomeCalculation[item];
            const netIncome = (tc(document.querySelector(item).value) + (tc(document.querySelector(variable).value) * tc(document.querySelector("#variable-income-factor").value)) ) * tc(document.querySelector("#net-income-factor").value);
            document.querySelector(netincomeresult).innerText = `${netIncome.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }catch(e){

        }
    });
}
function performIncomeCalculation2(){
    //Perform Income Calculation
    const incomeinputs = document.querySelectorAll(".Sec-app-all-income");

    let totalIncome = 0;
    incomeinputs.forEach(incomeinput => {
        const number = parseFloat(incomeinput.innerText.replace(/,/g, ''));
        if(!isNaN(number)) {
            totalIncome += number
        }
    });
    document.querySelector(".Sec-applicant-total-amount").innerText =`${totalIncome.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;


    const arrayForNetIncomeCalculation ={
        "#basic12":["#epf12","#variable12",".epf-analysis12",".g-net-income12"],
        "#basic22":["#epf22","#variable22",".epf-analysis22",".g-net-income22"],
        "#basic32":["#epf32","#variable32",".epf-analysis32",".g-net-income32"],
        "#basic42":["#epf42","#variable42",".epf-analysis42",".g-net-income42"],
        "#basic52":["#epf52","#variable52",".epf-analysis52",".g-net-income52"],
        "#basic62":["#epf62","#variable62",".epf-analysis62",".g-net-income62"],
    };

    Object.keys(arrayForNetIncomeCalculation).forEach(item =>{
        try{
            const [epf,variable,result,netincomeresult] = arrayForNetIncomeCalculation[item];
            const netIncome = (tc(document.querySelector(item).value) + (tc(document.querySelector(variable).value) * tc(document.querySelector("#variable-income-factor").value)) ) * tc(document.querySelector("#net-income-factor").value);
            document.querySelector(netincomeresult).innerText = `${netIncome.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }catch(e){

        }
    });
}