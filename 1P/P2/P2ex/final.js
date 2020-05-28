function raiz(max){
    let i=0,m=1,n=2,R=0,r=0,total=0,finali=0,s=0;
   
    s=(1/2)*(max[i]+max[m]+max[n]);

    R=(max[1]*max[m]*max[n]);
    
    r=(s*(s-max[i])*(s-max[m])*(s-max[n]));
    
    total=r*(1/4);
    
    finali=s/total;
    
    return finali;
}

 let anArray=[5,6,7];

print(raiz(anArray));
