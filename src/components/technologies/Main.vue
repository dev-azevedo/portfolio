<template>
  <section class="p-2 flex flex-col items-start justify-center py-24">
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
        :itemsToShow="1"
        :wrapAround="true"
        :transition="700"
        :autoplay="1500"
        :pauseAutoplayOnHover="true"
        :breakpoints="breakpoints"
      >
        <slide
          v-for="(technology, index) in technologiesBE"
          :key="index"
          class="md:m-2"
        >
          <CardTechnologies
            class="carousel__item"
            :key="technology.name"
            :name="technology.name"
            :image="technology.image"
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
        :itemsToShow="1"
        :itemsToScroll="1"
        :wrapAround="true"
        :transition="700"
        :autoplay="2000"
        :pauseAutoplayOnHover="true"
        :breakpoints="breakpoints"
      >
        <slide
          v-for="(technology, index) in technologiesFE"
          :key="index"
          class="md:m-2"
        >
          <CardTechnologies
            class="carousel__item"
            :key="technology.name"
            :name="technology.name"
            :image="technology.image"
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
        :itemsToScroll="1"
        :wrapAround="true"
        :transition="700"
        :autoplay="2500"
        :pauseAutoplayOnHover="true"
        :breakpoints="breakpoints"
      >
        <slide
          v-for="(technology, index) in technologiesDB"
          :key="index"
          class="md:m-2"
        >
          <CardTechnologies
            class="carousel__item"
            :key="technology.name"
            :name="technology.name"
            :image="technology.image"
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
    itemsToShow: 1,
    snapAlign: "center",
  },

  768: {
    itemsToShow: 2,
    snapAlign: "center",
  },

  920: {
    itemsToShow: 3,
    snapAlign: "center",
  },

  1280: {
    itemsToShow: 3,
    snapAlign: "center",
  },

  1536: {
    itemsToShow: 4,
    snapAlign: "center",
  },
});
</script>
