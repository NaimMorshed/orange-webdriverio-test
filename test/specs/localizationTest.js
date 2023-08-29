describe('Orange HRM Localization Test', () => {
  const supportedLanguages = ['English', 'French', 'Spanish']; // List of supported languages

  supportedLanguages.forEach(language => {
      it(`should display UI elements correctly in ${language}`, () => {
          browser.url('https://opensource-demo.orangehrmlive.com/');

          // Change language
          const languageDropdown = $('#language');
          languageDropdown.selectByVisibleText(language);

          // Verify language change
          const languageSelector = $('.langLabel');
          expect(languageSelector).toHaveText(language);
      });
  });
});