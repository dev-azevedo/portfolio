<template>
  <header
    class="bg-slate-50/75 z-50 h-14 px-10 backdrop-blur-sm text-slate-800 border-b flex justify-between items-center fixed top-0 left-0 right-0 w-full"
  >
    <div class="w-14 h-14">
      <img src="@/assets/dev_icon_sem_fundo.png" alt="dev-azevedo" />
    </div>
    <nav>
      <ul class="flex gap-10">
        <li>
          <button
            type="button"
            class="hover:text-emerald-400 transition ease-in-out duration-300"
            @click="scrollToTop()"
          >
            <i class="bi bi-house"></i>
            Inicio
          </button>
        </li>
        <li>
          <a
            href="#about"
            class="hover:text-emerald-400 transition ease-in-out duration-300"
            ><i class="bi bi-mortarboard"></i> Sobre</a
          >
        </li>
        <li>
          <a
            href="#technologies"
            class="hover:text-emerald-400 transition ease-in-out duration-300"
            ><i class="bi bi-lightbulb"></i> Conhecimentos</a
          >
        </li>
        <li>
          <a
            href="#experienceWork"
            class="hover:text-emerald-400 transition ease-in-out duration-300"
            ><i class="bi bi-gear"></i> Experiência</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="hover:text-emerald-400 transition ease-in-out duration-300"
            ><i class="bi bi-folder2-open"></i> Projetos</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
</style>