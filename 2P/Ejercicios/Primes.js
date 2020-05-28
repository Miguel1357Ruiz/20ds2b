function primes(Z){
if(Z==1)
return 0
else
if(Z==2)
return 1
else
if(Z%2===0)
return 0
else
if(Z==3)
return 1
else
if(Z%3===0)
return 0
else
if(Z==5)
return 1
else
if(Z%5===0)
return 0
else
if(Z==7)
return 1
else
if(Z%7===0)
return 0
else
return 1


}

var y=20
var Anarray=[]
for(let i=0; i<y; i++){

Anarray[i]=Math.floor(Math.random()*(y+1))
console.log("los valores aleatorios son " + Anarray[i])
}

for(let i=0; i<y; i++){
    
    if(primes(Anarray[i])==1)
    console.log("los numeros primos del array son " + Anarray[i])
}