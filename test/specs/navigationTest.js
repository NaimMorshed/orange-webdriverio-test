describe('Orange HRM Navigation Test', () => {
  it('should navigate between sections', () => {
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

      // Navigate to Leave section
      const leaveMenu = $('#menu_leave_viewLeaveModule');
      leaveMenu.click();

      // Verify navigation to Leave section
      const leaveHeader = $('h1.dashboard-card-title');
      expect(leaveHeader).toHaveTextContaining('Leave List');
  });
});
