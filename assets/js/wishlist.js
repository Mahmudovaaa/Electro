const productWishlist = document.getElementById("productWishlist");


function getWishlist() {
    productWishlist.innerHTML = ``;
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    wishlist.map((item, index) => {
        const box = document.createElement("div");
        box.className = "wishDiv";
        box.innerHTML = `
        <div>
             <div class="imageClass"><img src="${item.thumbnail}" alt=""></div>
            <div class="paraqraf">
             <p>${item.id}</p>
             <h6>${item.title}</h6>
             <h6>${item.price} $</h6>
             </div>
            <div class="buttonRemove"><button onclick="addToRemove(${index})">geri al</button></div>
             </div>
       `;
       productWishlist.appendChild(box);
    })
}
getWishlist()
function addToRemove(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter((item, i) => i !== index);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    getWishlist();
}
