<template>
  <section
    id="technologies"
    class="p-2 flex flex-col items-start justify-center py-24"
  >
    <h2
      class="text-4xl mb-5 font-bold"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <i class="bi bi-lightbulb"></i> Conhecimentos
    </h2>

    <div
      class="mt-10 w-full text-start"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <h3 class="text-xl mb-5"><i class="bi bi-braces"></i> Back-end</h3>

      <carousel
        :items-to-scroll="1.5"
        :wrap-around="true"
        :pause-autoplay-on-hover="true"
        :transition="700"
        :breakpoints="breakpoints"
      >
        <slide
          v-for="technology in technologiesBE"
          :key="technology.name"
          class="m-2"
        >
          <CardTechnologies
            :key="technology.name"
            :name="technology.name"
            :description="technology.description"
          />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>

    <hr
      class="w-full mt-10 border-emerald-400"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    />

    <div
      class="mt-10 w-full text-start"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <h3 class="text-xl mb-5"><i class="bi bi-code"></i> Front-end</h3>

      <carousel
        :items-to-scroll="1.5"
        :wrap-around="true"
        :pause-autoplay-on-hover="true"
        :transition="700"
        :breakpoints="breakpoints"
      >
        <slide
          v-for="technology in technologiesFE"
          :key="technology.name"
          class="m-2"
        >
          <CardTechnologies
            :key="technology.name"
            :name="technology.name"
            :description="technology.description"
          />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>

    <hr
      class="w-full mt-10 border-emerald-400"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    />

    <div
      class="mt-10 w-full text-start"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <h3 class="text-xl mb-5">
        <i class="bi bi-database-fill"></i> Banco de dados
      </h3>

      <carousel
        :items-to-scroll="1.5"
        :wrap-around="true"
        :pause-autoplay-on-hover="true"
        :transition="700"
        :breakpoints="breakpoints"
      >
        <slide
          v-for="technology in technologiesDB"
          :key="technology.name"
          class="m-2"
        >
          <CardTechnologies
            :key="technology.name"
            :name="technology.name"
            :description="technology.description"
          />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import CardTechnologies from "../cardTechnologies/Main.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import {
  technologiesBackend,
  technologiesFrontend,
  technologiesDb,
} from "@/services/tecnologies";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});

const technologiesBE = technologiesBackend;
const technologiesFE = technologiesFrontend;
const technologiesDB = technologiesDb;

const breakpoints = reactive({
  640: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },

  768: {
    itemsToShow: 3,
    snapAlign: "start",
  },

  1024: {
    itemsToShow: 2,
    snapAlign: "start",
  },

  1280: {
    itemsToShow: 3,
    snapAlign: "start",
  },

  1536: {
    itemsToShow: 4,
    snapAlign: "start",
  },
});
</script>
