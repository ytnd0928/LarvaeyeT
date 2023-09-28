<template>
  <!-- 画像タイル -->
  <ul>
    <li><img src="src/assets/looks/01.jpg" /></li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
    <li>box</li>
  </ul>
</template>
<style>
/* スタイル調整 */
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  width: 21%;
  margin: 2%;
  height: 180px;
  line-height: 180px;
  background: #c3c3c3;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      // images: Array.from(
      //   { length: 27 },
      //   (_, index) => String(index + 1).padStart(2, "0") + ".jpg"
      // ),
    };
  },
};
</script>
