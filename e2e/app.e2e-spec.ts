import { HackdayPage } from './app.po';

describe('hackday App', function() {
  let page: HackdayPage;

  beforeEach(() => {
    page = new HackdayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
