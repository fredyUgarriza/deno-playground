import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

const port = 3000;
const app = new expressive.App();
app.use(expressive.simpleLog());
app.use(expressive.bodyParser.json());
app.get("/api/todos", (_req, res: expressive.Response) => {
  res.json([{ name: "Buy some milk" }]);
});
// route with dynamic parameter
app.get("/api/user/{user_id}", (req: expressive.Request, res: expressive.Response) => {
  res.json([
    { id: req.params.user_id, name: "Jim Doe", phone: "12425323" },
  ]);
});
const server = await app.listen(port);
console.log("app listening on port " + server.port);
