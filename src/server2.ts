import { serve } from 'https://deno.land/std@0.106.0/http/server.ts';
const s = serve({port: 8080});
for await (const req of s) {
    req.respond({body: 'Hello 👋'});
}
