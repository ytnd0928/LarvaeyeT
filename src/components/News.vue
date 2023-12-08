<template>
  <body>
    <div>
      <h1 class="title">2023. 7. 15 LAUNCH PARTY at BLACKBOX3</h1>
    </div>
    <div class="gallery">
      <!-- ギャラリー -->
      <div class="image-gallery">
        <div
          class="image-tile"
          v-for="(image, index) in images"
          :key="index"
          @click="openModal(image)"
        >
          <img :src="image" alt="画像の説明" />
        </div>
      </div>
    </div>
  </body>
  <teleport to="body">
    <div v-if="modalVisible" class="modal" @click.self="modalVisible = false">
      <div class="modal-content">
        <span class="close" @click.stop="modalVisible = false">&times;</span>
        <img :src="modalImage" alt="画像の説明" />
      </div>
    </div>
  </teleport>
</template>
<style scoped>
.title {
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-top: 180px;
}
.gallery {
  background-color: black;
  display: flex;
  justify-content: center; /* ギャラリー全体を中央寄せ */
}

.image-tile {
  flex-basis: calc(20% - 20px); /* 3列に分割 */
  margin: 10px;
  overflow: hidden;
  border: 0px solid #ccc;
}

.image-gallery {
  margin-top: 50px;
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px; /* ギャラリーの最大幅 */
}
.image-tile img {
  width: 100%; /* コンテナに合わせて画像を伸縮 */
  height: auto;
  display: block;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #888;
  cursor: pointer;
}

.modal-content {
  position: relative;
  margin: 10% auto;
  padding: 20px;
  max-width: 500px;
  border-radius: 5px;
}
.modal-content img {
  max-width: 100%; /* 画像の最大幅を100%に制限 */
  max-height: 80vh; /* 画面の高さの80%までに制限 */
  display: block; /* 余白を解消するためにブロック要素として表示 */
  margin: 0 auto; /* 水平方向に中央寄せ */
}

.close:hover {
  color: #000;
}

@media (max-width: 600px) {
  .image-tile {
    flex-basis: calc(50% - 20px); /* 2列に分割 */
  }
}
</style>

<script>
export default {
  name: "LookPage",
  data() {
    return {
      images: [
        "/images/party/2(2).jpg",
        "/images/party/5(2).jpg",
        "/images/party/8.jpg",
        "/images/party/11.jpg",
        "/images/party/12.jpg",
        "/images/party/14.jpg",
        "/images/party/18.jpg",
        "/images/party/19.jpg",
        "/images/party/21.jpg",
        "/images/party/22.jpg",
        "/images/party/23.jpg",
        "/images/party/27.jpg",
        "/images/party/1.jpg",
        "/images/party/1(2).jpg",
        "/images/party/2.jpg",
        "/images/party/3.jpg",
        "/images/party/3(2).jpg",
        "/images/party/4.jpg",
        "/images/party/4(2).jpg",
        "/images/party/5.jpg",
        "/images/party/6.jpg",
        "/images/party/7.jpg",
        "/images/party/9.jpg",
        "/images/party/10.jpg",
        "/images/party/13.jpg",
        "/images/party/15.jpg",
        "/images/party/16.jpg",
        "/images/party/17.jpg",
        "/images/party/20.jpg",

        "/images/party/24.jpg",
        "/images/party/25.jpg",
        "/images/party/26.jpg",

        "/images/party/28.jpg",
        "/images/party/29.jpg",
        "/images/party/30.jpg",
      ],
      modalVisible: false, // モーダルの表示状態
      modalImage: "", // モーダルに表示する画像のパス
    };
  },
  methods: {
    openModal(image) {
      this.modalImage = image; // モーダルに表示する画像を設定
      this.modalVisible = true; // モーダルを表示
    },
    closeModal() {
      this.modalVisible = false; // モーダルを閉じる
    },
  },
};
</script>
