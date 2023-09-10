// It is recommended to use a versioned URL, such as:
// import * as oak from "https://deno.land/x/oak@v12.6.1/mod.ts"
// In a production application, you probably want to use dep.ts instead.
// See https://deno.land/manual/examples/manage_dependencies for more info.
// For oak documentation, see https://deno.land/x/oak/mod.ts

import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

//
// Create a new router
const router = new Router();

router //return status
  .get("/api/status", (ctx: Context) => {
    ctx.response.body = { status: true };
  }) 
  //slug example
  .get("/api/:id", async (ctx: Context) => {
    const id = ctx.params.id;
    ctx.response.body = `your id is ${id}`;
  });

const app = new Application();

// Enable cors for all routes
app.use(oakCors());

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });