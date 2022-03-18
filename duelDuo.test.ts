
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw displays div with id choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const divChoices = await driver.findElement(By.id('choices'))
    const added = await divChoices.isDisplayed()
    expect(added).toBe(true)
})

test('Draw displays div with id player-duo', async () => {
    await driver.findElement(By.xpath("//div[contains(text(),'Add to Duo')]")[2]).click()
    const divPlayerDuo = await driver.findElement(By.id('player-duo'))
    const added = await divPlayerDuo.isDisplayed()
    expect(added).toBe(true)
})

test('Removes item from duo', async () => {
    const removed = await driver.findElement(By.xpath("//*[text()='Remove from Duo'] ")[1])
    await driver.findElement(By.xpath("//*[text()='Remove from Duo'] ")[1]).click()
    expect(removed.getId).toBe("choices")
})

