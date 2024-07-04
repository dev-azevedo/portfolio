<template>
  <footer
    class="w-full bg-slate-300 p-5 gap-10 flex flex-col lg:flex-row justify-between items-center"
  >
    <div class="w-44 h-44">
      <img src="@/assets/dev_icon_sem_fundo.png" alt="dev-azevedo" />
    </div>
    <div>Desenvolvido por Jhonatan Azevedo</div>

    <Contact />
  </footer>
</template>

<script setup>
import Contact from "@/components/contact/Main.vue";
</script>

<style lang="scss" scoped>
</style>