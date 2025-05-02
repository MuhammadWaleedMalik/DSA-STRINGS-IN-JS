let MyName="MALAM"
let revName="";

for(let i=MyName.length-1;i>=0;i--){
    revName+=MyName[i]
}


MyName==revName?console.log("The string is pallindrome"):console.log("The string is not pallindrome")