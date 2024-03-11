/**
 * This file is the entrypoint for all Vercel Functions.
 */

import { app } from '../src/app';

export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
    console.log(request);
    return app.fetch(request);
}