import Page from "../pageobjects/page";

class GooglePage extends Page {
  open() {
    browser.url("https://www.google.com");
  }

  get acceptCookiesBtn() {
    return $("#L2AGLb");
  }

  get inputBox() {
    return $("input[name='q']");
  }

  get searchBtn() {
    return $("aria/Google Search");
  }

  get udemyLink() {
    return $("h3*=Udemy");
  }
}

export default new GooglePage();
