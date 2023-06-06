const btn = document.getElementById("button")
btn.addEventListener("click",function(){
   console.log("clickonme")
   const num1field = document.getElementById ( `num1`)
   const num2field = document.getElementById ( `num2`)
   const result =num1field.value + num2field.value;
   const sum =document.getElementById( `sum`)
   sum.innerHTML = result;
})