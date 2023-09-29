<template>
  <v-app-bar app color="black">
    <v-spacer />
    <img src="/images/larvae.jpg" class="header-title mx-7" />
    <div class="menu">
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/look">LOOK</v-btn>
      <v-btn text to="/store">STORE</v-btn>
    </div>
  </v-app-bar>
</template>

<style>
.custom-bg-color {
  background-color: black; /* カスタムの背景色を指定 */
  height: 1500px;
}

.header-title {
  width: 400px;
}
.menu {
  color: #e0e0e0;
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 1 1;
}

.mt-2 {
  margin-top: 2rem; /* 2remのマージンを追加（調整可能） */
}
</style>

<script>
export default {
  name: "AppHeader", // コンポーネント名を "AppHeader" に変更
};
</script>
