// routes/index.ts

import { html } from "@elysiajs/html";
import { ElysiaApp } from "../app";
import { Layout } from "../lib/components/Layout";

export default (app: ElysiaApp) => app
    .use(html())
    .get("/", async (ctx) => {
        return (
            <Layout title="Hello">
                <p>Hellow</p>
            </Layout>
        );
    })
