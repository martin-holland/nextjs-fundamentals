import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root. Without this, Turbopack walks up looking for a
  // lockfile and finds ~/package-lock.json, which is unrelated to this project.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
