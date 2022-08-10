
function password() {
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    if(password1.value !== password2.value){
        password1.style.border ='red 2px solid';
        password2.style.border = 'red 2px solid';
    }else{
       
    }
}