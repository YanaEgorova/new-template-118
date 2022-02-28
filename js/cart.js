import { products } from './data/products.js';
import { item, paginationItem } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
const paginationList = document.querySelector('.js_pagination__list');

products.forEach(product => {
    productsList.insertAdjacentHTML('beforeend',item(product));
    paginationList.insertAdjacentHTML('beforeend',paginationItem(product));
})
