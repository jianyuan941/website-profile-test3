

//====================================================================================================
function newtotalothercommitment(){
    const array = {
        "#other-commitment-1":["#other-commitment-decimal-1","#net-other-commitment-p1"],
        "#other-commitment-2":["#other-commitment-decimal-2","#net-other-commitment-p2"],
        "#other-commitment-3":["#other-commitment-decimal-3","#net-other-commitment-p3"],
        "#other-commitment-4":["#other-commitment-decimal-4","#net-other-commitment-p4"],
        "#other-commitment-5":["#other-commitment-decimal-5","#net-other-commitment-p5"],
        "#other-commitment-6":["#other-commitment-decimal-6","#net-other-commitment-p6"],
        "#other-commitment-7":["#other-commitment-decimal-7","#net-other-commitment-p7"],
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
    const totalcommitment = ["#other-commitment-1","#other-commitment-2","#other-commitment-3","#other-commitment-4","#other-commitment-5","#other-commitment-6","#other-commitment-7"]
    let total = 0
    totalcommitment.forEach(item =>{
        const amount = tc(document.querySelector(item).value);
        if(!isNaN(amount)){
            total += amount;
        }
    });
    document.querySelector(".net-other-commitment-total-amount").innerText= total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.querySelector(".main-applicant-total-commitment-amount").innerText = total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    //Perform DSR Calculation
    DsrCalculation();
}
function totalnetothercommitment (){
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

