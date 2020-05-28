let chabelo=[1,5,2,0,7,10,12,6,5,7];
let max=0;
let i=0;
for(let x of chabelo){
if(x>=max){
max=chabelo[i];
}
i++;
}
print(max);
