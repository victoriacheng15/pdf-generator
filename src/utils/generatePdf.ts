import puppeteer from "puppeteer";

export async function generatePdf(url: string) {
	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();
	await page.goto(url);
	const pdf: Buffer = await page.pdf({ format: "a4", printBackground: true });
	await browser.close();
	return pdf;
}
