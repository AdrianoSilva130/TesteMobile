import { $ } from '@wdio/globals'
import Page from './page.js'


class HomePage extends Page { 
    
    async openMenu(){
      $(`id:tab-${menu}`).click
    }
    
}

export default new HomePage();
