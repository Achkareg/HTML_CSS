
/* Когда пользователь нажимает на кнопку, раскрывается меню */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("menu_dropdown");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function searchFunction() {
    document.getElementById("search").classList.toggle("show");
}

const products = [{
    backgr : "url('./img/product1.jpg')",
    h5 : "ELLERY X M'O CAPSULE",
    p : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price : "$52.00"
},
{
    backgr : "url('./img/product2.png')",
    h5 : "ELLERY X M'O CAPSULE",
    p : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price : "$52.00"
},
{
    backgr : "url('./img/product3.png')",
    h5 : "ELLERY X M'O CAPSULE",
    p : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price : "$52.00"
},
{
    backgr : "url('./img/product4.png')",
    h5 : "ELLERY X M'O CAPSULE",
    p : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price : "$52.00"
},
{
    backgr : "url('./img/product5.png')",
    h5 : "ELLERY X M'O CAPSULE",
    p : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price : "$52.00"
},{
    backgr : "url('./img/product6.png')",
    h5 : "ELLERY X M'O CAPSULE",
    p : "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price : "$52.00"
}
]
const div_prods = document.querySelector('.products');
if (div_prods){
products.forEach(product =>{
    const div_prod = document.createElement('div');
    div_prod.classList.add('product');

    const prod_item = document.createElement('div');
    prod_item.classList.add('product_item');
    prod_item.style.background = product.backgr;

    const prod_backgr = document.createElement('div');
    prod_backgr.classList.add('product_backgr');
    
    const button = document.createElement('button');
    button.classList.add('button_add_cart');
    button.setAttribute('alt', 'cart');
    button.textContent = "Add to cart";

    const prod_img = document.createElement('img');
    prod_img.src = "img/cart.png";

    const title_price = document.createElement('div');
    title_price.classList.add('title_price');

    const h5_prod = document.createElement('h5');
    h5_prod.classList.add('h5');
    h5_prod.textContent = product.h5;

    const p_prod = document.createElement('p');
    p_prod.classList.add('p');
    p_prod.textContent = product.p;

    const price_prod = document.createElement('div');
    price_prod.classList.add('price');
    price_prod.textContent = product.price;

    div_prods.appendChild(div_prod);
    div_prod.appendChild(prod_item);
    prod_item.appendChild(prod_backgr);
    prod_backgr.appendChild(button);
    button.appendChild(prod_img);
    div_prod.appendChild(title_price);
    title_price.appendChild(h5_prod);
    title_price.appendChild(p_prod);
    title_price.appendChild(price_prod);

})}

let cart_count = 0;
if (cart_count!=0) cart.style.visibility = "visible";
const prod_click = document.querySelectorAll('.product_backgr');
prod_click.forEach(element => {
    element.onclick = function () {
        cart_count++;
        const cart = document.querySelector('.cart_number');
        cart.style.visibility = "visible";
        cart.textContent = cart_count;}
});

