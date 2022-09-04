const Btn = document.getElementById("purchase_btn");

Btn.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.replace("/Back-2-School/web/thank_you.html");
})