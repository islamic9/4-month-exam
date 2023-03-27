const containerEl = document.querySelector("#containerEl")

function breakWord(str) {
    if(str.split("").length > 30){
        return str.split("").slice(0, 30).join("") + "..."
    }
    return str
}

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card"
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.description}">
                <h2>${breakWord(product.title)}</h2>
                <strong>$${product.price}</strong>
                <p>${breakWord(product.description)}</p>
                <div class="star-wrapper">
                    <button class="delete-btn">delete</button>
                    <strong>${product.rating.rate}</strong>
                </div>
            `;
            containerEl.appendChild(productCard)
        });
    })

containerEl.addEventListener("click", (e) => {
    if(e.target.className == "delete-btn"){
        fetch('https://fakestoreapi.com/carts/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>confirm("Are you sure to delete"))
    }
})