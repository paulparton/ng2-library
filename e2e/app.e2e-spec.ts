import { AwNg2LibPage } from './app.po';

describe('aw-ng2-lib App', function() {
  let page: AwNg2LibPage;

  beforeEach(() => {
    page = new AwNg2LibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
