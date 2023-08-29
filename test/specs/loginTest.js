describe('Orange HRM Login', () => {
  it('should log in with valid credentials', () => {
      browser.url('https://opensource-demo.orangehrmlive.com/');

      const usernameField = $('#txtUsername');
      const passwordField = $('#txtPassword');
      const loginButton = $('#btnLogin');

      // login credentials
      usernameField.setValue('Admin');
      passwordField.setValue('admin123');
      loginButton.click();

      // Verify successful login
      const dashboardHeader = $('h1.dashboard-card-title');
      expect(dashboardHeader).toHaveTextContaining('Dashboard');
  });

  it('should display error message with invalid credentials', () => {
      browser.url('https://opensource-demo.orangehrmlive.com/');

      const usernameField = $('#txtUsername');
      const passwordField = $('#txtPassword');
      const loginButton = $('#btnLogin');

      // invalid login credentials
      usernameField.setValue('InvalidUser');
      passwordField.setValue('InvalidPassword');
      loginButton.click();

      // Verify error message
      const errorMessage = $('div#spanMessage');
      expect(errorMessage).toHaveTextContaining('Invalid credentials');
  });
});