<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Search from "./views/Search.vue";
import NovelList from "./views/NovelList.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view v-slot="{ Component }"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin-top: 110px;
  text-align: center;
  background: #d8d8d6;
}
</style>
