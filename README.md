# TechBlog

[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

The motivation for this project was to create a blog site where a user could input a blog, view other blogs, comment on other blogs, and edit their own content. I used Handlebars as a new technology in this project and continued to beef up my skills with Sequelize and MySQL. I utilized Express.js for my middleware and used Node as the package manager. Potentially in the future I would like for a user to be able to delete their own comments but not the comments of others, edit their own comments, and the owner of the post to be able to delete any comment they wish.

Note: The application has a cookie expiration of 5 minutes. If you click on any button after that time the application will ask you to sign in again.

[Functioning Application](https://drive.google.com/file/d/1JVjMq3okLjP7JDPnsIwYb503PJ9IhpSW/view)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Set up a local .env file with your mysql user and password by using the .env.EXAMPLE file provided. You will need an instance of MySQL installed so that you can run this locally. Run the following command in order to be able to install the package for this code:

    npm install

## Usage

To run this code from the parent directory after setup use the following commands:

    mysql -u root -p -> enter in your password for mysql within the prompt
    source db/schema.sql
    \q
    npm run seed
    npm start

## License

This project is covered under the following license: [![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Contributing

To contribute to this project please clone the repo locally and commit your code using a separate branch. Please have unit tests for your code and make sure all tests pass using the test command before opening a pull request.

## Questions

If there are any questions on the work provided in this repository please use the following contact information:

GitHub: [heatherknoyes](https://github.com/heatherknoyes)

Email: heatherknoyes@gmail.com
