const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const email = formlog.email.value;
    const password = formlog.password.value;

    if (email === "admin@gmail.com" && password === "12345") {
        alert("You have successfully logged in.");
        window.location.replace("/Back-2-School/index.html");
        //location.reload();
    } else {
        ErrorMessage.style.opacity = 1;
    }
})