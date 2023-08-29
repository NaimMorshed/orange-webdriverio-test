describe('Orange HRM Integration Test', () => {
  it('should log in and perform employee management actions', () => {
      browser.url('https://opensource-demo.orangehrmlive.com/');

      // Login
      const usernameField = $('#txtUsername');
      const passwordField = $('#txtPassword');
      const loginButton = $('#btnLogin');

      usernameField.setValue('Admin');
      passwordField.setValue('admin123');
      loginButton.click();

      // Verify successful login
      const dashboardHeader = $('h1.dashboard-card-title');
      expect(dashboardHeader).toHaveTextContaining('Dashboard');

      // Navigate to PIM section
      const pimMenu = $('#menu_pim_viewPimModule');
      pimMenu.click();

      // Verify navigation to PIM section
      const pimHeader = $('h1.dashboard-card-title');
      expect(pimHeader).toHaveTextContaining('Employee Information');

      // Add new employee
      const addEmployeeButton = $('#btnAdd');
      addEmployeeButton.click();

      // Fill in employee details
      const firstNameField = $('#firstName');
      const lastNameField = $('#lastName');
      const saveButton = $('#btnSave');

      firstNameField.setValue('John');
      lastNameField.setValue('Doe');
      saveButton.click();

      // Verify employee added successfully
      const successMessage = $('div#content p');
      expect(successMessage).toHaveTextContaining('Successfully Saved');

      // Logout
      const welcomeMenu = $('#welcome');
      const logoutLink = $('=Logout');
      welcomeMenu.click();
      logoutLink.click();

      // Verify successful logout
      const loginHeader = $('h1.auth-header');
      expect(loginHeader).toHaveTextContaining('LOGIN Panel');
  });
});