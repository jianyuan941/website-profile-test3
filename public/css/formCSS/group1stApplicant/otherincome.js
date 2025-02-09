function newnetotherincome(){
    const array = {
        "#other-income-1":"#other-income-factor-1",
        "#other-income-2":"#other-income-factor-2",
        "#other-income-3":"#other-income-factor-3",
        "#other-income-4":"#other-income-factor-4",
        "#other-income-5":"#other-income-factor-5",
        "#other-income-6":"#other-income-factor-6",
        "#other-income-7":"#other-income-factor-7"
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
    const totalincome = ["#other-income-1","#other-income-2","#other-income-3","#other-income-4","#other-income-5","#other-income-6","#other-income-7"]
    let total = 0
    totalincome.forEach(item=>{
        const amount = tc(document.querySelector(item).value);
        if(!isNaN(amount)){
            total += amount;
        }
    });
    document.querySelector(".net-income-total-income").innerText= total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    document.querySelector(".main-applicant-other-income-amount").innerText = total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
        
    //==================================================================================================
    //Perform DSR Calculation
    performIncomeCalculation()
    DsrCalculation()
}

