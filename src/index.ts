import express, { Express } from "express";
import puppeteer from "puppeteer";

const PORT = 3000 || process.env.PORT;
const app: Express = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/generate", async (req, res) => {
	const {url}: {url: string} = req.body;
	const browser = await puppeteer.launch({headless: "new"});
	const page = await browser.newPage();
	await page.goto(url);
	const pdf: Buffer = await page.pdf({ format: "a4", printBackground: true });
	await browser.close();
	res.set({
		"Content-Type": "application/pdf",
	})
	res.send(pdf);
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
