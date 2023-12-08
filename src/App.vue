<template>
  <v-app class="custom-bg-color">
    <Header />
    <router-view />
  </v-app>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>
