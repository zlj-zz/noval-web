<script setup lang="ts">
import { defineProps, defineEmits, shallowRef, computed, ref } from "vue";
import MimicryBox from './MimicryBox.vue'

type TargetElement = HTMLInputElement | HTMLTextAreaElement;

const width = ref<string>('65%')
const height = ref<string>('3rem')

const input = shallowRef<HTMLInputElement>();
const _ref = computed(() => input.value);
// interface Props {
//   placeholder?: string;
//   bt_msg?: string;
// }

// const { placeholder = "Please input", bt_msg = "Search" } =
//   defineProps<Props>();

const props = defineProps({
  autocomplete: { type: String, default: "off" },
  placeholder: { type: String, default: "" },
  tabindex: { type: [String, Number] },
  showPassword: { type: Boolean, default: false },
  bt_msg: { type: String, default: "Bottom" },
});

// emits
const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const handleChange = (event: Event): void => {
  emit("change", (event.target as TargetElement).value);
};

const btClick = (): void => {
  console.log("change", _ref.value?.value);
  emit("change", _ref.value?.value || "");
};
</script>

<template>
  <mimicry-box :width="width" :height="height">
    <input ref="input" :type="showPassword ? 'password' : 'text'" :autocomplete="autocomplete"
      :placeholder="placeholder" :tabindex="tabindex" @change="handleChange" />
    <button class="input-bt" type="button" @click="btClick">
      {{ bt_msg }}
    </button>
  </mimicry-box>
</template>
