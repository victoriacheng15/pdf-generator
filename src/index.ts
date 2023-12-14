import express, { Express } from "express";
import {generatePdf} from "./utils/generatePdf"

const PORT = 3000 || process.env.PORT;
const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/generate", async (req, res) => {
	const {url}: {url: string} = req.body;
	const pdf = await generatePdf(url)
	res.set({
		"Content-Type": "application/pdf",
	})
	res.send(pdf);
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
