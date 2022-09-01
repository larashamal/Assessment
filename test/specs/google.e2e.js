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
  });
});
