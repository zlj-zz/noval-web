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
}
</style>
