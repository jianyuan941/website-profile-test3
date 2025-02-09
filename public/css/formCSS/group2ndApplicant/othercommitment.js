
//====================================================================================================
function newtotalothercommitment2(){
    const array = {
        "#other-commitment-12":["#other-commitment-decimal-12","#net-other-commitment-p12"],
        "#other-commitment-22":["#other-commitment-decimal-22","#net-other-commitment-p22"],
        "#other-commitment-32":["#other-commitment-decimal-32","#net-other-commitment-p32"],
        "#other-commitment-42":["#other-commitment-decimal-42","#net-other-commitment-p42"],
        "#other-commitment-52":["#other-commitment-decimal-52","#net-other-commitment-p52"],
        "#other-commitment-62":["#other-commitment-decimal-62","#net-other-commitment-p62"],
        "#other-commitment-72":["#other-commitment-decimal-72","#net-other-commitment-p72"],
    }
    Object.keys(array).forEach(item =>{
        try{
            const [result,result2] =array[item];
            const amount = math.evaluate(g(item));
            const amount2 = math.evaluate(document.querySelector(result).innerText);
            if(amount === amount2){
                //alert("yes")
            }else{
                if(isNaN(amount)){
                    document.querySelector(result).innerText = ""
                }else if(amount===""){
                    document.querySelector(result).innerText = ""
                }else{
                    document.querySelector(result).innerText = document.querySelector(item).value
                }
            document.querySelector(item).value = amount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
            };
        }catch(e){

        };
    });
    const totalcommitment = ["#other-commitment-12","#other-commitment-22","#other-commitment-32","#other-commitment-42","#other-commitment-52","#other-commitment-62","#other-commitment-72"]
    let total = 0
    totalcommitment.forEach(item =>{
        const amount = tc(document.querySelector(item).value);
        if(!isNaN(amount)){
            total += amount;
        }
    });
    document.querySelector(".net-other-commitment-total-amount2").innerText= total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.querySelector(".Sec-applicant-total-commitment-amount").innerText = total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    //Perform DSR Calculation
    DsrCalculation();
}
function totalnetothercommitment2 (){
    let sum = 0
    const totalcommitments = document.querySelectorAll(".net-other-commitment-d")
    totalcommitments.forEach(totalcommitment =>{
        const commitemnt = parseFloat(totalcommitment.innerText.replace(/,/g,''));
        if(!isNaN(commitemnt)){
            sum += commitemnt
        }
    })
    return sum.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})
}

