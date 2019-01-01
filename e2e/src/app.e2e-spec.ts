import { AppPage } from './app.po';

describe('angular example application with bazel', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display: Hello World!', async () => {
    await AppPage.navigateTo();
    expect(await page.getParagraphText()).toEqual(`Hello World`);
    await page.typeInInput('!');
    expect(await page.getParagraphText()).toEqual(`Hello World!`);
  });
});
