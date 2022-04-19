<template>
  <form action="" class="input-box">
    <input :placeholder="placeholder" />
    <button class="input-bt" type="button">{{ bt_msg }}</button>
  </form>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  placeholder?: string;
  bt_msg?: string;
}

const { placeholder, bt_msg = "Search" } = defineProps<Props>();
</script>

<style scoped>
.input-box {
  width: 65%;
  height: 3rem;

  margin: auto;
  color: cadetblue;
  border-radius: 10px;
  background: #d8d8d6;
  box-shadow: 20px 20px 60px #b6b7b5, -20px -20px 60px #f9faf7;
  position: relative;
}
.input-box * {
  font-size: 1rem;
  position: absolute;
  top: 50%;
  border-radius: 0.9rem;
}
.input-box input {
  width: 80%;
  height: 90%;
  border: 0px solid silver;
  outline: #d8d8d6;
  color: cadetblue;
  border-style: groove;
  background-color: #ebede8;

  border-top-right-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  transform: translate(-60%, -50%);
}
.input-bt {
  width: 15%;
  height: 90%;
  border: 0px solid silver;

  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
  transform: translate(210%, -50%);
}
</style>
