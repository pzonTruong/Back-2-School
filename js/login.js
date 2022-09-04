const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");
const sign_up_form = document.getElementById("su_form");
const sign_up_log = document.getElementById("sign_up_btn");
var account = [["admin@gmail.com","12345"],["son@gmail.com","son12345"]];

BtnLog.addEventListener("click", (e) => {
    e.preventDefault()
    const email = formlog.email.value;
    const password = formlog.password.value;

    for(i=0;i<=account.length;i++){
        if (email === account[i][0] && password === account[i][1]) {
            alert("You have successfully logged in.");
            window.location.replace("/Back-2-School/index_logged.html");
            //location.reload();
        } 
    }
})









