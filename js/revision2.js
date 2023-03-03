var uniName="AMDT";
console.log(uniName);

//creating an Array
var friendName=["Kaja","AR","Vindu"];
console.log(friendName[2]);

//check the condition using a function
function myLoop(){
    for(var x=0; x < friendName.length; x++){
        if(friendName[x][0]== "C"){
            console.log("Yes");
        }
        else{
            console.log("Nope");
        }
    }
}

//invoking the function
myLoop();

//deleting all the values from the array
while(friendName.length > 0){
    friendName.pop();
}

//Add a value to the 3rd slot of the array
friendName.push("","","Cyril");

//invoking the function
myLoop();

