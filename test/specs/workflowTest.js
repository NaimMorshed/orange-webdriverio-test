describe('Orange HRM Workflow Test', () => {
  it('should add a new employee', () => {
      browser.url('https://opensource-demo.orangehrmlive.com/');

      // Login
      const usernameField = $('#txtUsername');
      const passwordField = $('#txtPassword');
      const loginButton = $('#btnLogin');

      usernameField.setValue('Admin');
      passwordField.setValue('admin123');
      loginButton.click();

      // Navigate to PIM section
      const pimMenu = $('#menu_pim_viewPimModule');
      pimMenu.click();

      // Navigate to Add Employee
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
  });
});