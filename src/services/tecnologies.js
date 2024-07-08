import csharpImg from "@/assets/csharp.png";
import dotnetImg from "@/assets/dotnet.png";
import entityFrameworkImg from "@/assets/entityFramework.png";
import identityFrameworkImg from "@/assets/identityFramework.png";
import nodejsImg from "@/assets/nodejs.png";
import prismaImg from "@/assets/prisma.png";
import typescriptImg from "@/assets/typescript.png";
import jwtImg from "@/assets/jwt.png";
import pythonImg from "@/assets/python.png";

import htmlImg from "@/assets/html.png";
import cssImg from "@/assets/css.png";
import javascriptImg from "@/assets/javascript.png";
import vuejsImg from "@/assets/vuejs.png";
import reactjsImg from "@/assets/reactjs.png";
import reactnativeImg from "@/assets/reactNative.png";
import bootstrapImg from "@/assets/bootstrap.png";
import tailwindImg from "@/assets/tailwind.png";
import styledComponentsImg from "@/assets/styledComponents.png";
import axiosImg from "@/assets/axios.png";

export const technologiesBackend = [
  {
    name: "C#",
    description:
      "Linguagem de programação desenvolvida pela Microsoft, usada principalmente para desenvolver aplicativos desktop, web e móveis. É conhecida por sua sintaxe clara e recursos robustos para desenvolvimento de software.",
    image: csharpImg,
  },
  {
    name: ".Net",
    description:
      ".NET (DotNet) é uma plataforma de desenvolvimento de software da Microsoft que suporta a criação de uma variedade de aplicativos, desde web e desktop até móveis e serviços na nuvem, proporcionando alta performance e escalabilidade.",
    image: dotnetImg,
  },
  {
    name: "EntityFramework",
    description:
      "Ferramenta ORM (Object-Relational Mapping) para .NET que facilita o acesso e manipulação de dados em um banco de dados, simplificando operações CRUD e eliminando a necessidade de escrever SQL manualmente.",
    image: entityFrameworkImg,
  },
  {
    name: "IdentityFramework",
    description:
      "Sistema de autenticação e autorização para aplicativos .NET, fornecendo uma maneira segura e fácil de gerenciar identidades de usuários, incluindo login, registro e controle de acesso.",
    image: identityFrameworkImg,
  },
  {
    name: "Python",
    description:
      "Linguagem de desenvolvimento web, ciência de dados, inteligência artificial, automação e mais. Sua vasta coleção de bibliotecas e frameworks, como Django e Flask, facilita o desenvolvimento rápido e eficiente de aplicações robustas.",
    image: pythonImg,
  },
  {
    name: "Node.js",
    description:
      "Node.js é um ambiente de execução JavaScript no lado do servidor, permitindo a construção de APIs rápidas e escaláveis com sua natureza assíncrona e baseada em eventos.",
    image: nodejsImg,
  },
  {
    name: "Prisma",
    description:
      "Prisma é um ORM (Object-Relational Mapping) moderno e poderoso para Node.js e TypeScript. Ele facilita o trabalho com bancos de dados, proporcionando uma experiência de desenvolvimento intuitiva e segura.",
    image: prismaImg,
  },
  {
    name: "TypeScript",
    description:
      "TypeScript é um superconjunto tipado de JavaScript que compila para JavaScript puro, oferecendo recursos como tipagem estática e interfaces que ajudam a melhorar a manutenção do código e a detecção de erros.",
    image: typescriptImg,
  },
  {
    name: "JWT",
    description:
      "JWT (JSON Web Token) é um padrão aberto para a criação de tokens de acesso que permitem a autenticação e troca segura de informações entre partes. É frequentemente usado para autenticação de usuários em aplicações web.",
    image: jwtImg,
  },
];

export const technologiesFrontend = [
  {
    name: "HTML",
    description:
      "HTML (HyperText Markup Language) é a linguagem de marcação padrão para criação de páginas web, permitindo a estruturação de conteúdo de forma hierárquica e semântica.",
    image: htmlImg,
  },
  {
    name: "CSS",
    description:
      "CSS (Cascading Style Sheets) é uma linguagem de estilos usada para descrever a apresentação de documentos HTML, permitindo a aplicação de layouts, cores, fontes e outros elementos visuais.",
    image: cssImg,
  },
  {
    name: "JavaScript",
    description:
      "Linguagem de programação essencial para o desenvolvimento web, permitindo a criação de páginas interativas e dinâmicas em navegadores.",
    image: javascriptImg,
  },
  {
    name: "Vue.js",
    description:
      "Framework JavaScript progressivo para a construção de interfaces de usuário, oferecendo uma arquitetura baseada em componentes e ferramentas para gerenciar o estado do aplicativo de maneira eficiente.",
    image: vuejsImg,
  },
  {
    name: "React.js",
    description:
      "Biblioteca JavaScript para a construção de interfaces de usuário, focada na criação de componentes de UI reutilizáveis e na renderização eficiente para proporcionar uma experiência de usuário rápida e responsiva.",
    image: reactjsImg,
  },
  {
    name: "React Native",
    description:
      "Biblioteca JavaScript que permite o desenvolvimento de aplicativos móveis nativos usando React, possibilitando a criação de aplicativos que funcionam tanto em iOS quanto em Android a partir de uma única base de código.",
    image: reactnativeImg,
  },
  {
    name: "TypeScript",
    description:
      "TypeScript é um superconjunto tipado de JavaScript que compila para JavaScript puro, oferecendo vantagens como a tipagem estática e a depuração avançada, o que ajuda a melhorar a manutenção e a robustez do código.",
    image: typescriptImg,
  },
  {
    name: "Bootstrap",
    description:
      "Framework de código aberto para desenvolvimento front-end, que fornece estilos CSS e componentes JavaScript prontos para uso, facilitando a criação de layouts responsivos e consistentes.",
    image: bootstrapImg,
  },
  {
    name: "Tailwind",
    description:
      "Framework de utilitários CSS que permite a criação rápida de designs customizados sem sair do seu HTML, proporcionando uma abordagem altamente customizável e produtiva.",
    image: tailwindImg,
  },
  {
    name: "Styled Components",
    description:
      "Biblioteca para React e React Native que permite escrever CSS no JavaScript, facilitando o escopo e a organização dos estilos em componentes.",
    image: styledComponentsImg,
  },
  {
    name: "Axios",
    description:
      "Axios é uma biblioteca JavaScript utilizada para fazer requisições HTTP de forma simples e intuitiva, facilitando a comunicação com APIs RESTful e o gerenciamento de respostas e erros.",
    image: axiosImg,
  },
];

export const technologiesDb = [
  {
    name: "MySQL",
    description:
      "Sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua eficiência e capacidade de lidar com grandes volumes de dados e altas cargas de trabalho.",
  },
  {
    name: "SQL Server",
    description:
      "Sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft, oferecendo recursos avançados de segurança, escalabilidade e suporte a operações empresariais críticas.",
  },
  {
    name: "PostgreSQL",
    description:
      "Sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua conformidade com os padrões SQL e extensibilidade, permitindo lidar com grandes volumes de dados e consultas complexas.",
  },
  {
    name: "SQLite",
    description:
      "Banco de dados relacional embutido, famoso por sua leveza e simplicidade. É amplamente utilizado em desenvolvimento e testes devido à sua natureza autônoma e sem necessidade de configuração.",
  },
  {
    name: "MongoDB",
    description:
      "Banco de dados NoSQL orientado a documentos, que armazena dados em formato JSON-like, permitindo alta flexibilidade e escalabilidade para aplicações modernas.",
  },
];
