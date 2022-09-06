import GooglePage from "./google.page";

class UdemyPage extends GooglePage {
  get udemySearch() {
    return $("input[name='q']");
  }

  get udemySearchLink() {}

  get dropDown() {
    return $("input[name='sort']");
  }

  get highestRatedLink() {
    return $("h3*=bdd with cucumber");
  }

  get highestRatedTitle() {
    browser.getTitle();
  }
}

export default new UdemyPage();
