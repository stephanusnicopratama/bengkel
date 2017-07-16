import { BengkelPage } from './app.po';

describe('bengkel App', () => {
  let page: BengkelPage;

  beforeEach(() => {
    page = new BengkelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
