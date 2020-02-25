const _btnLogin = document.querySelector(".btn-login");
const _form = document.querySelector("form");


_btnLogin.addEventListener("click", event => {
    event.preventDefault();

    const fields = [...document.querySelectorAll(".input-block input")];

    fields.forEach(field => {
        if (field.value === "") _form.classList.add("validate-error");
    });

    const formError = document.querySelector(".validate-error");
    if (formError) {
        formError.addEventListener("animationend", event => {
            if (event.animationName === "nono") {
                formError.classList.remove("validate-error");
            }
        });
    } else {
        _form.classList.add("form-hide");
    }
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