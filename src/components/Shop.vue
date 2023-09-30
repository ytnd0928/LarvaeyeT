<template>
  <div class="gif-container">
    <img :src="gifImagePath" alt="GIF画像の説明" class="gif" />
  </div>
</template>
<style>
.gif-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1500px;
  height: 100vh; /* 画面の高さいっぱいに設定 */
  text-align: center;
}
.gif {
  max-width: 100%; /* 幅を最大まで拡大 */
  max-height: 100%; /* 高さを最大まで拡大 */
  margin: 0 auto; /* 左右のマージンを自動調整して中央に配置 */
  display: inline-block;
  width: 800px;
}
</style>
<script>
export default {
  name: "AppShop", // コンポーネント名を "AppHeader" に変更
  data() {
    return {
      gifImagePath: "/images/com.gif",
    };
  },
};
</script>
