<template>
  <div
    class="h-56 w-96 cursor-pointer border border-slate-400 rounded-md relative"
  >
    <div
      class="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-emerald-400/75 backdrop-blur-sm text-white rounded-md opacity-0 transition-all duration-300 ease-in hover:opacity-100"
    >
      <span
        class="w-full h-full text-center flex justify-center items-center p-3"
      >
        {{ props.description }}
      </span>
    </div>

    <div class="w-full h-full flex flex-col justify-center items-center">
      <img v-if="props.image" :src="props.image" alt="" class="w-28" />
      <span v-else><i class="bi bi-box text-8xl"></i></span>
      <span class="">
        {{ props.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  description: String,
  image: Image,
});
</script>

<style lang="scss" scoped></style>
