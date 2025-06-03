import { $ } from '@wdio/globals'
import Page from './page.js';



class HomePage{ 
    
    async openMenu(menu){
      await $(`id:tab-${menu}`).click();
    }
    get btnProfile() {
        return $('~profile');
    }

    async openProfile() {
        await this.btnProfile.waitForDisplayed({ timeout: 10000 });
        await this.btnProfile.click();
    }
}
    


export default new HomePage();
