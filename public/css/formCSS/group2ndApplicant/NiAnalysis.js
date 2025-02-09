//function for calculation

//===============================================================================================================================

function averageVariableIncome2() {  
    //readjustincomecalculation
    const itemToAdjust = ["#variable12","#variable22","#variable32","#variable42","#variable52","#variable62"];
    
    itemToAdjust.forEach(item =>{
        try {
            const amount = math.evaluate(g(item));
            document.querySelector(item).value = amount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }catch(e){
            //alert(e);
        }
    });
    //--------------------------------------------------------------------------------------------------------------------------------
    //defined income factor
    const incomefactor = g("#variable-income-factor");
    //defined input
    const variable1 = g("#variable12");
    const variable2 = g("#variable22");
    const variable3 = g("#variable32");
    const variable4 = g("#variable42");
    const variable5 = g("#variable52");
    const variable6 = g("#variable62");
    //--------------------------------------------------------------------------------------------------------------------------------
    const nonEmptyCount = [variable1, variable2, variable3, variable4, variable5, variable6].filter(variable => variable !== "").length;
    //--------------------------------------------------------------------------------------------------------------------------------

    const sum = tc(variable1) + tc(variable2) + tc(variable3) + tc(variable4) + tc(variable5) + tc(variable6);
    const average = sum / nonEmptyCount;
    const averageAfterIncomeFactor = average * tc(incomefactor);


    //===============================================================================================================================
    //variance calculation
    const variables = [variable1, variable2, variable3, variable4, variable5, variable6];
    const numericVariables = variables
        .filter(variable => variable !== "") // Exclude empty variables
        .map(tc); // Convert to numbers

    // Find the maximum value
    const maxValue = Math.max(...numericVariables);
    const variance= (maxValue - average) / average;

    return {averageAfterIncomeFactor ,variance, nonEmptyCount};
}

