const sign_up_form = document.getElementById("su_form");
const sign_up_log = document.getElementById("sign_up_btn");
var account = [["admin@gmail.com","12345"],["son@gmail.com","son12345"]];

sign_up_log.addEventListener("click", (e) => {
    e.preventDefault();
    const email_add = sign_up_form.email_su.value;
    const password_add = sign_up_form.password_su.value;

    const account_add = [];
    account_add.push(email_add);
    account_add.push(password_add);

    account.push(account_add);
    alert("Sign up successfully");
    window.location.replace("/Back-2-School/web/login and sign up/login.html");
})


