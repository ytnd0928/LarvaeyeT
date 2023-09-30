<template>
  <div>
    <div
      class="image-tile"
      v-for="(image, index) in images"
      :key="index"
      @click="openModal(image)"
    >
      <img :src="image" alt="画像の説明" />
    </div>

    <!-- モーダルを表示するためのteleportコンポーネント -->
    <teleport to="body">
      <div v-if="modalVisible" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <img :src="modalImage" alt="画像の説明" />
        </div>
      </div>
    </teleport>
  </div>
</template>
<style scoped>
body {
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
}

.image-tile {
  flex-basis: calc(20% - 20px); /* 3列に分割 */
  margin: 10px;
  overflow: hidden;
  border: 0px solid #ccc;
}

.image-tile img {
  width: 300px;
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
  max-width: 800px;
  background-color: #fff;
  border-radius: 5px;
}

.close:hover {
  color: #000;
}
</style>

<script>
export default {
  name: "LookPage",
  data() {
    return {
      images: [
        "/images/01.jpg",
        "/images/02.jpg",
        // 他の画像のパスを追加
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
