<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps({
  width: { type: String, default: "300px" },
});
</script>

<template>
  <ul class="mimicry-ul">
    <slot></slot>
  </ul>
</template>

<style>
.mimicry-ul {
  width: v-bind(width);
}
</style>
