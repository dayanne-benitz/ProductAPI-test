# README #

# PRODUCT  API Tests
This project contains automated tests for Vendo application using [Cypress](https://www.cypress.io/).

### Prerequisites

Before running the tests, ensure that you have the following software installed:

- Node.js

### Getting Started

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Install the dependencies:

   ```
   cd <project_directory> 
   Make sure Node.js and Yarn is installed
   npm init
   npm install cypress --save-dev
   npm install typescript --save-dev
   npx tsc --init
   npx cypress open
   ```

3. Running the Tests:

   To run the tests, use the following command:

   ```
   npm test
   ```


   The tests will execute and display the test results in the command line.

## Project Structure

The project follows the following structure:

```
├── cypress
│   ├── e2e
│   |    ├── product-api.cy.ts
├── .gitignore
├── cypress.config.ts
└── package.json
```

- `cypress/e2e`: Contains the test scripts organized by test suites.
- `.gitignore`: Specifies intentionally untracked files to be ignored by Git.
- `cypress.config.ts`: Cypress configuration file.
- `package.json`: Dependencies and scripts.

Happy testing!