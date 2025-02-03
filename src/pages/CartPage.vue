<template>
  <div class="container space-y-6">
    <h1 class="title">Shopping Cart</h1>
    <div v-if="ticketStore.cart.length === 0" class="text-gray-500">
      Your cart is empty.
    </div>
    <div v-else class="space-y-4">
      <div
        v-for="item in ticketStore.cart"
        :key="item.ticket.id"
        class="flex justify-between p-4 bg-white border border-gray-300 shadow rounded"
      >
        <p class="text-lg">{{ item.ticket.name }} - ${{ item.ticket.price }}</p>
        <input
          v-model.number="item.quantity"
          @change="updateQuantity(item)"
          type="number"
          min="1"
          :max="item.ticket.count + item.quantity"
          class="w-16 border border-gray-300 rounded px-2 py-1"
        />
        <button
          @click="ticketStore.removeFromCart(item.ticket.id)"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTicketStore } from "../store/ticket";

const ticketStore = useTicketStore();

const updateQuantity = (item: any) => {
  ticketStore.updateCartQuantity(item.ticket.id, item.quantity);
};
</script>
