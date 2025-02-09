// shortcut key for F1
document.addEventListener("keydown", function(event){
    if(event.key ==="F1"){
        event.preventDefault();
        // document.getElementById("basicContainer").style.display ="none"
        
        //to hide other container except main container
        const array = ["#basicContainer2"]

        array.forEach(item =>{
            if (document.querySelector(item).style.display !== "none") {
                document.querySelector(item).style.display = "none"; 
            }
        })
            document.querySelector("#basicContainer").style.display = "flex"; 

    }else if(event.key ==="F2"){
        event.preventDefault();

        //to hide other container except main container
        const array = ["#basicContainer"]

        array.forEach(item =>{
            if (document.querySelector(item).style.display !== "none") {
                document.querySelector(item).style.display = "none"; 
            }
        })
        document.querySelector("#basicContainer2").style.display = "flex";

    }else if(event.key ==="F3"){
        event.preventDefault();

        //to hide other container except main container
        const array = ["#basicContainer","#basicContainer2","#basicContainer4"]

        array.forEach(item =>{
            if (document.querySelector(item).style.display !== "none") {
                document.querySelector(item).style.display = "none"; 
            }
        })
        document.getElementById("basicContainer3").style.display = "flex";   

    }else if(event.key ==="F4"){
        event.preventDefault();

        //to hide other container except main container
        const array = ["#basicContainer","#basicContainer2","#basicContainer3"]

        array.forEach(item =>{
            if (document.querySelector(item).style.display !== "none") {
                document.querySelector(item).style.display = "none"; 
            }
        })
        document.getElementById("basicContainer4").style.display = "flex";     
    }
});

function triggerMainApplicantSummary(){
    const typeofIncome = document.querySelector("#type-of-income-1").value;
    // alert(typeofIncome)
    if(typeofIncome === "") {
        document.querySelector(".main-applicant-summary-container").style.display = "none";
    }else {
        document.querySelector(".main-applicant-summary-container").style.display = "block";
    }
}
function trigger2ndApplicantSummary(){
    const typeofIncome = document.querySelector("#type-of-income-2").value;
    // alert(typeofIncome)
    if(typeofIncome === "") {
        document.querySelector(".Sec-applicant-summary-container").style.display = "none";
    }else{
        document.querySelector(".Sec-applicant-summary-container").style.display = "block";
    }
}

function alertName() {
    let name = document.querySelector("#Applicant-name-1").value;
    if(name === "") {
        name = "Applicants Name";
    }
    document.getElementById("applicants-nav-name-1").textContent = name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    document.querySelector(".main-applicant-summary-container-name").textContent = name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) +"'s Summary";
    
}
function alertName2() {
    let name = document.querySelector("#Applicant-name-2").value;
    if(name === "") {
        name = "Applicants Name";
    }
    document.getElementById("applicants-nav-name-2").textContent = name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    document.querySelector(".Sec-applicant-summary-container-name").textContent = name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) +"'s Summary";
      
}
//================================================================================================================================

