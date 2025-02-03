<template>
  <nav
    class="bg-gray-800 text-white px-6 py-4 flex justify-between sticky top-0 shadow-lg"
  >
    <div class="text-lg font-bold">Ticket Shop</div>
    <div class="space-x-4">
      <router-link to="/" class="hover:underline">🏠 Home</router-link>
      <router-link to="/admin" class="hover:underline">🛠️ Admin</router-link>
      <router-link to="/cart" class="hover:underline"
        >🛒 Cart ({{ ticketStore.cart.length }})</router-link
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useTicketStore } from "../store/ticket";

const ticketStore = useTicketStore();
</script>
