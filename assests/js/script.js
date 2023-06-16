var copybtn =  document.getElementById('copy');
function getPassword(){
    // alert('clicked')
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = 16;
    var password =  "";
    // GENERER LE MOT DE PASSE
    for(let i = 0;  i < passwordLength; i++){
        let randomNumber =  Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber , randomNumber + 1)
        // afficherle  mot  de  passe
        document.getElementById('password').value = password;
        // changer  le  style   du  BUTONS  copier
        copybtn.style.background = "#6c757d"
        copybtn.style.color = "#fff"
    }
}
// cpoier  le   mot de  passeruMJ9MU3&qi^)Il7

function  copyMdp(){
    var inputPassword  =   document.getElementById('password');
    // verifier la  longueur du mot de  passe
    if(inputPassword.value.length == 16){
        // copier   le  de  passe
        inputPassword.select();
        document.execCommand("copy")
        // changer  le  style   du  button  COPIER
        copybtn.style.background = "transparent"
        copybtn.style.color = "#000"
        // afficher une alert
        alert('mot de  passe copier');

    }
    else{
        alert('veillez generer  un  de  passe')
    }
}