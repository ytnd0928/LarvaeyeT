<template>
  <v-app-bar app color="black">
    <v-spacer />
    <router-link to="/">
      <img src="/images/larlogo.png" class="header-title mx-7" />
    </router-link>
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <div class="menu hidden-md-and-down">
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/look">LOOK</v-btn>
      <v-btn text to="/store">STORE</v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app temporary right top>
    <v-list>
      <v-list-item link to="/">Home</v-list-item>
      <v-list-item link to="/look">LOOK</v-list-item>
      <v-list-item link to="/store">STORE</v-list-item>
    </v-list>
  </v-navigation-drawer>
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

.mt-2 {
  margin-top: 2rem; /* 2remのマージンを追加（調整可能） */
}

.header-title {
  width: 400px;
}

@media (max-width: 800px) {
  .header-title {
    width: 30px; /* adjust as needed */
  }
}

@media (max-width: 800px) {
  .header-title {
    width: 200px; /* adjust as needed */
  }
}

@media (min-width: 801px) {
  .menu {
    display: flex;
  }
  .v-app-bar-nav-icon {
    display: none;
  }
}

@media (max-width: 800px) {
  .menu {
    display: none;
  }
}

@media (min-width: 800px) {
  .v-app-bar-nav-icon {
    display: none;
  }
}
</style>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  name: "AppHeader", // コンポーネント名を "AppHeader" に変更
};
</script>
