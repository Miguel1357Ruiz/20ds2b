
let anArray = [1,2,3,4,5,0,9,8,7,6,]
let binario = false;
for (let x of anArray){
if( x===4){
binario = true
break;
}
}
if(binario==true){
console.log("encontrado")
}else {
console.log("no encontrado")
}

