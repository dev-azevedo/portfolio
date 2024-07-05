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
  {
    name: "C#",
    description:
      "C# é uma linguagem de programação desenvolvida pela Microsoft, usada principalmente para desenvolver aplicativos desktop, web e móveis. É conhecida por sua sintaxe clara e recursos robustos para desenvolvimento de software.",
  },
  {
    name: ".Net",
    description:
      ".NET(DotNet) é uma plataforma de desenvolvimento de software da Microsoft que suporta a criação de uma variedade de aplicativos, desde web e desktop até móveis e serviços na nuvem, proporcionando alta performance e escalabilidade.",
  },
  {
    name: "EntityFramework",
    description:
      "EntityFramework é uma ferramenta ORM (Object-Relational Mapping) para .NET(DotNet) que facilita o acesso e manipulação de dados em um banco de dados, simplificando operações CRUD e eliminando a necessidade de escrever SQL manualmente.",
  },
  {
    name: "IdentityFramework",
    description:
      "IdentityFramework é um sistema de autenticação e autorização para aplicativos .NET(DotNet), fornecendo uma maneira segura e fácil de gerenciar identidades de usuários, incluindo login, registro e controle de acesso.",
  },
  {
    name: "Node Js",
    description:
      "Node.js é um ambiente de execução JavaScript no lado do servidor, permitindo a construção de APIs rápidas e escaláveis com sua natureza assíncrona e baseada em eventos.",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript é um superconjunto tipado de JavaScript que compila para JavaScript puro, oferecendo recursos como tipagem estática e interfaces que ajudam a melhorar a manutenção do código e a detecção de erros.",
  },
]);

const technologiesFrontend = ref([
  {
    name: "Javascript",
    description:
      "JavaScript é uma linguagem de programação essencial para o desenvolvimento web, permitindo a criação de páginas interativas e dinâmicas em navegadores.",
  },
  {
    name: "Vue Js",
    description:
      "Vue.js é um framework JavaScript progressivo para a construção de interfaces de usuário, oferecendo uma arquitetura baseada em componentes e ferramentas para gerenciar o estado do aplicativo de maneira eficiente.",
  },
  {
    name: "React Js",
    description:
      "React.js é uma biblioteca JavaScript para a construção de interfaces de usuário, focada na criação de componentes de UI reutilizáveis e na renderização eficiente para proporcionar uma experiência de usuário rápida e responsiva.",
  },
  {
    name: "React Native",
    description:
      "React Native é uma biblioteca JavaScript que permite o desenvolvimento de aplicativos móveis nativos usando React, possibilitando a criação de aplicativos que funcionam tanto em iOS quanto em Android a partir de uma única base de código.",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript é um superconjunto tipado de JavaScript que compila para JavaScript puro, oferecendo vantagens como a tipagem estática e a depuração avançada, o que ajuda a melhorar a manutenção e a robustez do código.",
  },
]);

const technologiesDb = ref([
  {
    name: "MySql",
    description:
      "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua eficiência e capacidade de lidar com grandes volumes de dados e altas cargas de trabalho.",
  },
  {
    name: "SqlServer",
    description:
      "SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft, oferecendo recursos avançados de segurança, escalabilidade e suporte a operações empresariais críticas.",
  },
  {
    name: "PostgreSql",
    description:
      "PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua conformidade com os padrões SQL e extensibilidade, permitindo lidar com grandes volumes de dados e consultas complexas.",
  },
  {
    name: "Sqlite",
    description:
      "SQLite é um banco de dados relacional embutido, famoso por sua leveza e simplicidade. É amplamente utilizado em desenvolvimento e testes devido à sua natureza autônoma e sem necessidade de configuração.",
  },
]);
</script>