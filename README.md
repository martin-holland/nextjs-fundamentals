# Fundamentals of Next.js — coursework

Metropolia, *Fundamentals of Next.js (3 ects, nonstop)* — sections
**Next.js Basics**, **Styling in Next.js**, **API Routes in Next.js** and
**SSR and SSG**.

Built with [`create-next-app`](https://nextjs.org/docs/app/getting-started/installation)
(Next.js 16, App Router, JavaScript, ESLint, CSS Modules).

**Live demo:** https://nextjs-fundamentals-psi.vercel.app

## Task progression

Each task in the course is one commit, in order.

### Next.js Basics

| Task | Description | Commit |
| ---- | ----------- | ------ |
| 1 | Set up a Next.js project | [`c0866af`](https://github.com/martin-holland/nextjs-fundamentals/commit/c0866af5c03361781ac633f761bf579d7f8a2d57) |
| 2 | Creating a new page (`/about`) | [`ed77acb`](https://github.com/martin-holland/nextjs-fundamentals/commit/ed77acbe7c24f8713d894f703ba9f7f72d7871f2) |
| 3 | Add navigation with Next.js `Link` | [`c406cb9`](https://github.com/martin-holland/nextjs-fundamentals/commit/c406cb9b4b369c8a2fa2ac11097c12d45014ac63) |
| 4 | Customize home page | [`261b8e3`](https://github.com/martin-holland/nextjs-fundamentals/commit/261b8e30a828bc2a9c3a68e789b55d4dc418ae05) |
| 5 | Style home page with CSS Modules | [`943a7ac`](https://github.com/martin-holland/nextjs-fundamentals/commit/943a7ac8db7b6e876116edc9f8de1156dcd5f9b3) |
| 6 | Create a nested page (`/blog/post`) | [`849593c`](https://github.com/martin-holland/nextjs-fundamentals/commit/849593c33fb434c84557bb0b3484a49f24286189) |
| 7 | Create a `Navigation` component | [`9a28a49`](https://github.com/martin-holland/nextjs-fundamentals/commit/9a28a4934d5899d56dd1468eb1e2e2ec0c274a12) |

### Styling in Next.js

| Task | Description | Commit |
| ---- | ----------- | ------ |
| 1 | Styled `Title` using CSS Modules | [`c08a11f`](https://github.com/martin-holland/nextjs-fundamentals/commit/c08a11f460165d2ad0d7106cc14a6d72cbbb9463) |
| 2 | Hover `Button` with CSS Modules | [`5a29f44`](https://github.com/martin-holland/nextjs-fundamentals/commit/5a29f4407b549f856ff9ecc355fd93096ca58219) |
| 3 | Global styles setup | [`c2b4522`](https://github.com/martin-holland/nextjs-fundamentals/commit/c2b4522022710836ae957f51028ad50db455eddd) |
| 4 | Inline styled `Card` | [`79487ed`](https://github.com/martin-holland/nextjs-fundamentals/commit/79487ed21390c9cde57cd46547054851c29536c2) |
| 5 | `AppLayout` with mixed styles | [`2dde755`](https://github.com/martin-holland/nextjs-fundamentals/commit/2dde755df4ffd3769b7ffc267afe260c96899beb) |
| 6 | Tailwind setup & `Alert` | [`014d059`](https://github.com/martin-holland/nextjs-fundamentals/commit/014d0593d7c12e338acb255badb474c3c75a0fcc) |
| 7 | `ProfileCard` combining styles | [`d527037`](https://github.com/martin-holland/nextjs-fundamentals/commit/d5270372c631f8be6c43f7ef3dbc7c1bda3a3190) |

### API Routes in Next.js

| Task | Description | Commit |
| ---- | ----------- | ------ |
| 1 | `GET /api/profile` | [`73b7f96`](https://github.com/martin-holland/nextjs-fundamentals/commit/73b7f96e081929d9e6aecf1d53ca7880e7cdea16) |
| 2 | Dynamic `GET /api/product/[id]` | [`19297a0`](https://github.com/martin-holland/nextjs-fundamentals/commit/19297a095b10f6096d7f3e84e4b4c5fd230c0eea) |
| 3 | `POST /api/contact` | [`6a904ac`](https://github.com/martin-holland/nextjs-fundamentals/commit/6a904ac8d76d492bd058f5b937d9dd188d895538) |
| 4 | Contact field validation (400) | [`48338ce`](https://github.com/martin-holland/nextjs-fundamentals/commit/48338ce6344a0ee549ecb13b4ab5130f302ec7a3) |
| 5 | Status codes (201 / 400 / 401) | [`53265be`](https://github.com/martin-holland/nextjs-fundamentals/commit/53265beb1dafbe9c03253883016ea7a2e5257fe9) |
| 6 | Contact form frontend integration | [`4566578`](https://github.com/martin-holland/nextjs-fundamentals/commit/4566578c877ec83eaa170ee636a6fcb0197c6e96) |
| 7 | In-memory user manager API | [`b5b1a2b`](https://github.com/martin-holland/nextjs-fundamentals/commit/b5b1a2b6418bee2e83ca466363061dc4b6ab2782) |

### SSR and SSG

| Task | Description | Commit |
| ---- | ----------- | ------ |
| 1 | Build-time blog page (`/blog`) | [`0277b65`](https://github.com/martin-holland/nextjs-fundamentals/commit/0277b65d08549c56389b47835b9735582d9315f0) |
| 2 | Timestamp + ISR `revalidate` | [`f37bfa5`](https://github.com/martin-holland/nextjs-fundamentals/commit/f37bfa509c6cdbc24fea246fe057e764375f26f4) |
| 3 | Server-rendered profile (`/profile`) | [`83e1e09`](https://github.com/martin-holland/nextjs-fundamentals/commit/83e1e093d1329bb56feff05c797e08b18b12d4ca) |
| 4 | Observe SSR logs in the terminal | [`6d045e9`](https://github.com/martin-holland/nextjs-fundamentals/commit/6d045e9a45145a404a8088fd6aecfe58075c6af9) |
| 5 | Test ISR (`revalidate = 10`) | [`7b23e52`](https://github.com/martin-holland/nextjs-fundamentals/commit/7b23e522d5e1e35d0a56f7ee71fa46715249b1fd) |
| 6 | Hybrid rendering (`/hybrid`) | [`77eea91`](https://github.com/martin-holland/nextjs-fundamentals/commit/77eea912080cb7aff50f4a95503f4a0bf5ecc118) |

## Routes

| Route | File |
| ----- | ---- |
| `/` | `app/page.js` |
| `/about` | `app/about/page.js` |
| `/blog/post` | `app/blog/post/page.js` |
| `/contact` | `app/contact/page.js` |
| `/blog` | `app/blog/page.js` (ISR, revalidate 10s) |
| `/profile` | `app/profile/page.js` (SSR, no-store) |
| `/hybrid` | `app/hybrid/page.js` (cached + dynamic) |

### API endpoints

| Method | Route | File |
| ------ | ----- | ---- |
| GET | `/api/profile` | `app/api/profile/route.js` |
| GET | `/api/product/[id]` | `app/api/product/[id]/route.js` |
| POST | `/api/contact` | `app/api/contact/route.js` |
| GET, POST | `/api/users` | `app/api/users/route.js` |
| GET | `/api/users/[id]` | `app/api/users/[id]/route.js` |

Shared component: `app/components/Navigation.js`.
Styles: `app/home/home.module.css`, `app/components/Navigation.module.css`.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
