<template>
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
        <v-container class="text-center grey">
          <!-- 画像を中央に配置 -->
          <v-row justify="center">
            <div class="mt-2">
              <img src="/images/header.jpeg" alt="Image" width="1200" height="400" >
            </div>
            <video width="1200" height="400" controls>
                <source src="larv.mov" type="video/mov">
                Your browser does not support the video tag.
              </video>
          </v-row>
          
          <!-- その他のコンテンツ -->
          <v-row>
            <v-col cols="12">
              
            </v-col>
          </v-row>
        </v-container>
      </v-main>

  </template>
  
  <style>
  .header-title {
    font-size: 24px;
    color: #E0E0E0;
    font-weight: bold;
  }
  .menu {
    color: #E0E0E0;
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
  