import { MoviefindPage } from './app.po';

describe('moviefind App', () => {
  let page: MoviefindPage;

  beforeEach(() => {
    page = new MoviefindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
