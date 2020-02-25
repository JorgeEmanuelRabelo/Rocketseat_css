const _btnLogin = document.querySelector(".btn-login");
const _form = document.querySelector("form");


_btnLogin.addEventListener("click", event => {
    event.preventDefault();
    _form.classList.add('form-hide');
});