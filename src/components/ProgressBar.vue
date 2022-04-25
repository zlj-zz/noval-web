<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  progress: {
    type: Number,
    default: 0
  },
  width: { type: String, default: '500px' },
  height: { type: String, default: '20px' },
  radius: { type: String }
})
</script>

<template>
  <!-- <section> -->
  <div class="progress-bar">
    <div class="mo" :style="{ '--progress': -progress + 100 + '%' }"></div>
    <div class="line-box">
      <i></i>
      <i class="line-item"></i>
      <i class="line-item"></i>
      <i class="line-item"></i>
      <i></i>
    </div>
  </div>
  <!-- </section> -->
</template>

<style scoped>
.progress-bar {
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(radius);
  overflow: hidden;
  background: linear-gradient(270deg, #FF4D4D 0%, #FADB6D 55.73%, #70FAC8 100%);
}

.mo {
  position: absolute;
  z-index: 1;
  right: 0;
  height: 100%;
  width: var(--progress, 0%);
  background-color: #ccc;
}

.line-box {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.line-box .line-item {
  width: 1px;
  height: 100%;
  background-color: #fff;
}
</style>

