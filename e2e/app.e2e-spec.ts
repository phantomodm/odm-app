import { BatAppPage } from './app.po';

describe('bat-app App', () => {
  let page: BatAppPage;

  beforeEach(() => {
    page = new BatAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
