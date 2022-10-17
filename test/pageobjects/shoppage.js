class shopPage{
    
    get myPDAnPhoneBtn(){ return $ ('li:nth-of-type(6) > .nav-link')}
    get textMessage(){ return $('div#content > h2')}
    get add2cart(){return $('#product-list .col:nth-of-type(1) .fa-shopping-cart')}
    get alrtMsg (){return $('div#alert > .alert.alert-dismissible.alert-success')}
    get shopngCart (){return $('div > a:nth-child(3)')}
        
    async shopPhnPDA(){
    await this.myPDAnPhoneBtn.click();
    await expect(textMessage).toHaveTextContaining('Phones & PDAs')
    await this.add2cart.click()
    await expect(alrtMsg).toHaveTextContaining('Success: You have added HTC Touch HD to your shopping cart!')
    await this.shopngCart.click()
    
 }

}module.exports = new shopPage();