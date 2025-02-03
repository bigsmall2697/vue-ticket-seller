<template>
  <div class="container space-y-6">
    <h1 class="title">Available Tickets</h1>

    <div v-if="ticketStore.tickets.length === 0" class="text-center text-gray-500">
      No tickets available.
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <TicketItem
        v-for="ticket in ticketStore.tickets"
        :key="ticket.id"
        :ticket="ticket"
        :showAddToCart="true"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTicketStore } from "../store/ticket";
import TicketItem from "../components/TicketItem.vue";

const ticketStore = useTicketStore();

const addToCart = (ticket: any, quantity: number) => {
  ticketStore.addToCart(ticket, quantity);
};
</script>
