const productBasket = document.getElementById("productBasket");

function getBasket() {
    productBasket.innerHTML = ``;
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item, index) => {
        const box = document.createElement("div");
        box.className = "listDiv";
        box.innerHTML = `
        <div>
                   <div class="imageClass"><img src="${item.thumbnail}" alt="image"></div>
                    <p>title: ${item.title}</p>
                    <p>count: ${item.count}</p>
                   <div class="buttonRemove"> <button onclick="removeItem(${index})">sil</button></div>
                    </div>
       `;
       productBasket.appendChild(box);
    })
}
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    getBasket()
}

getBasket()
