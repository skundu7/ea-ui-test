import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MusicFestival extends Page {
    /**
     * define selectors using getter methods
     */
   

    public get bandList (){
        return $('//app-festivals/ol/li')
    }

    public get bandAdrainVenti(){
        return $('//app-festivals/ol[text()=" Adrian Venti "]')
    }

    public get bandecordLabel(){
        return $('//app-festivals/ol/li//ul/li/li')
    }

    public findBandInfo(bandname){
        return $('//app-festivals/ol/li[text()=" ' +bandname+ ' "]/ul/li')
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new MusicFestival();
