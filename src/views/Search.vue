<template>
  <bt-input @change="changeFn"/>
</template>

<script setup lang='ts'>
import BtInput from "../components/BtInput.vue";

const changeFn = (value: string) => {
  console.log(value);
};
</script>

