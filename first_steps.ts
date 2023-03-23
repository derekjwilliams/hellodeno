import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
});

// console.log("Welcome to Deno!");

// const res = await fetch("https://deno.land");
// const body = await res.text();
// console.log(body);