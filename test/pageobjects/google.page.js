class GooglePage {
  open() {
    return browser.url("https://www.google.com");
  }
}

export default new GooglePage();
