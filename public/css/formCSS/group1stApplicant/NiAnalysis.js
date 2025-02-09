//function for calculation

const ni = (selector, netIncome) => {
    document.querySelector(selector).innerText = `${f(netIncome)}`;
};

//===============================================================================================================================

function averageVariableIncome() {  
    //readjustincomecalculation
    const itemToAdjust = ["#variable1","#variable2","#variable3","#variable4","#variable5","#variable6"];
    
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
    const variable1 = g("#variable1");
    const variable2 = g("#variable2");
    const variable3 = g("#variable3");
    const variable4 = g("#variable4");
    const variable5 = g("#variable5");
    const variable6 = g("#variable6");
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


function netIncome() {
    //input data
    const basicInput = g("#basic1");
    const epfInput = g("#epf1");
    const {averageAfterIncomeFactor,variance, nonEmptyCount}= averageVariableIncome();

    //calculations
    const netIncome = tc(basicInput) + averageAfterIncomeFactor - tc(epfInput);

    // Display the result
    if([basicInput, epfInput].filter(variable => variable !== "").length === 0) {
        ni(".g-net-income1", 0);
    } else {
        ni(".g-net-income1", netIncome);
    }
    document.querySelector(".variable-income-variance-result").innerText = `${f(variance)}`;
    document.querySelector(".total-month-submit-for-variable-income-result").innerText = `${f(nonEmptyCount)}`;
}

function netIncome2() {
    //input data
    const basicInput = g("#basic2");
    const epfInput = g("#epf2");
    const {averageAfterIncomeFactor,variance, nonEmptyCount}= averageVariableIncome();

    //calculations
    const netIncome = tc(basicInput) + averageAfterIncomeFactor - tc(epfInput);

    // Display the result
    if([basicInput, epfInput].filter(variable => variable !== "").length === 0) {
        ni(".g-net-income2", 0);
    } else {
        ni(".g-net-income2", netIncome);
    }
}

function netIncome3() {
    //input data
    const basicInput = g("#basic3");
    const epfInput = g("#epf3");
    const {averageAfterIncomeFactor,variance, nonEmptyCount}= averageVariableIncome();

    //calculations
    const netIncome = tc(basicInput) + averageAfterIncomeFactor - tc(epfInput);

    // Display the result
    if([basicInput, epfInput].filter(variable => variable !== "").length === 0) {
        ni(".g-net-income3", 0);
    } else {
        ni(".g-net-income3", netIncome);
    }
}

function netIncome4() {
    //input data
    const basicInput = g("#basic4");
    const epfInput = g("#epf4");
    const {averageAfterIncomeFactor,variance, nonEmptyCount}= averageVariableIncome();

    //calculations
    const netIncome = tc(basicInput) + averageAfterIncomeFactor - tc(epfInput);

    // Display the result
    if([basicInput, epfInput].filter(variable => variable !== "").length === 0) {
        ni(".g-net-income4", 0);
    } else {
        ni(".g-net-income4", netIncome);
    }
}

function netIncome5() {
    //input data
    const basicInput = g("#basic5");
    const epfInput = g("#epf5");
    const {averageAfterIncomeFactor,variance, nonEmptyCount}= averageVariableIncome();

    //calculations
    const netIncome = tc(basicInput) + averageAfterIncomeFactor - tc(epfInput);

    // Display the result
    if([basicInput, epfInput].filter(variable => variable !== "").length === 0) {
        ni(".g-net-income5", 0);
    } else {
        ni(".g-net-income5", netIncome);
    }
}


function netIncome6() {
    //input data
    const basicInput = g("#basic6");
    const epfInput = g("#epf6");
    const {averageAfterIncomeFactor,variance, nonEmptyCount}= averageVariableIncome();

    //calculations
    const netIncome = tc(basicInput) + averageAfterIncomeFactor - tc(epfInput);

    // Display the result
    if([basicInput, epfInput].filter(variable => variable !== "").length === 0) {
        ni(".g-net-income6", 0);
    } else {
        ni(".g-net-income6", netIncome);
    }
}