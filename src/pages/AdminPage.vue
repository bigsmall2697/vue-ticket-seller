<template>
  <div class="container space-y-6">
    <h1 class="title">Admin - Manage Tickets</h1>

    <!-- Ticket Form -->
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <TicketForm @add-ticket="ticketStore.addTicket" />
    </div>

    <!-- Ticket List -->
    <div class="border-t-1 mt-6 pt-4 border-gray-300" v-if="ticketStore.tickets.length > 0">
    <h2 class="text-2xl font-bold text-gray-800 text-center">Tickets</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <TicketItem
        v-for="ticket in ticketStore.tickets"
        :key="ticket.id"
        :ticket="ticket"
        :showDelete="true"
        @delete-ticket="ticketStore.deleteTicket"
      />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTicketStore } from "../store/ticket";
import TicketForm from "../components/TicketForm.vue";
import TicketItem from "../components/TicketItem.vue";

const ticketStore = useTicketStore();
</script>
