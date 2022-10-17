describe('Reset Paasword', ()=>{ 
 it.only('verify user can reset password', async ()=>{
    await browser.url('/')
    await expect(browser).toHaveTitle('Your Store')
    const myAccount = await $('.float-end.nav > .list-inline .dropdown-toggle > .d-md-inline.d-none').click()
    const logIn = await $('.dropdown-menu.dropdown-menu-right.show > li:nth-of-type(2) > .dropdown-item').click()
    const forgotPasswd = await $('form#form-login  a').click()
    const mypEmail = await $('input#input-email').setValue('kennykin40@yahoo.com')
    const continueBtn = await $('.btn.btn-primary').click()
    

 })

})