class homePage {

    get myaccountBtn() { return $('float-end.nav > .list-inline .dropdown-toggle > .d-md-inline.d-none')}

      async myAccount() {
       await this.myaccountBtn.click();


      }
    }
    module.exports = new homePage ();
      
