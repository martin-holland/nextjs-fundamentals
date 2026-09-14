// Task 1 of the SSR/SSG section names this path (app/pages/page.js) while
// Task 2 asks for the blog page at app/blog/page.js. The implementation lives
// in app/blog/page.js; this route re-exports it so both paths work.
export { default } from "../blog/page";
