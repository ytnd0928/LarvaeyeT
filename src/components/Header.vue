<template>
  <v-app-bar app color="black">
    <v-spacer />
    <router-link to="/">
      <img src="/images/larlogo.png" class="header-title mx-7" />
    </router-link>
    <div class="menu">
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/look">LOOK</v-btn>
      <v-btn text to="/store">STORE</v-btn>
    </div>
  </v-app-bar>
</template>

<style>
.custom-bg-color {
  background-color: #000000; /* カスタムの背景色を指定 */
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

.menu v-btn {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mt-2 {
  margin-top: 2rem; /* 2remのマージンを追加（調整可能） */
}

.header-title {
  width: 400px;
}

@media (max-width: 991px) {
  .header-title {
    width: 30px; /* adjust as needed */
  }
}

@media (max-width: 767px) {
  .header-title {
    width: 200px; /* adjust as needed */
  }

  .menu {
    flex-direction: column;
  }
}

@media (max-width: 800px) {
  .menu v-btn {
    max-width: 60px; /* adjust as needed */
  }
}
</style>

<script>
export default {
  name: "AppHeader", // コンポーネント名を "AppHeader" に変更
};
</script>
