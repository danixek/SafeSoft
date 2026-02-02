import { createApp } from 'vue';
import CartCount from './components/CartCount.vue';
// import LoadCart from './components/LoadCart.vue';

// Mount CartCount, pokud existuje na stránce
const cartEl = document.getElementById('cart-count');
if (cartEl) {
    createApp(CartCount).mount(cartEl);
}

// Mount LoadCart, pokud existuje na stránce

const loadEl = document.getElementById('load-cart');
if (loadEl) {
    createApp(LoadCart).mount(loadEl);
} 

// ... další komponenty
