import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

import * as puppeteer from 'puppeteer';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Test Puppeteer screenshot', async () => {
    const puppetBrowser = await puppeteer.launch();
    const puppetPage = await puppetBrowser.newPage();
    await puppetPage.goto('http://localhost:4200');
    await puppetPage.screenshot({ path: 'example.png' });

    await puppetBrowser.close();
  });

  /*
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Arriba');
  });
  */

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
