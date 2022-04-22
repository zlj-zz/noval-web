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

  margin: auto;
  position: relative;
}

.mimicry-ul li {
  list-style-type: none;

  margin-top: 1.2rem;
  height: 2rem;

  text-align: left;
  color: rgb(57, 61, 61);

  border-radius: 5px;
  background: #d8d8d6;
  box-shadow: 20px 20px 60px #b6b7b5, -20px -20px 60px #f9faf7;
  border: 0px solid silver;
}

.mimicry-ul li:hover {
  background: #d0d0ce;
}
</style>
