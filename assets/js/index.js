const data = document.getElementById("data");
const pagenation = document.getElementById("pagenation");
let limit = 4;
let page = 1;
let src;


function addtoCart() {
 axios.get(`https://dummyjson.com/products?page=${page}&limit=${limit}`) 
 .then((res) => {
    src =res.data.products ;
    src.find((item) => {
        const cart = document.createElement("div");
    cart.className = "cartDescription";
    cart.innerHTML = `
             <div class="cartDiv">
             <div class="images">
             <img src="${item.thumbnail}" alt="">
             </div>
             
             <div class="texts">
             <p>${item.category}</p>
             <h6>${item.title}</h6>
             <h4>${item.price} $</h4>
             <p>${item.rating}</p>
             </div>
             <button onclick="addToBasket(${item.id})">Add To Basket</button>
             <button onclick="addToWishlist(${item.id})">Add To Wishlist</button>   
             </div>

    `;
    data.appendChild(cart);
    })
    page++;
 })   
}
pagenation.addEventListener("click",addtoCart);
addtoCart()

function addToBasket(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    basket = cart.find((item) => item.id == id)
    if(basket){
        basket.count=(basket.count || 1) + 1
    }
    else{
        cart.push({...src.find((item) => item.id == id),count : 1})
    }
    localStorage.setItem("cart",JSON.stringify(cart))
}


function addToWishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    list = wishlist.find((item) => item.id == id)
    if(list){
        alert("Favori edilib")
    }
    else{
        wishlist.push(src.find((item) => item.id == id))
    }
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
}
