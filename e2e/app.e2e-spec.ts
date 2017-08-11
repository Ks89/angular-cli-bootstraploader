import { AngularCliBootstraploaderPage } from './app.po';

describe('angular-cli-bootstraploader App', () => {
  let page: AngularCliBootstraploaderPage;

  beforeEach(() => {
    page = new AngularCliBootstraploaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
