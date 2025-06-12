import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import CadastroPage from '../pageobjects/cadastro.page.js';

describe('Fluxo de cadastro - EBAC Shop', () => {
    
    it('Deve cadastrar um novo usuário com sucesso', async () => {
    const profileTab = await $('android=new UiSelector().resourceId("tab-profile")')
    await profileTab.click()

    const signUp = await $('android=new UiSelector().text("Sign up")')
    await signUp.click()

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

    const rePasswordInput = await $('android=new UiSelector().resourceId("repassword")');
    await rePasswordInput.setValue('123456');
    
    const creatorButton = await $('android=new UiSelector().text("Create")');
    await creatorButton.click();
});
})