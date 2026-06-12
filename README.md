# Portfólio — João Vitor Paiva

Portfólio profissional em React + TypeScript com Vite. Todas as informações estão hardcoded em `src/data/profile.ts`.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (inclui npm)

## Como executar

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  data/profile.ts      # Dados do portfólio (editar aqui)
  components/          # Seções da página
  App.tsx              # Composição das seções
  index.css            # Estilos globais
```

## Seções

- Hero — apresentação e destaques
- Sobre — resumo profissional
- Experiência — timeline de carreira
- Habilidades — stack técnica
- Formação — educação acadêmica
- Contato — e-mail, telefone, LinkedIn e GitHub
