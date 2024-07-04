<template>
  <div class="h-56 cursor-pointer border border-slate-400 rounded-md relative">
    <div
      class="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-emerald-400/75 text-white rounded-md opacity-0 transition-all duration-300 ease-in hover:opacity-100"
    >
      {{ props.description }}
    </div>

    <div class="w-full h-full flex justify-center items-center">
      {{ props.name }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  description: String,
});
</script>

<style lang="scss" scoped>
</style>