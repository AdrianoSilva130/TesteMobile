import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import CadastroPage from '../pageobjects/cadastro.page.js';
import { faker } from '@faker-js/faker';


describe('Fluxo de cadastro - EBAC Shop', () => {
    
    it('Deve cadastrar um novo usuário com sucesso', async () => {
    
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const ddd = faker.helpers.arrayElement(['11', '21', '31', '41', '51']);
    const phone = faker.phone.number(`${ddd}9########`);
    const email = faker.internet.email(firstName, lastName).toLowerCase();
    const password = '123456';
    
    
        const profileTab = await $('android=new UiSelector().resourceId("tab-profile")')
    await profileTab.click()

    const signUp = await $('android=new UiSelector().text("Sign up")')
    await signUp.click()

    const firstNameInput = await $('android=new UiSelector().resourceId("firstName")');
        await firstNameInput.setValue(firstName);

        const lastNameInput = await $('android=new UiSelector().resourceId("lastName")');
        await lastNameInput.setValue(lastName);

        const phoneInput = await $('android=new UiSelector().resourceId("phone")');
        await phoneInput.setValue(phone);

        const emailInput = await $('android=new UiSelector().resourceId("email")');
        await emailInput.setValue(email);

        const passwordInput = await $('android=new UiSelector().resourceId("password")');
        await passwordInput.setValue(password);

        const rePasswordInput = await $('android=new UiSelector().resourceId("repassword")');
        await rePasswordInput.setValue(password);
        
        const creatorButton = await $('android=new UiSelector().text("Create")');
        await creatorButton.click();
});
})