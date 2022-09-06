import GooglePage from "../pageobjects/google.page";

class UdemyPage extends GooglePage {
  get udemySearch() {
    return $("input[name='q']");
  }

  get udemyTitle() {
    browser.getTitle();
  }

  get dropDown() {
    return $("input[name='sort']");
  }

  get highestRatedLink() {
    return $("h3*=bdd with cucumber");
  }
}

export default new UdemyPage();
