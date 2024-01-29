import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import musicFestivalPage from '../pageobjects/musicFestival.page';

const pages = {
    login: musicFestivalPage
}

When('I should be able to see band list', async () => {
 await expect(musicFestivalPage.bandList).toBeExisting();
})

Given('I am on the music festival list page', async () => {
    await musicFestivalPage.open()
})

Then('I should see bands listed inside a music festival', async () => {
  await expect(musicFestivalPage.bandAdrainVenti).toBeExisting();
})

Then('I should see bands listed along with record label inside music festival', async () => {
    await expect(musicFestivalPage.bandecordLabel).toBeExisting();
})


Then('I should see {string} under {string}', (s: string, s2: string) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('I should see record label for a band', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('I should not see {string} band without any music festival', async (s: string) => {
    const festivalName = await musicFestivalPage.findBandInfo(s).getText();
   console.log("Festivale name is "+festivalName);
   await expect(festivalName).toHaveText('SomeText') 
})

