<template>
  <section class="flex flex-col justify-center items-center">
    <Menu />
    <div class="px-10 lg:px-56">
      <div class="flex flex-col xl:flex-row items-center justify-center gap-10">
        <Me />

        <Contact class="mt-10 lg:mt-0 lg:pt-16 w-full lg:w-auto" />
      </div>
      <hr class="my-10" />
      <About />
      <hr class="my-10" />
      <Technologies />
      <hr class="my-10" />
      <ExperienceWork />
      <hr class="my-10" />
      <Projects />
    </div>
    <Footer />
  </section>
</template>

<script setup>
import Menu from "@/components/menu/Main.vue";
import Me from "@/components/me/Main.vue";
import Contact from "@/components/contact/Main.vue";
import About from "@/components/about/Main.vue";
import ExperienceWork from "@/components/experienceWork/Main.vue";
import Projects from "@/components/projects/Main.vue";
import Technologies from "@/components/technologies/Main.vue";
import Footer from "@/components/footer/Main.vue";
</script>


<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  transition: all 0.3s ease;
}
</style>
