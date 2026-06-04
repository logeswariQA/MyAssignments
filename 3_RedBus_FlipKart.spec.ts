import test, {chromium, webkit} from "@playwright/test";

//Test function for Redbus with Edge browser
test("Redbus", async() => {

//Launch browser, load context, open page 
const browser = await chromium.launch({headless:false,channel:"msedge"})
const context = await browser.newContext()
const page = await context.newPage()

//pass url
await page.goto("https://www.redbus.in")

//get title
const pageTitle = await page.title()
console.log("Page Title is " + pageTitle)

})


//Test function for Flipkart with Safari browser
test("Flipkart", async() => {

//Launch browser, load context, open page 
const browser = await webkit.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()

//pass url
await page.goto("https://www.flipkart.in")

//get title
const pageTitle = await page.title()
console.log("Page Title is " + pageTitle)

})