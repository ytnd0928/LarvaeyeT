<template>
    <div>
      <!-- ヘッダーセクション -->
      <v-app-bar app color="grey-darken-4">
        <h1 class="header-title mx-7">Larvae yeT</h1>
        <v-spacer></v-spacer>
        <div class="menu">
          <v-btn text>Home</v-btn>
          <v-btn text>LOOK</v-btn>
          <v-btn text>STORE</v-btn>
        </div>
      </v-app-bar>
  
      <!-- メインコンテンツセクション -->
      <v-main>
        <v-container>
          <h2 class="page-title">Welcome to Larvae yeT</h2>
          <p>
            This is the home page content. You can customize it as needed.
          </p>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppHome",
  };
  </script>
  
  <style>
  .header-title {
    font-size: 24px;
    color: #E0E0E0;
    font-weight: bold;
  }
  .menu {
    color: #E0E0E0;
  }
  .page-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }
  </style>
  