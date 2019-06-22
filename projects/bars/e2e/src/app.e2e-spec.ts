import {BarsPage} from './app.po';

describe('bars App', () => {
  let page: BarsPage;

  beforeEach(() => {
    page = new BarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
