const value=document.querySelector("#value");
const btnDecrease=document.querySelector(".btn-decrease");
const btnReset=document.querySelector(".btn-reset");
const btnIncrease=document.querySelector(".btn-increase");
let count=0;
function getValue(){
  value.textContent=count;
  if(count<0){
    value.style.color="red";
  }
   if(count>0){
    value.style.color="green";
  }
  if(count===0){
    value.style.color="black";
  }
}
btnDecrease.addEventListener("click",()=>{
  count--;
  getValue();
})
btnIncrease.addEventListener("click",()=>{
  count++;
  getValue();
})
btnReset.addEventListener("click",()=>{
  count=0;
  getValue();
})