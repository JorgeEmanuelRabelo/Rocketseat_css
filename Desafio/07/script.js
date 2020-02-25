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


// Squares
const _ulSquares = document.querySelector('ul.squares');

for (let index = 0; index < 21; index++) {
    const li = document.createElement('li');

    const random = (min, max) => Math.random() * ((min, max) + min);
    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 0.12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

    _ulSquares.appendChild(li);
}