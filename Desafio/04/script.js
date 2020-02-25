const _btnLogin = document.querySelector(".btn-login");
const _form = document.querySelector("form");


_btnLogin.addEventListener("click", event => {
    event.preventDefault();
    _form.classList.add('form-hide');
});

_form.addEventListener("animationstart", event => {
    if (event.animationName === "down") {
        document.querySelector("body").style.overflow = "hidden";
    }
});

_form.addEventListener("animationend", event => {
    if (event.animationName === "down") {
        _form.style.display = 'none';
        document.querySelector("body").style.overflow = "none";
    }
});