<template>
  <div class="p-2 flex flex-row gap-2 lg:flex-col items-center justify-between">
    <button
      class="text-slate-800 hover:text-emerald-500"
      v-tooltip="{
        content: 'Linkedin',
        placement: isScreenSmallerThanLg ? 'bottom' : 'left',
      }"
    >
      <i class="bi bi-linkedin text-4xl"></i>
    </button>
    <button
      class="text-slate-800 hover:text-emerald-500"
      v-tooltip="{
        content: 'GitHub',
        placement: isScreenSmallerThanLg ? 'bottom' : 'left',
      }"
    >
      <i class="bi bi-github text-4xl"></i>
    </button>
    <button
      class="text-slate-800 hover:text-emerald-500"
      v-tooltip="{
        content: 'Email',
        placement: isScreenSmallerThanLg ? 'bottom' : 'left',
      }"
    >
      <i class="bi bi-envelope-fill text-4xl"></i>
    </button>
    <button
      class="text-slate-800 hover:text-emerald-500"
      v-tooltip="{
        content: 'Curriculo',
        placement: isScreenSmallerThanLg ? 'bottom' : 'left',
      }"
    >
      <i class="bi bi-file-earmark-richtext text-4xl"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const lgSize = 1024;

const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const isScreenSmallerThanLg = computed(() => {
  return windowWidth.value < lgSize;
});
</script>

<style lang="scss" scoped>
</style>