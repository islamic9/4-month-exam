const login = document.querySelector("#login");
const loginEmail = document.querySelector("#login-email");
const loginParol = document.querySelector("#login-parol");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email: loginEmail.value,
            password: loginParol.value
        })

    })
    .then(response => response.json())
    .then(data => {
        if(data.access_token){
            localStorage.setItem("access-token", data.access_token) 
            if(localStorage.getItem("access-token")){
                window.location.href = "http://127.0.0.1:5500/index.html";
            }
        }
    })
    .catch(err => console.error(err))
        
})

if(localStorage.getItem("access-token")){
    window.location.href = "http://127.0.0.1:5500/index.html";
}

if(localStorage.getItem("access-token")){
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
    "Authorization" : `Bearer ${localStorage.getItem("access-token")}`
})
.then(response => response.json())
.then(data => console.log(data))
}

