let chabelo=[1,5,2,0,7,10,-3,6,1,-1];
let min=0;
let i=0;
for(let x of chabelo){
if(x<=min){
min=chabelo[i];
}
i++;
}
print(min);
