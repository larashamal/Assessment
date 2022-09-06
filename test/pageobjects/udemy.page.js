import GooglePage from "./google.page";
import Page from "./page";

class UdemyPage extends GooglePage {
  get udemySearch() {
    return $("input[name='q']");
  }

  get udemySearchLink() {}

  get dropDown() {
    return $("input[name='sort']");
  }
}

export default new UdemyPage();
