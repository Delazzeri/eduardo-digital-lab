<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,50:6366f1,100:06b6d4&height=190&section=header&text=Eduardo%20Digital%20Lab&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Landing%20page%20profissional%20em%20p%C3%A1gina%20%C3%BAnica&descSize=17&descAlignY=60" alt="Eduardo Digital Lab" />

<img src="https://skillicons.dev/icons?i=vite,react,ts,tailwind&theme=dark" height="42" alt="Stack" />

<br/><br/>

<a href="https://eduardo-digital-lab.vercel.app"><img src="https://raw.githubusercontent.com/Delazzeri/Delazzeri/main/assets/btn-demo.svg" height="36" alt="Ver site" /></a>

</div>

<br/>

## Sobre

Site pessoal em página única para apresentação profissional: quem sou, projetos, serviços de marketing, leituras e certificados, ferramentas, trajetória e contato.

> Projeto pessoal, usado como peça de portfólio.

## Seções

| Seção | Conteúdo |
| --- | --- |
| Hero | Apresentação e chamadas principais |
| Sobre | Trajetória e competências |
| Projetos | Projetos de desenvolvimento |
| Marketing | Trabalhos de marketing e design: ebook, feed de Instagram, identidade visual e banners |
| Leituras e Certificados | Linguagens de programação, livros, marketing e design e formação complementar |
| Ferramentas | Agrupadas por categoria: programação, Adobe, Office, Google Workspace e IA |
| Timeline | Linha do tempo da trajetória |
| Diferencial | Engenharia de produto, design de interfaces, arquitetura e código, perfil multidisciplinar |
| Contato | Formas de falar comigo |

## Stack

| Camada | Escolha |
| --- | --- |
| Build | Vite com plugin React SWC |
| Linguagem | TypeScript |
| Interface | React 18 e shadcn/ui (Radix UI) |
| Estilo | Tailwind CSS |
| Animação | Framer Motion |
| Rotas | React Router |
| Dados no cliente | TanStack Query |
| Testes | Vitest e Testing Library |
| Deploy | Vercel |

## Estrutura

```
src/
  components/   # seções da página (Hero, Sobre, Projetos, Marketing...) e ui/ do shadcn
  pages/        # Index e NotFound
  hooks/        # hooks compartilhados
  lib/          # utilitários
  test/         # configuração e testes
public/         # imagens e arquivos estáticos
```

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:8080](http://localhost:8080).

## Scripts

| Comando | Ação |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | build de produção |
| `npm run build:dev` | build em modo de desenvolvimento |
| `npm run preview` | prévia do build local |
| `npm run lint` | ESLint |
| `npm run test` / `npm run test:watch` | testes com Vitest |
