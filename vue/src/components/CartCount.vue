<template>
  <div>
    <!-- Reaktivní počet položek v košíku -->
    <span id="cart-count">{{ totalQty }}</span>23
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reaktivní proměnná pro počet položek
const totalQty = ref(0);

// Funkce pro načtení dat z API
async function updateCartCount() {
  try {
    const response = await fetch('/api/orders/cart');
    const items = await response.json();

    // Spočítáme celkové množství
    totalQty.value = items.reduce((sum, item) => sum + item.details.quantity, 0);
  } catch (error) {
    console.error('Chyba při načítání košíku:', error);
  }
}

// Spustíme při načtení komponenty
onMounted(() => {
  updateCartCount();
});
</script>
