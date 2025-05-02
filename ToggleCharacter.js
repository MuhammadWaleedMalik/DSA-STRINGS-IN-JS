let MyName = "Waleed Akhtar"
let tog=''
for(let i=0;i<MyName.length;i++){
   if(MyName.charCodeAt(i)>=65 && MyName.charCodeAt(i)<=90){
     tog=tog+String.fromCharCode((MyName.charCodeAt(i)+32))       
    }
    else if(MyName.charCodeAt(i)>=97 && MyName.charCodeAt(i)<=122){
        tog=tog+String.fromCharCode((MyName.charCodeAt(i)-32))
     }
}

console.log("The toggle case name is ",tog)