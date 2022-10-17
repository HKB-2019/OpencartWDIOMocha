
class registerPage {

    get registerBtn() {return $ ('.dropdown-menu.dropdown-menu-right.show > li:nth-of-type(1) > .dropdown-item');}
    get myFirstName () {return $('input#input-firstname')}
    get myLastName () {return $('input#input-lastname')}
    get myEmail () {return $('input#input-email')}
    get myPasswrd() {return $('input#input-password')}
    get radioBtn () {return $('input#input-newsletter-yes')}
    get checkBox () {return $('input[name="agree"]')}
    get continueBtn () {return $('.btn.btn-primary')}

   async myRegister(randomfirstName,randomlastName,randomEmail,randomPassword){
   await this.registerBtn.click();
   await this.myFirstName.setValue(randomfirstName)
   await this.myLastName.setValue(randomlastName)
   await this.myEmail.setValue(randomEmail)
   await this.myPasswrd.setValue(randomPassword)
   await this.radioBtn.click();
   await this.checkBox.click();
   await this.continueBtn.click();


    } 

} 
module.exports = new registerPage();