let Stack = (function () {
const items= new WeakMap();
class Stack {
 constructor () {
item.set(this, []);
 }
 push(element){
 let s = items.get(this); //{3}
 s.push(element);
 }
 pop(){
 let s = items.get(this);
 let r = s.pop();
 return r;
 }
 //other methods
}})();
let weakMap=new WeakMap();
 weakMap.push(77);
 weakMap.push(1);
 console.log(weakMap.length);
 weakMap.pop();
 weakMap.push(8);
 console.log(weakMap);  