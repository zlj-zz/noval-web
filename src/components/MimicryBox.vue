<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  width: { type: String, default: '50%' },
  height: { type: String, default: '2rem' }
});

</script>

<template>
  <div class="mimicry-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.mimicry-box {
  width: v-bind(width);
  height: v-bind(height);

  position: relative;
  text-align: center;
  margin: 0 auto;
  color: cadetblue;
  border-radius: 10px;
  background: #d8d8d6;
  box-shadow: 20px 20px 60px #b6b7b5, -20px -20px 60px #f9faf7;
}
</style>
