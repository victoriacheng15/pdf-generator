import express, { Express } from "express";

const PORT = 3000 || process.env.PORT;
const app: Express = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
