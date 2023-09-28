<template>
  <v-app class="custom-bg-color">
    <Header />
    <router-view />
  </v-app>
</template>

<style></style>

<script setup>
import Header from "./components/Header.vue"; // ヘッダーコンポーネントのパスを指定
// import Home from "./components/Home.vue";
import { ref, onMounted } from "vue";

const showOverlay = ref(true);

onMounted(() => {
  // アクセス時に3秒後にフェードアウトを非表示にする
  setTimeout(() => {
    showOverlay.value = false;
  }, 3000); // ミリ秒単位の時間を指定
});
</script>
