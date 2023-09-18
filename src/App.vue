<template>
  <div id="app">
    <!-- <TitlePanel title="123" updateTime="2023-09-14 21:26:05" uploadTime="2023-09-14 21:26:05" />
     -->
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
