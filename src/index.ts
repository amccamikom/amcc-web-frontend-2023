import type { ElysiaApp } from "./app";

export default (app: ElysiaApp) => app.get("/", { hello: "world" });
