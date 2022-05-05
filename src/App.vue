<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

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
    <a href="https://github.com/zlj-zz/noval-web" target="_blank">https://github.com/zlj-zz/noval-web</a>
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
</style>
