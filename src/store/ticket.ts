import { defineStore } from "pinia";

interface Ticket {
  id: number;
  name: string;
  description: string;
  isVIP: boolean;
  count: number;
  price: number;
}

interface CartItem {
  ticket: Ticket;
  quantity: number;
}

export const useTicketStore = defineStore("ticketStore", {
  state: () => ({
    tickets: [] as Ticket[],
    cart: [] as CartItem[],
  }),
  actions: {
    addTicket(ticket: Ticket) {
      this.tickets.push({ ...ticket, id: Date.now() });
    },
    deleteTicket(id: number) {
      this.tickets = this.tickets.filter((ticket) => ticket.id !== id);
    },
    addToCart(ticket: Ticket, quantity: number) {
      if (quantity <= 0 || quantity > ticket.count) return;

      const cartItem = this.cart.find((item) => item.ticket.id === ticket.id);
      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        this.cart.push({ ticket, quantity });
      }

      ticket.count -= quantity;
    },
    removeFromCart(ticketId: number) {
      const index = this.cart.findIndex((item) => item.ticket.id === ticketId);
      if (index !== -1) {
        const cartItem = this.cart[index];

        const ticket = this.tickets.find((t) => t.id === cartItem.ticket.id);
        if (ticket) ticket.count += cartItem.quantity;

        this.cart.splice(index, 1);
      }
    },
    updateCartQuantity(ticketId: number, newQuantity: number) {
      const cartItem = this.cart.find((item) => item.ticket.id === ticketId);
      if (!cartItem) return;

      const ticket = this.tickets.find((t) => t.id === ticketId);
      if (!ticket) return;

      const difference = newQuantity - cartItem.quantity;
      if (difference > 0 && ticket.count >= difference) {
        cartItem.quantity = newQuantity;
        ticket.count -= difference;
      } else if (difference < 0) {
        cartItem.quantity = newQuantity;
        ticket.count += Math.abs(difference);
      }
    },
  },
});
