import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import CadastroPage from '../pageobjects/cadastro.page.js';

describe('Fluxo de cadastro - EBAC Shop', () => {
    
    it('Deve cadastrar um novo usuário com sucesso', async () => {
        await HomePage.openProfile();

        await CadastroPage.cadastrarUsuario({
            firstName: 'Adriano',
            lastName: 'Teste',
            phone: '11999998888',
            email: 'adriano130@ebac.com',
            password: '123456'
        });

        await expect(CadastroPage.mensagemSucesso).toBeDisplayed();
    });
});
