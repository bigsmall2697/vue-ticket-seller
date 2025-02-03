<template>
  <form @submit.prevent="submitForm" class="space-y-6 text-left">
    <div>
      <label for="ticket-name" class="block text-sm font-medium text-gray-700">
        Ticket Name
      </label>
      <input
        id="ticket-name"
        v-model="name"
        type="text"
        class="block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        required
      />
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        id="description"
        v-model="description"
        class="block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        rows="3"
        required
      ></textarea>
    </div>

    <div>
      <label for="count" class="block text-sm font-medium text-gray-700">
        Number of Tickets
      </label>
      <input
        id="count"
        v-model.number="count"
        type="number"
        class="block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        required
      />
    </div>

    <div>
      <label for="price" class="block text-sm font-medium text-gray-700">
        Price
      </label>
      <input
        id="price"
        v-model.number="price"
        type="number"
        step="0.01"
        class="block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        required
      />
    </div>

    <div>
      <label class="flex items-center space-x-3">
        <input
          v-model="isVIP"
          type="checkbox"
          class="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
        />
        <span>VIP Ticket</span>
      </label>
    </div>

    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition duration-300"
    >
      Add Ticket
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["add-ticket"]);

const name = ref("");
const description = ref("");
const isVIP = ref(false);
const count = ref(0);
const price = ref(0);

const submitForm = () => {
  emit("add-ticket", {
    name: name.value,
    description: description.value,
    isVIP: isVIP.value,
    count: count.value,
    price: price.value,
  });

  name.value = "";
  description.value = "";
  isVIP.value = false;
  count.value = 0;
  price.value = 0;
};
</script>
