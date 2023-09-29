<template>
  <v-app class="custom-bg-color">
    <v-main>
      <!-- フェードアウトのオーバーレイ -->
      <!-- <v-overlay :value="showOverlay" color="white" transition="fade-transition">
          <v-progress-circular
            indeterminate
            size="64"
            color="#ffffff"
          ></v-progress-circular>
        </v-overlay> -->
      <!-- メインコンテンツセクション -->
      <div class="custom-bg-color">
        <video width="1200" height="400" autoplay loop muted class="video-fit">
          <source src="/images/promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <v-container class="text-center grey">
          <!-- 画像を中央に配置 -->
        </v-container>
        <!-- その他のコンテンツ -->
        <v-row>
          <v-col cols="12"> </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<style>
.custom-bg-color {
  background-color: black;
  margin-top: 10px;
}
.video-fit {
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
  aspect-ratio: 6/1;
}
</style>

<script>
export default {
  name: "AppHome", // コンポーネント名を "AppHeader" に変更
};
</script>
