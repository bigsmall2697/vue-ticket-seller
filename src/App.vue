<template>
  <div
    class="max-w-4xl mx-auto py-6 min-h-screen bg-gray-50 text-gray-900"
  >
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>
