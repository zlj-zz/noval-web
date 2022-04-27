<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import MimicryBox from 'components/MimicryBox.vue';
import ProgressBar from 'components/ProgressBar.vue';
import { crawlFiction, getCrawlStatus, downloadFiction } from '../api';
import { CrawlReturn, CrawlStatus } from '../api';

const progress = ref<number>(0)
const msg = ref<string>('')
const total = ref<number>(0)
const isFetch = ref<boolean>(false)

const route = useRoute()
const key = route.query.key as string
console.log(key)

if (!key)
  msg.value = 'Need a key of fiction.'
else
  crawlFiction(key).then(res => {
    const data: CrawlReturn = res.data
    console.log(data)
    if (data) {
      console.log('download request success.')

      total.value = data.total
      msg.value = 'Downloading ...'

      // get crawl status
      const timer = setInterval(() => {
        getCrawlStatus(key).then(res => {
          const curr = (res.data as CrawlStatus).current
          console.log(curr)
          if (curr == -1) {
            window.clearInterval(timer)
          } else if (curr != -200) {
            progress.value = curr / total.value * 100
            // console.log(progress.value)
          } else {
            progress.value = 100
            isFetch.value = true
            msg.value = 'Downloaded'
            window.clearInterval(timer)
          }
        })
      }, 200)
    }
  })

const onClick = () => {
  downloadFiction(key)
}
</script>

<template>
  <div v-if="isFetch">
    <p>The fiction can be downloaded. Please click the button below.</p>
    <br />
    <input class="dl" type="button" value="Download" @click="onClick">
  </div>
  <div v-else>
    <mimicry-box width="70%" height="2rem">
      <progress-bar class="bar-custom" width="95%" radius="0.5rem" :progress="progress"></progress-bar>
    </mimicry-box>
    {{ msg }}
  </div>
</template>

<style>
.bar-custom {
  transform: translate(2.5%, 30%);
}

.dl {
  width: 14rem;
  height: 2.5rem;
  border: 0px solid silver;

  border-radius: 0.5rem;
}
</style>
