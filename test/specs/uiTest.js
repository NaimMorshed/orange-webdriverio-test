// ./test/specs/uiTest.js
describe('Orange HRM UI Test', () => {
  it('should verify UI elements on the login page', () => {
      browser.url('https://opensource-demo.orangehrmlive.com/');

      // Verify the presence of UI elements on the login page
      const logoImage = $('.login-logo');
      const usernameField = $('#txtUsername');
      const passwordField = $('#txtPassword');
      const loginButton = $('#btnLogin');

      expect(logoImage).toBeDisplayed();
      expect(usernameField).toBeDisplayed();
      expect(passwordField).toBeDisplayed();
      expect(loginButton).toBeDisplayed();

      // Verify placeholder texts and labels
      expect(usernameField.getAttribute('placeholder')).toBe('Username');
      expect(passwordField.getAttribute('placeholder')).toBe('Password');
      expect($('#divLogo h1').getText()).toBe('LOGIN Panel');
  });

  it('should display error message for invalid login', () => {
      browser.url('https://opensource-demo.orangehrmlive.com/');

      // Attempt login with invalid credentials
      const usernameField = $('#txtUsername');
      const passwordField = $('#txtPassword');
      const loginButton = $('#btnLogin');

      usernameField.setValue('InvalidUser');
      passwordField.setValue('InvalidPassword');
      loginButton.click();

      // Verify error message
      const errorMessage = $('#spanMessage');
      expect(errorMessage).toHaveTextContaining('Invalid credentials');
  });

  // You can add more UI test cases for other pages and sections of the application
});
