const args = process.argv; //will be using for input from STDIN

if(args.length > 2){ //for testing purpose -- so testing can avoid this block
    let jsonFile = (require("./"+args[2])); 
    runInstruction(args[3], args[4], jsonFile); //will run from the inputs from STDIN
}

function runInstruction(instruction, getValue, jsonObj){
    let instructions_hash = { //instructions with its json attribute and comparison
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
    
    console.log("Company Names:");
    let numOfCompanies = 0;
    let CompaniesList = "";
    let getSign = instructions_hash[instruction][1]; //will grab comparison sign
    let getInstruction = instructions_hash[instruction][0]; //will grab instruction string

    for(let i = 0; i < jsonObj.length; i++){  //looping over JSON data using O(n) search
        if((compareSigns[getSign](obj[i][getInstruction], getValue))){ //evaluating compareSigns to return true or false
            CompaniesList += obj[i]["company_name"]+", ";
            numOfCompanies++;
        }
    }
    console.log(CompaniesList);
    console.log("Number of Companies: "+numOfCompanies);
    return numOfCompanies;
};

module.exports = {
    runInstruction
};

