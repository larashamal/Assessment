import GooglePage from "../pageobjects/google.page";

describe("Google Search", function () {
  // Step 1: Go to Google site
  it("loads google search", async function () {
    await GooglePage.open();
    // Assert it is Google
    const title = await browser.getTitle();
    await expect(title).toEqual("Google");
  });

  it("searches 'Testing Automation Learning' in the input", async function () {
    // Reject cookies
    const cookieBtn = $("div=Reject all");
    await cookieBtn.click();

    // Step 2: Searching for the keyword
    const inputBox = await $("input");
    await inputBox.click();
    await inputBox.setValue("Testing Automation Learning");
    // Clicking 'search' button
    const googleBtn = $("aria/Google Search");
    await googleBtn.click();

    // Step 3: Selecting Udemy link
    const udemyLink = await $("h3*=Udemy");
    await udemyLink.click();
    // Verifying Udemy has opened
    const udemyTitle = await browser.getTitle();
    await expect(udemyTitle).toContain("Udemy");

    // Added pauses to allow for search to load.
    // Step 5: Searching 'BDD with Cucumber; within Udemy
    const udemySearch = await $("input[name='q']");
    await browser.pause(1000);
    await udemySearch.click();
    await browser.pause(1000);
    await udemySearch.keys("BDD with Cucumber");
    await udemySearch.keys("Enter");

    await browser.pause(2000);
  });

  // Created separate test because of issues with Captcha
  it("selects the correct filter", async function () {
    await browser.url(
      `https://www.udemy.com/courses/search/?src=ukw&q=BDD+with+Cucumber`

    // Step 6: Click on highest rated course
    // Selecting the correct filter
    const dropDown = await $("input[name='sort']");
    await dropDown.makeChoice("Highest Rated");
    await expect(dropDown).toHaveValueContaining("Highest Rated");
    await expect(browser.url).toContain("sort=highest-rated");

    // Select the correct highest rated course
    const highestRatedLink = await $("=bdd with cucumber");
    await highestRatedLink.click();
    const highestRatedTitle = await browser.getTitle();
    await expect(highestRatedTitle).toBe(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
    );

  // });
});
