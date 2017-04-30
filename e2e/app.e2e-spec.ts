import { BowlingTry2Page } from './app.po';

describe('bowling-try2 App', () => {
  let page: BowlingTry2Page;

  beforeEach(() => {
    page = new BowlingTry2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
