
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

let cart_count = 0;
const cart = document.querySelector('.cart_number');
cart.textContent = cart_count;

const prod_click = document.querySelectorAll('.product_backgr');
prod_click.forEach(element => {
    element.onclick = function () {
        cart_count++;
        const cart = document.querySelector('.cart_number');
        cart.textContent = cart_count;}
});





