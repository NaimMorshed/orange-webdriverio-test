describe('Orange HRM Performance Test', () => {
  it('should measure page load time', () => {
      browser.url('https://opensource-demo.orangehrmlive.com/');

      const startTime = browser.execute(() => window.performance.timing.navigationStart);
      const endTime = browser.execute(() => window.performance.timing.loadEventEnd);

      const pageLoadTime = endTime - startTime;
      console.log(`Page load time: ${pageLoadTime}ms`);
  });
});