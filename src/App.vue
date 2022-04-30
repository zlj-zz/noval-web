<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Search from "./views/Search.vue";
import NovelList from "./views/NovelList.vue";
</script>

<template>
  <div class="header">
    <!-- <img alt="Noval logo" src="./assets/logo.png" class="noval-logo" /> -->
    <span class="title-name">Noval</span>
  </div>
  <div class="content">
    <router-view v-slot="{ Component }"></router-view>
  </div>
  <div class="footer">
    https://github.comt/zlj-zz/noval-web
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  text-align: center;
  background: #d8d8d6;
}

.header {
  /* background-color: rgb(43, 42, 42); */
  padding-top: 30px;
  padding-bottom: 30px;
}

.content {
  margin-top: 40px;
}

.footer {
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  text-align: center;
}

.noval-logo {
  width: 10rem;
}

.title-name {
  font-size: 10rem;
  font-weight: bold;
}
</style>
