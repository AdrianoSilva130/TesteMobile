class CadastroPage {
    get btnSignUp() {
        return $('android=new UiSelector().text("Sign up")');
    }

    get inputFirstName() {
        return $('~firstName');
    }

    get inputLastName() {
        return $('~lastName');
    }

    get inputPhone() {
        return $('~phone');
    }

    get inputEmail() {
        return $('~email');
    }

    get inputPassword() {
        return $('~password');
    }

    get inputRePassword() {
        return $('~repassword');
    }

    get btnCreate() {
        return $('~Create');
    }

    get mensagemSucesso() {
        return $('~mensagemSucesso'); 
    }

    async cadastrarUsuario({ firstName, lastName, phone, email, password }) {
        await this.btnSignUp.waitForDisplayed({ timeout: 10000 });
        await this.btnSignUp.click();
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPhone.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRePassword.setValue(password);
        await this.btnCreate.click();
    }
}

export default new CadastroPage();