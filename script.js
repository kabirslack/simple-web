import { count } from "./count.js";

let sum = count(5);
console.log(sum)

let root = document.querySelector('#root')
if(root){
    root.textContent=sum
}