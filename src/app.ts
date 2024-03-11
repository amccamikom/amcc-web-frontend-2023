import { html } from "@elysiajs/html";
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
  .listen(3000, ({ port, hostname }) => {
    logServerStatus(hostname, port.toString());
    console.log();

    logDivisiInfo();
  });

export type ElysiaApp = typeof app;
