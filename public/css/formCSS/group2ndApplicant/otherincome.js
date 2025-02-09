function newnetotherincome2(){
    const array = {
        "#other-income-12":"#other-income-factor-12",
        "#other-income-22":"#other-income-factor-22",
        "#other-income-32":"#other-income-factor-32",
        "#other-income-42":"#other-income-factor-42",
        "#other-income-52":"#other-income-factor-52",
        "#other-income-62":"#other-income-factor-62",
        "#other-income-72":"#other-income-factor-72"
        }
    Object.keys(array).forEach(item =>{
        try {
            const result = array[item];
            const amount = math.evaluate(g(item));
            const amount2 = math.evaluate(document.querySelector(result).innerText);
            // alert(amount)
            // alert(amount2)
            if(amount === amount2){
                //alert("yes")
            }else{
                //alert("no")
                //rule on display 
                if(isNaN(amount)){
                    document.querySelector(result).innerText = ""
                }else if(amount===""){
                    document.querySelector(result).innerText = ""
                }else{
                    document.querySelector(result).innerText = document.querySelector(item).value
                };
            document.querySelector(item).value = amount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
            };
        }catch(e){

        };
    });
    const totalincome = ["#other-income-12","#other-income-22","#other-income-32","#other-income-42","#other-income-52","#other-income-62","#other-income-72"]
    let total = 0
    totalincome.forEach(item=>{
        const amount = tc(document.querySelector(item).value);
        if(!isNaN(amount)){
            total += amount;
        }
    });
    document.querySelector(".net-income-total-income2").innerText= total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.querySelector(".Sec-applicant-other-income-amount").innerText = total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
        
    //==================================================================================================
    //Perform DSR Calculation
    performIncomeCalculation2()
    DsrCalculation()
}

