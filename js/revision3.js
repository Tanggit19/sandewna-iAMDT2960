var readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
});

readline.question("Enter your city?", function(city){
    covidCheck(city)
    console.log("Stay Safe")
    
});

function covidCheck(city){
    if(city=="colombo"){
       
    }
    else if(city=="galle"){
       
    }
    else if(city=="gampaha"){
        console.log("High Risk Area");
        return;
    }
    else{
        console.log("City is incorrect!");
        return;
    }
    console.log("Low Risk Area");
}
