function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
   }
   function push(element) {
    this.dataStore[this.top++] = element;
   }
   function length() {
    return this.top;
   }
   function pop() {
    return this.dataStore[--this.top];
   }
function fact(n) {
 var s = new Stack();
 while (n > 1) {
 s.push(n--);
 }
 var product = 1;
 while (s.length() > 0) {
 product *= s.pop();
 }
 return product;
}
console.log(fact(5));