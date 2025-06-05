import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import CadastroPage from '../pageobjects/cadastro.page.js';

describe('Fluxo de cadastro - EBAC Shop', () => {
    
    it('Deve cadastrar um novo usuário com sucesso', async () => {
    await $('~profile').waitForDisplayed({ timeout: 10000 });
    await $('~profile').click();

    const firstNameInput = await $('android=new UiSelector().resourceId("firstName")');
    await firstNameInput.setValue('Adriano');

    const lastNameInput = await $('android=new UiSelector().resourceId("lastName")');
    await lastNameInput.setValue('Teste');

    const phoneInput = await $('android=new UiSelector().resourceId("phone")');
    await phoneInput.setValue('11999998888');

    const emailInput = await $('android=new UiSelector().resourceId("email")');
    await emailInput.setValue('adriano130@ebac.com');

    const passwordInput = await $('android=new UiSelector().resourceId("password")');
    await passwordInput.setValue('123456');

    const registerButton = await $('android=new UiSelector().resourceId("registerButton")');
    await registerButton.click();
});
})