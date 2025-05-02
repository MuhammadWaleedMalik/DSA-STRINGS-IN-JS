let myName="MALAM"
let i=0;
let j=myName.length-1

while(i<j){
    if(myName[i]!=myName[j]){
        console.log("The string is not pallindrome")
        break
    }
    i++
    j--
}
console.log("The string is pallindrome")