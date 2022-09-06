import GooglePage from "../pageobjects/google.page";
import UdemyPage from "../pageobjects/udemy.page";
import Page from "./page";

describe("verifies Google website and rejects cookies", function () {
  // Step 1: Go to Google site
  it("loads google search", async function () {
    await Page.open();

    // Assert it is Google
    const googleTitle = browser.getTitle();
    await expect(googleTitle).toEqual("Google");

    // Reject cookies
    GooglePage.rejectCookiesBtn.click();
  });

  it("searches 'Testing Automation Learning' in the input", async function () {
    // Step 2: Searching for the keyword

    GooglePage.inputBox.setValue("Testing Automation Learning");
    GooglePage.searchBtn.click();

    expect(GooglePage.inputBox).toHaveValue("Testing Automation Learning");
  });

  it("clicks the Udemy link and verifies its the correct website", async function () {
    // Step 3: Selecting Udemy link
    GooglePage.udemyLink.click();

    // Verifying Udemy has opened
    expect(UdemyPage.udemyTitle).toContain("Udemy");
  });

  // Issues with Captcha began to arise at this point
  it("searches 'BDD with Cucumber' within Udemy", async function () {
    // Added pauses to allow for search to load.
    // Step 5: Searching 'BDD with Cucumber' within Udemy
    UdemyPage.udemySearch.click();
    UdemyPage.udemySearch.keys("BDD with Cucumber\uE007");

    await browser.pause(2000);
  });

  it("selects the correct filter", async function () {
    // Step 6: Click on highest rated course
    // Selecting the correct filter
    UdemyPage.dropDown.click();
    UdemyPage.dropDown.makeChoice("Highest Rated");

    // Asserting the filter has shown the correct results
    expect(UdemyPage.dropDown).toHaveValueContaining("Highest Rated");
    expect(browser.url).toContain("sort=highest-rated");
  });

  it("clicks the correct highest rated course", async function () {
    // Select the top result for the highest rated course
    UdemyPage.highestRatedLink.click();

    // Asserting the correct link was chosen
    const highestRatedTitle = browser.getTitle();
    expect(highestRatedTitle).toBe(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
  });
});
