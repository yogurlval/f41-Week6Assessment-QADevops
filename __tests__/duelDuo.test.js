const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  // test("page loads with title", async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.wait(until.titleIs("Duel Duo"), 1000);
  // });

  // test("clicking Draw button displays div with id='choices'", async ()=>{
  //   await driver.get("http://localhost:8000");
  //   const drawButton = await driver.findElement(By.id("draw"));
  //   await drawButton.click();
  //   const divChoices = await driver.findElement(By.id("choices"));
  //   expect(await divChoices.isDisplayed()).toBe(true);
  //   await driver.sleep(3000);
  // });

  test("when bot is 'Removed from Duo' it goes back to 'choices'", async ()=>{
    await driver.get("http://localhost:8000");
    const addBot = await driver.findElement(By.className("bot-btn"));
    await addBot.click();
    const removeBot = await driver.findElement(By.className("bot-btn"));
    const duoContainer = await driver.findElement(By.id("player-duo"));
    await driver.sleep(3000)
    await removeBot.click();
    
    expect(await duoContainer.isDisplayed()).toBe(false);
    await driver.sleep(5000);
  })
});