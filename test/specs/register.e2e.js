const homepage = require ('..\\pageobjects\\homePage');
const registerpage = require ('..\\pageobjects\\registerPage');

const { faker } = require('@faker-js/faker');


describe('Register Test', () => {
    

const randomfirstName = faker.name.fullName(); // Rowan 
const randomlastName = faker.name.fullName(); // Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPassword = faker.internet.password()

    it('user should be able to create account', async () => {
     await  browser.url('/')
     await homepage.myAccount();
     await registerpage.myRegister(randomfirstName,randomlastName,randomEmail, randomPassword);
     browser.pause(10000)
    


             
    });
});


