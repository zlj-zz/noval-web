<script setup lang="ts">
import { ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import MimicryList from 'components/MimicryList.vue'
import { searchFictions } from "../api"
import type { Fiction, FictionObj } from "../api"

const router = useRouter()
const route = useRoute()

const novelName = route.query.name as string

console.log(novelName)

const loading = ref<boolean>(true)
const width = ref<string>('55%')
const fictionList = ref<Fiction[]>([]);

// get fiction list
if (novelName != undefined)
  searchFictions(novelName as string).then((res) => {
    console.log(res)
    loading.value = false

    if (res === undefined) {

      fictionList.value.push({
        name: '',
        info: 'Not Found Any Result.',
        date: ' ',
        key: ''
      })
      return
    }

    const data: FictionObj = res.data
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        fictionList.value.push(data[key])

      }
    }
  })

const onClick = (key: string) => {
  if (key) {
    router.push({ path: '/Crawl', query: { key: key } })
  }
}
</script>

<template>
  <mimicry-list class="fiction-list" :width="width" v-loading="loading" element-loading-background="none">
    <li v-for="(item, idx) in fictionList" :key="idx" @click="onClick(item.key)">
      <span :title="item.name">{{ item.name }}</span>
      <span :title="item.info">{{ item.info }}</span>
      <span class="up-date">{{ item.date ? item.date : 'no date' }}</span>
    </li>
  </mimicry-list>
</template>

<style>
.fiction-list {
  margin-bottom: 2rem;
}

.fiction-list li span {
  width: 31%;
  margin-right: 2%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}

.up-date {
  width: 20%;
  text-align: right;
}
</style>
