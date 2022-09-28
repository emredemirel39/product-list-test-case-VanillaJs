const products = [
    {
        name: 'Вельветовый пуховик',
        discount: '-25%',
        image: './images/img1.webp',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        name: 'Вельветовый пуховик',
        discount: '-25%',
        image: './images/img2.webp',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        name: 'Вельветовый пуховик',
        discount: '-25%',
        image: './images/img3.png',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        name: 'Вельветовый пуховик в несколько слов для проверки количества',
        discount: '-25%',
        image: './images/img4.png',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        name: 'Вельветовый пуховик',
        discount: '-25%',
        image: './images/img5.png',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        name: 'Вельветовый пуховик',
        discount: '-25%',
        image: './images/img6.png',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        name: 'Вельветовый пуховик',
        discount: '-25%',
        image: './images/img7.png',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        name: 'Вельветовый пуховик',
        discount: '-25%',
        image: './images/img8.png',
        oldPrice: '7 999',
        newPrice: '1 339',
        avaibleSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
]

window.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});


function displayProducts() {
    const productList = document.querySelector('.product__list');

    products.forEach(productItem => {
    const productBox = document.createElement('div');
    productBox.classList.add('product__box');
    productBox.innerHTML =
        `
    <div class="product__image">
            <img src="${productItem.image}" alt="product-image">
            <span>${productItem.discount}</span>
            <svg class="favorite-icon">
                <use xlink:href="#favorite-svg"></use>
            </svg>
    </div>
        <div class="product__info">
            <h4 class="product__name">${productItem.name}</h4>
            <div class="product__price-box">
                <span class="product__old-price">${productItem.oldPrice} руб.</span>
                <span class="product__new-price">${productItem.newPrice} руб.</span>
            </div>
        </div>
        <div class="product__details">
            <span class="product__sizes-box">
                <p class="product__sizes-title">Размеры в наличии:</p>
                <div class="product__sizes">
                    ${productItem.avaibleSizes.map(s => `<p>${s}</>`)}
                </div>
            </span>
            <button class="product__buy-btn">
                Купить
            </button>
        </div>
    `;

    productList.appendChild(productBox);
})
    
}