import { html } from "@elysiajs/html";
import { tailwind } from "@gtramontina.com/elysia-tailwind";
import { Elysia } from "elysia";
import { autoroutes } from "elysia-autoroutes";
import { logDivisiInfo, logServerStatus } from "./lib/utils/logDivisiInfo";

export const app = new Elysia()
  .use(html())
  .use(
    autoroutes({
      routesDir: "./routes", // -> optional, defaults to './routes'
      generateTags: false, // -> optional, defaults to true
    }),
  )
  .use(
    tailwind({
      path: "/public/output.css",
      source: "./src/app.css",
      config: "./tailwind.config.ts",
      options: {
        minify: true,
        map: true,
        autoprefixer: false,
      },
    }),
  )
  .listen(3000, ({ port, hostname }) => {
    logServerStatus(hostname, port.toString());
    console.log();

    logDivisiInfo();
  });

export type ElysiaApp = typeof app;
