const shoppage = require ('..\\pageobjects\\shopPage');


describe('Shop Phones & PDAs', ()=>{
     it('verify user can shop for phones and PDAs successfully', async ()=>{
        await browser.url('/')
        shoppage.shopPhnPDA();
        browser.pause(10000)
    
   })
        
})