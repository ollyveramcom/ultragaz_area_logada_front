# Área Logada - Ultragaz Energia Inteligente

Este projeto é referente ao frontend da área logada.

## 🥞 Stack

- [Next.js v14](https://nextjs.org/docs)
- [React v18](https://react.dev/reference/react)
- [Tailwindcss v3](https://tailwindcss.com/docs/installation)
- [Shadcn](https://ui.shadcn.com/docs)
- [React hook form v7](https://react-hook-form.com/get-started)
- [Zod v3](https://zod.dev/?id=basic-usage)
- [TypeScript](https://www.typescriptlang.org/docs/)

## ⚙️ Configurando o projeto

### ⚠️ Requisitos

Para executar o projeto localmente basta possuir o [docker](https://docs.docker.com/engine/install/) e [docker compose](https://docs.docker.com/compose/install/) instalados.

### 📝 Qualidade do código

Para manter uma qualidade aceitável do código escrito nesse projeto, utilizamos algumas ferramentas que auxiliam nessa parte: [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/) e [Lint Staged](https://github.com/lint-staged/lint-staged).

Nenhuma configuração é necessária, pois ao rodar o projeto, todas as dependências e configurações são feitas automaticamente.

## 🆙 Executando o projeto

```base
docker compose up -d
```

Após isso, o projeto estará executando no endereço [localhost:3000](http://localhost:3000).

## ✍️ Iniciando o desenvolvimento

Pelo fato do projeto estar sendo executado através de um container e com um volume configurado, qualquer alteração feita no código fonte será replicada automaticamente, sem necessidade de reiniciar o container.

## 👌 Boas práticas da equipe
- 🧼 Código limpo;
- 🤓 Commit dentro do [padrão](https://www.conventionalcommits.org/en/v1.0.0/#summary);
- 🤷 PR explicativa;
- 👀 Code Review construtivo;
- 🆒 Respeito e decência com os colegas.