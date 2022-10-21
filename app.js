let fname = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let button = document.getElementById("btn")  



button.addEventListener("click", ()=>{
    console.log("name : ", fname.value + "  "+ "email :", email.value +  "   "  + "password :",  pass.value);
})