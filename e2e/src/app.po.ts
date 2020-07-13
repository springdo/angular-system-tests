import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('body > lxp-root > lxp-main-layout > main > lxp-home > p')).getText() as Promise<string>;
  }
}
