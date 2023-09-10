// Puppeteer docs: https://deno.land/x/puppeteer

import puppeteer, { Browser } from "https://deno.land/x/puppeteer/mod.ts";
// If you want to use a local version of chrome, you can use exists
import { exists } from "https://deno.land/std/fs/exists.ts";

// Puppeteer requires a browser to run, so we need to launch one
// You can use a locally installed browser by specifying it or you
// can use a bundled version of firefox or chrome by leaving it blank

// If you want use a local version of chrome, this function will check
// the two most common locations for chrome on your system (only for Windows)
async function getChromePath(): Promise<string> {
  let chromePath = `C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe`;
  //check if default chromepath exists
  if ((await exists(chromePath)) == false) {
    chromePath =
      //  `C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe`;
      `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`;
  }
  return chromePath;
}

// I like to use a function to launch the browser to globally set the options
const createBrowser = async (): Promise<Browser> => {
  const browser = await puppeteer.launch({
    executablePath: chromePath, // remove this line to use bundled version of chrome
    ignoreDefaultArgs: ["--disable-extensions"], // ignores default arguments that puppeteer adds
    args: ["--no-zygote", "--no-sandbox"], // used to make the window open as a "new session"
    headless: true, // change to false if you want to see the browser
  });
  return browser;
};

// This is the main function that will run when you run the script

//basic example
const main = async () => {
  const browser = await createBrowser(); // launch browser
  const page = await browser.newPage(); // create new page
  await page.goto("https://www.google.com"); // go to google
  await page.screenshot({ path: "example.png" }); // take a screenshot and save it
  await browser.close(); // close browser
};

// to prevent chrome windows staying open, use try/catch/finally
const safeMain = async () => {
  const browser = await createBrowser();
  try {
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    await page.screenshot({ path: "example.png" });
  } catch (err) {
    console.log(err);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

// scrape a website and extract data
const scrape = async () => {
  const browser = await createBrowser();
  try {
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    page.evaluate(() => {
      const data = document.querySelector("body")?.innerHTML;
      console.log(data);
    });
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
};

// run the scraper
await scrape();

// grab a screenshot
await safeMain();