function filterIncome(){
    const typeOfIncome = document.querySelector("#type-of-income-1").value;
    // alert(typeOfIncome)
    if(typeOfIncome === "Basic/Variable") {
                    //container to deactive
                    const SelfEmployment = [
                        "#income-tax-p", 
                        ".incometax-container", 
                        "#Share-ownership-p", 
                        ".bank-statements-container", 
                        "#bank-statement-p", 
                        ".bank-statement-1", 
                        ".bank-statement-2", 
                        ".bank-statement-3", 
                        "#self-employment-line",    
                    ]

                        SelfEmployment.forEach(item=>{
                            try{
                                if(window.getComputedStyle(document.querySelector(item)).display !== "none"){
                                    document.querySelector(item).style.display = "none";
                                }
                            }catch(er){
                                // alert(er)
                            }
                        });     
                //container to active
                    const basicIncome = [
                        //item to display flex
                        ".other-income",
                        ".calculator-line", 
                        ".calculator-line1", 
                        ".calculator-container", 
                        ".bonus-income", 
                        "#bonus-p1", 
                        "#bonus-line",
                        ".other-commitment-container",//active commitment container
                        //item to display block
                        "#other-income-line", 
                        "#other-income-p",
                        "#other-commitment-line", 
                        "#other-commitment-p", 
                        ".othercommitment",
                    ]

                        basicIncome.forEach(item=>{
                            try{
                                if(item ==="#other-income-line"||item ==="#other-income-p"||item ==="#other-commitment-line"||item ==="#other-commitment-p"||item ===".othercommitment"){
                                    if(window.getComputedStyle(document.querySelector(item)).display !== "block"){
                                        document.querySelector(item).style.display = "block";
                                    }
                                }else{
                                    if(window.getComputedStyle(document.querySelector(item)).display !== "flex"){
                                        document.querySelector(item).style.display = "flex";
                                    }
                                }
                            }catch(er){
                                // alert(er)
                            }
                        });               
                
    }else if(typeOfIncome === "Self Employment-BS"||typeOfIncome === "Self Employment-IncomeTax") {
                    //container to deactive
                    const basicContainer = [
                        ".calculator-container",//basic/variable
                        "#bonus-p1",//bonus name
                        ".bonus-income",//bonus income
                        ".calculator-line1",  
                        ];
                        basicContainer.forEach(item =>{
                            if (window.getComputedStyle(document.querySelector(item)).display !== "none") {
                                document.querySelector(item).style.display = "none";
                            }
                        })
                //container to active
                    //if self-employment container's display is none then
                        if(window.getComputedStyle(document.querySelector(".self-employment")).display ==="none"){
                        document.querySelector(".self-employment").style.display="block"
                        }    
                        //to active sub container/line
                            const subContainer = [
                                //item to display flex
                                ".other-income",
                                ".incometax-container",
                                "#income-tax-p", 
                                "#Share-ownership-p", 
                                ".bank-statements-container", 
                                "#bank-statement-p", 
                                ".bank-statement-1", 
                                ".bank-statement-2", 
                                ".bank-statement-3", 
                                "#self-employment-line",
                                ".other-commitment-container",//active commitment container
                            ];   

                                subContainer.forEach(item =>{
                                    if(item ==="#self-employment-line"){
                                            document.querySelector(item).style.display = "block";
                                    }else{
                                            document.querySelector(item).style.display = "flex";
                                    }
                                })
                //activate other container
                    const otherIncomeAndCommitment = {
                        ".other-income":["#other-income-line","#other-income-p"],
                        ".othercommitment":["#other-commitment-line","#other-commitment-p"],
                    };
                        Object.keys(otherIncomeAndCommitment).forEach(item =>{
                            try{       
                                const [line, p] = otherIncomeAndCommitment[item];
                                if (window.getComputedStyle(document.querySelector(item)).display === "none") {      
                                    document.querySelector(item).style.display = "flex";
                                }
                                if (window.getComputedStyle(document.querySelector(line)).display === "none") {   
                                    document.querySelector(line).style.display = "block";
                                }
                                if (window.getComputedStyle(document.querySelector(p)).display === "none") {   
                                    document.querySelector(p).style.display = "block";
                                }
                            }catch(er){
                                alert("error - "+ er)
                            }
    
    
                        })
   
    }else if(typeOfIncome === "") {
                    //container to deactive
                    const basicContainer = [
                        ".calculator-container",//basic/variable
                        "#bonus-p1",//bonus name
                        ".bonus-income",//bonus income
                        ".calculator-line1",   
                        ];
                        basicContainer.forEach(item =>{
                            if (document.querySelector(item).style.display !== "none") {
                                document.querySelector(item).style.display = "none";
                            }
                        })
                
                //this is for self-employment
                    //clear self employment container and subcontainer/line
                        const subContainer = [
                            //self-employment container
                            ".self-employment", 
                            //clear sub container/line
                            "#self-employment-line",
                            "#income-tax-p",
                            ".incometax-container",
                            "#Share-ownership-p", 
                            ".bank-statements-container", 
                            "#bank-statement-p", 
                            ".bank-statement-1", 
                            ".bank-statement-2", 
                            ".bank-statement-3", 
                            ".other-commitment-container",//clear commitment container
                        ];   
                            subContainer.forEach(item =>{
                                if(item ==="#self-employment-line"||item ===".self-employment"){
                                    if (window.getComputedStyle(document.querySelector(item)).display === "block") {
                                        document.querySelector(item).style.display = "none";
                                    }
                                }else{
                                    if (window.getComputedStyle(document.querySelector(item)).display === "flex") {
                                        document.querySelector(item).style.display = "none";
                                    }
                                }
                            })
    
                    //clear other container
                        const otherIncomeAndCommitment = {
                            ".other-income":["#other-income-line","#other-income-p"],
                            ".other-commitment-container":["#other-commitment-line","#other-commitment-p"],
                        };
                            Object.keys(otherIncomeAndCommitment).forEach(item =>{
                                try{       
                                    const [line, p] = otherIncomeAndCommitment[item];
                                    if (window.getComputedStyle(document.querySelector(item)).display === "flex") {      
                                        document.querySelector(item).style.display = "none";
                                    }
                                    if (window.getComputedStyle(document.querySelector(line)).display === "block") {   
                                        document.querySelector(line).style.display = "none";
                                    }
                                    if (window.getComputedStyle(document.querySelector(p)).display === "block") {   
                                        document.querySelector(p).style.display = "none";
                                    }
                                }catch(er){
                                    alert("error - "+ er)
                                }
    
    
                            })

    }else{
    }
}
function filterIncome2(){
    const typeOfIncome = document.querySelector("#type-of-income-2").value;
    // alert(typeOfIncome)
        if(typeOfIncome === "Basic/Variable") {
            //container to deactive
                const SelfEmployment = [
                    "#income-tax-p2", 
                    ".incometax-container2", 
                    "#Share-ownership-p2", 
                    ".bank-statements-container2",
                    "#bank-statement-p2", 
                    ".bank-statement-12", 
                    ".bank-statement-22", 
                    ".bank-statement-32", 
                    "#self-employment-line2",       
                ]
                    SelfEmployment.forEach(item=>{
                        try{
                            if(window.getComputedStyle(document.querySelector(item)).display !== "none"){
                                document.querySelector(item).style.display = "none";
                            }
                        }catch(er){
                            // alert(er)
                        }
                    });     
            //container to active
                const basicIncome = [
                    //item to display flex
                    ".other-income2",
                    ".calculator-line2", 
                    ".calculator-container2", 
                    ".bonus-income2", 
                    "#bonus-p2", 
                    "#bonus-line2",
                    ".other-commitment-container2",//active commitment container
                    //item to display block
                    "#other-income-line2", 
                    "#other-income-p2", 
                    "#other-commitment-line2", 
                    "#other-commitment-p2", 
                    ".othercommitment2",
                ]
                    basicIncome.forEach(item=>{
                        try{
                            if(item ==="#other-income-line2"||item ==="#other-income-p2"||item ==="#other-commitment-line2"||item ==="#other-commitment-p2"||item ===".othercommitment2"){
                                if(window.getComputedStyle(document.querySelector(item)).display !== "block"){
                                    document.querySelector(item).style.display = "block";
                                }
                            }else{
                                if(window.getComputedStyle(document.querySelector(item)).display !== "flex"){
                                    document.querySelector(item).style.display = "flex";
                                }
                            }
                        }catch(er){
                            // alert(er)
                        }
                    });          
    //self employment            
        }else if(typeOfIncome === "Self Employment-BS"||typeOfIncome === "Self Employment-IncomeTax") {
            //container to deactive
                const basicContainer = [
                    ".calculator-container2",//basic/variable
                    "#bonus-p2",//bonus name
                    ".bonus-income2",//bonus income 
                    ".calculator-line2",  
                    ];
                    basicContainer.forEach(item =>{
                        if (window.getComputedStyle(document.querySelector(item)).display !== "none") {
                            document.querySelector(item).style.display = "none";
                        }
                    })
            //container to active
                //if self-employment container's display is none then
                    if(window.getComputedStyle(document.querySelector(".self-employment2")).display ==="none"){
                    document.querySelector(".self-employment2").style.display="block";
                    }    
                    //to active sub container/line
                        const subContainer = [
                            "#self-employment-line2",
                            "#income-tax-p2",
                            ".incometax-container2",
                            "#Share-ownership-p2", 
                            ".bank-statements-container2", 
                            "#bank-statement-p2", 
                            ".bank-statement-12", 
                            ".bank-statement-22", 
                            ".bank-statement-32", 
                            ".other-commitment-container2",
                        ];   
                            subContainer.forEach(item =>{
                                if(item ==="#self-employment-line2"){
                                    if (window.getComputedStyle(document.querySelector(item)).display === "none") {
                                        document.querySelector(item).style.display = "block";
                                    }
                                }else{
                                    if (window.getComputedStyle(document.querySelector(item)).display === "none") {
                                        document.querySelector(item).style.display = "flex";
                                    }
                                }
                            })
            //activate other container
                const otherIncomeAndCommitment = {
                    ".other-income2":["#other-income-line2","#other-income-p2"],
                    ".othercommitment2":["#other-commitment-line2","#other-commitment-p2"],
                };
                    Object.keys(otherIncomeAndCommitment).forEach(item =>{
                        try{       
                            const [line, p] = otherIncomeAndCommitment[item];
                            if (window.getComputedStyle(document.querySelector(item)).display === "none") {      
                                document.querySelector(item).style.display = "flex";
                            }
                            if (window.getComputedStyle(document.querySelector(line)).display === "none") {   
                                document.querySelector(line).style.display = "block";
                            }
                            if (window.getComputedStyle(document.querySelector(p)).display === "none") {   
                                document.querySelector(p).style.display = "block";
                            }
                        }catch(er){
                            alert("error - "+ er)
                        }


                    })
    //reset
        }else if(typeOfIncome === "") {
            //container to deactive
                const basicContainer = [
                    ".calculator-container2",//basic/variable
                    "#bonus-p2",//bonus name
                    ".bonus-income2",//bonus income
                    ".calculator-line2",   
                    ];
                    basicContainer.forEach(item =>{
                        if (document.querySelector(item).style.display !== "none") {
                            document.querySelector(item).style.display = "none";
                        }
                    })
            
            //this is for self-employment
                //clear self employment container and subcontainer/line
                    const subContainer = [
                        //self-employment container
                        ".self-employment2", 
                        //clear sub container/line
                        "#self-employment-line2",
                        "#income-tax-p2",
                        ".incometax-container2",
                        "#Share-ownership-p2", 
                        ".bank-statements-container2", 
                        "#bank-statement-p2", 
                        ".bank-statement-12", 
                        ".bank-statement-22", 
                        ".bank-statement-32", 
                        ".other-commitment-container2",//clear commitment container
                    ];   
                        subContainer.forEach(item =>{
                            if(item ==="#self-employment-line2"||item ===".self-employment2"){
                                if (window.getComputedStyle(document.querySelector(item)).display === "block") {
                                    document.querySelector(item).style.display = "none";
                                }
                            }else{
                                if (window.getComputedStyle(document.querySelector(item)).display === "flex") {
                                    document.querySelector(item).style.display = "none";
                                }
                            }
                        })

                //clear other container
                    const otherIncomeAndCommitment = {
                        ".other-income2":["#other-income-line2","#other-income-p2"],
                        ".other-commitment-container2":["#other-commitment-line2","#other-commitment-p2"],
                    };
                        Object.keys(otherIncomeAndCommitment).forEach(item =>{
                            try{       
                                const [line, p] = otherIncomeAndCommitment[item];
                                if (window.getComputedStyle(document.querySelector(item)).display === "flex") {      
                                    document.querySelector(item).style.display = "none";
                                }
                                if (window.getComputedStyle(document.querySelector(line)).display === "block") {   
                                    document.querySelector(line).style.display = "none";
                                }
                                if (window.getComputedStyle(document.querySelector(p)).display === "block") {   
                                    document.querySelector(p).style.display = "none";
                                }
                            }catch(er){
                                alert("error - "+ er)
                            }


                        })
        }else{
        }
}