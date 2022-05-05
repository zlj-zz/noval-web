<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { onMounted, ref, watch } from 'vue';

const footTop = ref<string>('30px')
const scrollHeight = ref(0)

function adjustFootTop(scrollHeight: number) {
  let innerHeight = window.innerHeight
  if (innerHeight - scrollHeight > 100) {
    let excessHeight = innerHeight - scrollHeight - 15
    footTop.value = `${excessHeight}px`
  } else if (innerHeight - scrollHeight < -20) {
    footTop.value = `30px`
  }
  console.log('scrollHeight:', scrollHeight, 'innerHeight:', innerHeight)
}

let timer = null
onMounted(() => {
  scrollHeight.value = document.body.scrollHeight
  adjustFootTop(scrollHeight.value)

  timer = setInterval(() => {
    scrollHeight.value = document.body.scrollHeight
  }, 200)

  watch(
    scrollHeight,
    (scrollHeight, oldHeight) => adjustFootTop(scrollHeight)
  )
})


</script>

<template>
  <div class="header">
    <!-- <img alt="Noval logo" src="./assets/logo.png" class="noval-logo" /> -->
    <span class="title-name">Noval</span>
  </div>
  <div class="content">
    <router-view v-slot="{ Component }">
      <component :is="Component" view-prop="value"></component>
    </router-view>
  </div>
  <div class="footer" :style="{ top: footTop }">
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
