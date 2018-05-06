const args = process.argv; //will be using for input from STDIN

if(args.length > 2){ //for testing purpose -- so testing can avoid this block
    const jsonFile = (require("./"+args[2])); 
    runInstruction(args[3], args[4], jsonFile); //will run from the inputs from STDIN
}

function runInstruction(instruction, getValue, jsonObj){
    const instructions_hash = { //instructions with its json attribute and comparison
        "locate": ["state", "=="],
        "find_before": ["year_founded", "<"],
        "find_after": ["year_founded", ">="],
        "find_companies_between_size": ["full_time_employees", "=="],
        "find_type": ["company_category", "=="]
    };
    
    const compareSigns = { //evaluating from string comparison to mathematically comparison
        "<": function (x, y) { return x < y },
        ">=": function (x, y) { return x >= y },
        '==': function (x, y) { return x == y }
    };
    
    
    let numOfCompanies = 0;
    let CompaniesList = "";
    const getSign = instructions_hash[instruction][1]; //will grab comparison sign
    const getInstruction = instructions_hash[instruction][0]; //will grab instruction string

    for(let i = 0; i < jsonObj.length; i++){  //looping over JSON data using O(n) search
        if((compareSigns[getSign](jsonObj[i][getInstruction], getValue))){ //evaluating compareSigns to return true or false
            CompaniesList += jsonObj[i]["company_name"]+", ";
            numOfCompanies++;
        }
    }
    
    if(numOfCompanies == 0){
        console.log("I'm sorry! The list is empty. Please double check for mis-spelled instructions or values. ");
        return;
    }
    console.log("Company Names:");
    console.log(CompaniesList);
    console.log("Number of Companies: "+numOfCompanies);
    return numOfCompanies;
};

module.exports = {
    runInstruction
};

