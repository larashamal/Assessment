describe("Google Search", function () {
  it("loads google search", async function () {
    await browser.url(`https://www.google.co.uk`);
  });

  it("searches 'Testing Automation Learning' in the input", async function () {
    const cookieBtn = $("div=Reject all");
    await cookieBtn.click();

    const inputBox = await $("input");
    await inputBox.click();
    await inputBox.keys("Testing Automation Learning");

    const googleBtn = $("aria/Google Search");
    await googleBtn.click();

    const udemyLink = await $("h3*=Udemy");
    await udemyLink.click();
    const udemyTitle = await browser.getTitle();
    await expect(udemyTitle).toContain("Udemy");

    // Pauses to allow for search to load.
    const udemySearch = await $("input[name='q']");
    await browser.pause(1000);
    await udemySearch.click();
    await browser.pause(1000);
    await udemySearch.keys("BDD with Cucumber");
    await udemySearch.keys("Enter");

    // const udemySearchBtn = await $("button[type='submit']");
    // await udemySearchBtn.click();
    await browser.pause(1000);
    // redo: change dropdown selector
    const dropDown = await $("[name='sort']");
    await dropDown.selectByIndex(2);

    const highestRatedLink = await $("=bdd with cucumber");
    await highestRatedLink.click();
    const highestRatedTitle = await browser.getTitle();
    await expect(highestRatedTitle).toBe(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
  });
});
