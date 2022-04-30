<template>
  <bt-input @change="changeFn" autocomplete="on" placeholder="Fiction name you want" bt_msg="Search" />
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
import BtInput from "components/BtInput.vue";

const router = useRouter();

const changeFn = (value: string) => {
  console.log('search:', value)
  router.push({ name: 'List', query: { name: value } })
};
</script>

