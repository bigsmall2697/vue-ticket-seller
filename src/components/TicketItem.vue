<template>
  <div
    class="ticket-card flex flex-col gap-4 p-5 border border-gray-200 shadow-lg rounded-lg bg-white"
  >
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-bold text-gray-800">{{ ticket.name }}</h3>
      <span
        v-if="ticket.isVIP"
        class="bg-yellow-400 text-white text-sm px-3 py-1 rounded-full"
      >
        VIP
      </span>
    </div>
    <p class="text-gray-600 text-sm">{{ ticket.description }}</p>
    <p class="text-lg font-semibold text-gray-700">${{ ticket.price }}</p>

    <div class="flex items-center gap-2">
      <label class="text-gray-600 text-sm">Quantity:</label>
      <div v-if="!showAddToCart">{{ ticket.count }}</div>
      <input
        v-else
        v-model.number="quantity"
        type="number"
        min="0"
        :max="ticket.count"
        class="w-16 border border-gray-300 rounded px-2 py-1"
      />
    </div>

    <div class="flex justify-end gap-2">
      <button
        v-if="showAddToCart"
        @click="$emit('add-to-cart', ticket, quantity)"
        :disabled="ticket.count === 0 || quantity <= 0 || quantity > ticket.count"
        class="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps<{
  ticket: {
    id: number;
    name: string;
    description: string;
    isVIP: boolean;
    count: number;
    price: number;
  };
  showAddToCart?: boolean;
}>();

const quantity = ref(0);
</script>
