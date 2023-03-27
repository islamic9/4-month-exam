const register = document.querySelector("#register");
const email = document.querySelector("#email");
const fondalanuvchiIsmi = document.querySelector("#foydalanuvchi-ismi");
const parol = document.querySelector("#parol");


register.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: fondalanuvchiIsmi.value,
            email: email.value,
            password: parol.value,
            avatar: rasm.value
        })
    })
    .then(respnse => respnse.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
})