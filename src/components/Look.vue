<template>
  <body>
    <!-- <div class="title">Under Construction</div> -->
    <div class="image-tile">
      <img src="/images/01.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/02.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/03.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/04.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/05.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/06.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/07.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/08.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/09.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/10.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/11.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/12.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/13.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/14.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/15.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/16.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/17.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/18.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/19.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/20.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/21.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/22.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/23.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/24.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/25.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/26.jpg" />
    </div>
    <div class="image-tile">
      <img src="/images/27.jpg" />
    </div>
  </body>
</template>
<style>
title {
  margin-top: 25px;
  text-align: center;
  color: #ccc;
}
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
  width: 100%;
  height: auto;
  display: block;
}
</style>

<script>
export default {
  data() {
    return { imagePath: "src/assets/images/02.jpg" };
  },
};
</script>
