<template>
    <table class="table table-striped table-bordered text-center" v-if="cartItems.length">
        <thead class="table-dark">
            <tr>
                <th>Produkt</th>
                <th>Množství</th>
                <th>Cena</th>
                <th>Celkem</th>
                <th>Smazat</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in cartItems" :key="item.productId">
                <td style="text-align:left; padding-left:20px">{{ item.details.name }}</td>
                <td>
                    <div class="quantity-control">
                        <button @click="decrease(item)">&lt;</button>
                        <span class="quantity">{{ item.details.quantity }}</span>
                        <button @click="increase(item)">&gt;</button>
                    </div>
                </td>
                <td style="text-align:right; padding-right:20px">{{ item.details.price.toFixed(2) }} Kč</td>
                <td style="text-align:right; padding-right:20px">{{ item.details.lineTotal.toFixed(2) }} Kč</td>
                <td><button @click="remove(item)" class="delete-btn text-danger fw-bold">X</button></td>
            </tr>
        </tbody>
    </table>

    <div v-else id="cartEmpty">&nbsp;Košík je prázdný</div>
</template>


<script setup>
    import { ref, onMounted, computed } from 'vue';

    const cartItems = ref([]);
    const customerName = ref('');
    const customerEmail = ref('');

    const total = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + (item.details.lineTotal || 0), 0);
    });

    // --- helpers pro cookie ---
    function getCartFromCookie() {
        const cartJson = document.cookie.split('; ').find(row => row.startsWith('Cart='));
        return cartJson ? JSON.parse(decodeURIComponent(cartJson.split('=')[1])) : [];
    }

    function updateCartCookie(productId, newQuantity) {
        const cartJson = document.cookie.split('; ').find(row => row.startsWith('Cart='));
        if (!cartJson) return;

        const cart = JSON.parse(decodeURIComponent(cartJson.split('=')[1]));
        const item = cart.find(p => p.ProductId == productId);
        if (item) item.Quantity = newQuantity;

        document.cookie = `Cart=${encodeURIComponent(JSON.stringify(cart))}; path=/; max-age=${7 * 24 * 60 * 60}`;
    }

    function deleteFromCart(productId) {
        const cartJson = document.cookie.split('; ').find(row => row.startsWith('Cart='));
        if (!cartJson) return;

        let cart = JSON.parse(decodeURIComponent(cartJson.split('=')[1]));
        cart = cart.filter(item => item.ProductId != productId);
        document.cookie = `Cart=${encodeURIComponent(JSON.stringify(cart))}; path=/; max-age=${7 * 24 * 60 * 60}`;
    }

    // --- cart load ---
    async function loadCart() {
        const cart = getCartFromCookie();
        if (!cart.length) {
            cartItems.value = [];
            return;
        }

        const response = await fetch('/api/orders/cart');
        const items = await response.json();

        items.forEach(item => {
            item.details.lineTotal = item.details.price * item.details.quantity;
        });

        cartItems.value = items;
    }

    // --- quantity control ---
    function increase(item) {
        item.details.quantity++;
        updateCartCookie(item.productId, item.details.quantity);
        loadCart();
    }

    function decrease(item) {
        if (item.details.quantity > 1) {
            item.details.quantity--;
            updateCartCookie(item.productId, item.details.quantity);
        } else {
            remove(item);
            return;
        }
        loadCart();
    }

    function remove(item) {
        deleteFromCart(item.productId);
        loadCart();
    }

    // --- submit order ---
    async function submitOrder() {
        const cart = getCartFromCookie();
        if (!cart.length) return alert("Košík je prázdný");
        if (!customerName.value || !customerEmail.value) return alert("Vyplňte jméno a e-mail");

        const payload = {
            CustomerName: customerName.value,
            CustomerEmail: customerEmail.value,
            Cart: cart
        };

        try {
            const response = await fetch('/api/orders/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                credentials: 'same-origin'
            });

            if (response.ok) {
                window.location.href = '/';
            } else {
                const errorText = await response.text();
                alert(errorText || "Při odesílání objednávky nastala chyba.");
            }
        } catch (err) {
            console.error(err);
            alert("Při odesílání objednávky nastala neočekávaná chyba.");
        }
    }

    // --- načtení při mount ---
    onMounted(loadCart);</script>
