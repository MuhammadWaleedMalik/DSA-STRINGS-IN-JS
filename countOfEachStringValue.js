let MyName="Waleed Akhtar"
let countArray=new Array(128).fill(0)

for(let i=0;i<MyName.length;i++){
countArray[MyName.charCodeAt(i)]++

}

for(let i=0;i<countArray.length;i++){
    if(countArray[i]>0){
        console.log("The character ",String.fromCharCode(i)," is present ",countArray[i]," times")
    }
}