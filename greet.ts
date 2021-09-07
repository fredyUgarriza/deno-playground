const greeting: string | null = `Hello, ${Deno.env.get("USER")}`;
console.log(greeting);
