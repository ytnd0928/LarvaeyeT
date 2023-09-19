<template>
  <v-app>
    <v-main>
      <Header/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'; // ヘッダーコンポーネントのパスを指定

export default {
  name: 'App',

  components: {
  Header,
  // 他のコンポーネントもここに追加できます
},


  data: () => ({
    //
  }),
}
</script>
