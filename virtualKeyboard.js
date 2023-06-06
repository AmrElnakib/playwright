const {chromium} = require('playwright');
const { off } = require('process');

(async()=> 

{   // anonymous arrow function


//function code

// launching browser
const browser = await chromium.launch({headless:false, slowMo:1500});

// creating a page inside browser
const page = await browser.newPage();

//navigate to website
await page.goto('https://the-internet.herokuapp.com/key_presses');

await page.click('input');

await page.keyboard.type('one cannot simply exit vim');

await page.keyboard.down('Shift');

for (let iterator=0; iterator<'exit vim'.length; iterator++) {

await page.keyboard.press('ArrowLeft');


}

await page.keyboard.up('Shift');
await page.keyboard.press('Backspace');
await page.keyboard.type('give it a try');

//close browser
await browser.close();


}) (); 