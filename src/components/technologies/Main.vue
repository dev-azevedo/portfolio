<template>
  <section
    id="technologies"
    class="p-2 flex flex-col items-start justify-center py-24"
  >
    <h2 class="text-4xl mb-5 font-bold">
      <i class="bi bi-lightbulb"></i> Conhecimentos
    </h2>

    <div class="mt-10 w-full text-start">
      <h3 class="text-xl mb-5"><i class="bi bi-braces"></i> Back-end</h3>

      <div
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-cols-max gap-6 w-full"
      >
        <CardTechnologies
          v-for="technology in technologiesBackend"
          :key="technology.name"
          :name="technology.name"
          :description="technology.description"
        />
      </div>
    </div>

    <hr class="w-full mt-10 border-emerald-400" />

    <div class="mt-10 w-full text-start">
      <h3 class="text-xl mb-5"><i class="bi bi-code"></i> Front-end</h3>

      <div
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-cols-max gap-6 w-full"
      >
        <CardTechnologies
          v-for="technology in technologiesFrontend"
          :key="technology.name"
          :name="technology.name"
          :description="technology.description"
        />
      </div>
    </div>

    <hr class="w-full mt-10 border-emerald-400" />

    <div class="mt-10 w-full text-start">
      <h3 class="text-xl mb-5">
        <i class="bi bi-database-fill"></i> Banco de dados
      </h3>

      <div
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-cols-max gap-6 w-full"
      >
        <CardTechnologies
          v-for="technology in technologiesDb"
          :key="technology.name"
          :name="technology.name"
          :description="technology.description"
        />
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";
import CardTechnologies from "../cardTechnologies/Main.vue";

const technologiesBackend = ref([
  { name: "C#", description: "Projeto x" },
  { name: ".Net", description: "Projeto x" },
  { name: "EntityFramework", description: "Projeto x" },
  { name: "IdentityFramework", description: "Projeto x" },
  { name: "Node Js", description: "Projeto x" },
  { name: "TypeScript", description: "Projeto x" },
]);

const technologiesFrontend = ref([
  { name: "Javascript", description: "Projeto x" },
  { name: "Vue Js", description: "Projeto x" },
  { name: "React Js", description: "Projeto x" },
  { name: "React Native", description: "Projeto x" },
  { name: "TypeScript", description: "Projeto x" },
]);

const technologiesDb = ref([
  {
    name: "MySql",
    description:
      "É um sistema de gerenciamento de banco de dados relacional de código aberto. É utilizado para armazenar e gerenciar dados de maneira eficiente, oferecendo suporte a operações SQL robustas.",
  },
  {
    name: "SqlServer",
    description:
      "SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft. No Projeto x, SQL Server é utilizado para garantir alta disponibilidade e segurança dos dados empresariais.",
  },
  { name: "PostgreSql", description: "Projeto x" },
  { name: "Sqlite", description: "Projeto x" },
]);
</script>