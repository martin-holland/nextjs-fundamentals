# Fundamentals of Next.js — coursework

Metropolia, *Fundamentals of Next.js (3 ects, nonstop)*, section **Next.js Basics**.

Built with [`create-next-app`](https://nextjs.org/docs/app/getting-started/installation)
(Next.js 16, App Router, JavaScript, ESLint, CSS Modules).

## Task progression

Each task in the course is one commit, in order:

| Task | Description | Commit |
| ---- | ----------- | ------ |
| 1 | Set up a Next.js project | [`c0866af`](https://github.com/martin-holland/nextjs-fundamentals/commit/c0866af5c03361781ac633f761bf579d7f8a2d57) |
| 2 | Creating a new page (`/about`) | [`ed77acb`](https://github.com/martin-holland/nextjs-fundamentals/commit/ed77acbe7c24f8713d894f703ba9f7f72d7871f2) |
| 3 | Add navigation with Next.js `Link` | [`c406cb9`](https://github.com/martin-holland/nextjs-fundamentals/commit/c406cb9b4b369c8a2fa2ac11097c12d45014ac63) |
| 4 | Customize home page | [`261b8e3`](https://github.com/martin-holland/nextjs-fundamentals/commit/261b8e30a828bc2a9c3a68e789b55d4dc418ae05) |
| 5 | Style home page with CSS Modules | [`943a7ac`](https://github.com/martin-holland/nextjs-fundamentals/commit/943a7ac8db7b6e876116edc9f8de1156dcd5f9b3) |
| 6 | Create a nested page (`/blog/post`) | [`849593c`](https://github.com/martin-holland/nextjs-fundamentals/commit/849593c33fb434c84557bb0b3484a49f24286189) |
| 7 | Create a `Navigation` component | [`9a28a49`](https://github.com/martin-holland/nextjs-fundamentals/commit/9a28a4934d5899d56dd1468eb1e2e2ec0c274a12) |

## Routes

| Route | File |
| ----- | ---- |
| `/` | `app/page.js` |
| `/about` | `app/about/page.js` |
| `/blog/post` | `app/blog/post/page.js` |

Shared component: `app/components/Navigation.js`.
Styles: `app/home/home.module.css`, `app/components/Navigation.module.css`.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
