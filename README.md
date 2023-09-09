# Naim Morshed : 011191208
# WEBDRIVERIO

# OrangeHRM Testing Project

This project is a comprehensive testing effort for OrangeHRM, a human resource management system. It includes functional tests, integration tests, and performance tests to ensure the system's reliability and functionality.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Test Descriptions](#test-descriptions)
- [Test Code](#test-code)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before running the tests, ensure you have the following prerequisites installed:

- **Node.js:** Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **WebdriverIO:** You can find necessary steps to install and run webdriverio through the following website [webdriver.io](https://webdriver.io/docs/gettingstarted/)



## Installation

1. Clone this repository to your local machine: https://github.com/NaimMorshed/orange-webdriverio-test.git
2. Navigate to the project directory:
3. Install project dependencies:

## Usage

To run the tests, use the following command:


This will execute all the defined test suites.

## Test Descriptions

- **Login Test**: Validates login functionality with valid credentials.
- **Invalid Login Test**: Test login functionality with invalid credentials.
- **Performance Test**: Returned the response time for login page.
- **Navigation Test**: Verifying the targeted page is displaying properly.
- **Workflow Test**: Added an employee and verified employee data.
- **Integration Test**: Simulate interactions between the login and employee management sections.
- **Localization Test**: Tested against English, French and Spanish.
- **UI Test**: Tested the button and the fields of login page UI.

## Test Code

You can find the test code in the following files:

- `loginTest.js`
- `performanceTest.js`
- `navigationTest.js`
- `workflowTest.js`
- `integrationTest.js`
- `localizationTest.js`
- `uiTest.js`

Each test file contains detailed test scenarios and steps.

## Contributing

Contributions are welcome! If you have suggestions or find issues, please open a GitHub issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
