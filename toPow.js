function pow(x, y){
    var i=0, a=1;
    for(i=0; i<y; i++){
	a=a*x;
    }
	return a;
}

console.log(pow(5, 4));


