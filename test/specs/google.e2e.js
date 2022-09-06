import GooglePage from "../pageobjects/google.page";

describe("verifies Google website and rejects cookies", function () {
  // Step 1: Go to Google site
  it("loads google search", async function () {
    await GooglePage.open();

    // Assert it is Google
    const title = await browser.getTitle();
    await expect(title).toEqual("Google");

    // Reject cookies
    const cookieBtn = $("div=Reject all");
    await cookieBtn.click();
  });

  it("searches 'Testing Automation Learning' in the input", async function () {
    // Step 2: Searching for the keyword
    const inputBox = await $("input");
    await inputBox.click();
    await inputBox.setValue("Testing Automation Learning");

    // Clicking 'search' button
    const googleBtn = $("aria/Google Search");
    await googleBtn.click();
  });

  it("clicks the Udemy link and verifies its the correct website", async function () {
    // Step 3: Selecting Udemy link
    const udemyLink = await $("h3*=Udemy");
    await udemyLink.click();

    // Verifying Udemy has opened
    const udemyTitle = await browser.getTitle();
    await expect(udemyTitle).toContain("Udemy");
  });

  // Issues with Captcha began to arise at this point
  it("searches BDD with Cucumber within Udemy", async function () {
    // Added pauses to allow for search to load.
    // Step 5: Searching 'BDD with Cucumber' within Udemy
    const udemySearch = await $("input[name='q']");
    await udemySearch.click();

    await udemySearch.keys("BDD with Cucumber");
    await udemySearch.keys("\uE007");

    await browser.pause(2000);
  });

  it("selects the correct filter", async function () {
    // Step 6: Click on highest rated course
    // Selecting the correct filter
    const dropDown = await $("input[name='sort']");
    await dropDown.click();
    await dropDown.makeChoice("Highest Rated");

    // Asserting the filter has shown the correct results
    await expect(dropDown).toHaveValueContaining("Highest Rated");
    await expect(browser.url).toContain("sort=highest-rated");
  });

  it("clicks the correct highest rated course", async function () {
    // Select the top result for the highest rated course
    const highestRatedLink = await $("h3");
    await highestRatedLink.click();

    // Asserting the correct link was chosen
    const highestRatedTitle = await browser.getTitle();
    await expect(highestRatedTitle).toBe(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
  });
});
