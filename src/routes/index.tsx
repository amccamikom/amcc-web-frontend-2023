// routes/index.ts

import { ElysiaApp } from "../app";
import { Layout } from "../lib/components/Layout";

const Hello = () => {
    return (
        <h1>Hello Mamah</h1>
    )
}

export default (app: ElysiaApp) => app.get("/", (
    <Layout>
        <p class={'text-red-800 text-lg'}>Hello</p>
    </Layout >
)
);
