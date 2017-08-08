import { HowMuchYouKnowSomeonePage } from './app.po';

describe('how-much-you-know-someone App', () => {
  let page: HowMuchYouKnowSomeonePage;

  beforeEach(() => {
    page = new HowMuchYouKnowSomeonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
