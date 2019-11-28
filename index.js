const puppeteer = require('puppeteer');


(async()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("http://nursajaya.com/", 
            {waitUntil: ['load', 'domcontentloaded']});
    await page.type('#s' , "tas ultah");
    await page.keyboard.press("Enter", 
            {waitUntil: ['load', 'domcontentloaded']})
    await page.screenshot({path:"screenshot1.png" , fullPage:true ,
            waitUntil: ['load' ,'domcontentloaded' ]})
    await browser.close()
    
})();