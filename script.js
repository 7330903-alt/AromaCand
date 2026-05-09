// Массив для хранения товаров в корзине
let cart = [];

// Функция для добавления товара в корзину
function addToCart(productName, price) {
    // Добавляем объект товара в массив
    cart.push({ name: productName, price: price });
    
    // Обновляем счетчик на иконке корзины
    updateCartCounter();
    
    alert(`Товар ${productName} добавлен в корзину!`);
}

// Функция обновления цифры на иконке
function updateCartCounter() {
    const counter = document.getElementById('cart-count');
    if (counter) {
        counter.innerText = cart.length;
    }
}

// Плавная прокрутка к каталогу
function scrollToCatalog() {
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

// Находим все кнопки "В корзину" и вешаем на них событие
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Берем название и цену прямо из верстки карточки
        const card = button.parentElement;
        const name = card.querySelector('h3').innerText;
        const priceText = card.querySelector('.price').innerText;
        const price = parseInt(priceText.replace(/[^\d]/g, '')); // Оставляем только цифры
        
        addToCart(name, price);
    });
});
