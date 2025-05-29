var passwordInput = document.getElementById("password")
var toggleIcon = document.getElementById("toggleIcon")
let error=document.querySelector(".error")
toggleIcon.addEventListener('click',()=>{
    if(passwordInput.type=='password'){
        passwordInput.type='text'
     toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
        console.log('Password is now visible');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
        console.log('Password is now hidden');
    }
 })
 let fullName=document.getElementById("name");
 let email=document.getElementById("email");
 let password=document.getElementById("password");
 let cpassword=document.getElementById("cpassword");
 let button=document.getElementById("submit");
 let success=document.querySelector(".success")
 button.addEventListener("click",function(event){
    event.preventDefault();
     if(fullName.value.length<5){
        error.textContent="Name must have atleast 5 characters ";
        error.style.color="red";
    }else{
        error.textContent="";
    }
    if(email.value.include("@")||email.value.include(".com")){
        error.textContent="Invalid email id";
        error.style.color="red";
    }else{
        error.textContent="";
    }
    if(password.value.length<8){
        error.textContent="Give me a strong Password";
        error.style.color="red";
    }
    else{
        error.textContent="";
    }
     if(cpassword.value.length<8){
        error.textContent="Give me a strong Password";
        error.style.color="red";
    }
    else{
        error.textContent="";
    }
    if(fullName.value.length>=5 && email.value.include("@") && email.value.include(".com") && password.value.length>8 && cpassword.value.length>8 ){
success.textContent="Log in successfully"
success.style.color="green"
    }
 })
   
 