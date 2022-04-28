import { computed, ref } from "vue"

export const isClient = typeof window !== 'undefined'

const zIndex = ref(0)
const initialZIndex = ref(2000)

export const useZIndex = () => {
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}
