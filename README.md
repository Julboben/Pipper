# Pipper

Pipper is a simple, lightweight social media application inspired by Twitter. This project is designed as a part of a school assignment to understand the working of a full-stack application.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built with vanilla JavaScript and HTML/CSS. It uses Bootstrap for styling. The frontend code is located in the [``frontend/``](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2FJulian.Bendtsen%2FDeveloper%2FCPH-BUSINESS%2FPipper%2Ffrontend%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/Julian.Bendtsen/Developer/CPH-BUSINESS/Pipper/frontend/") directory. The main HTML file is [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2FJulian.Bendtsen%2FDeveloper%2FCPH-BUSINESS%2FPipper%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/Julian.Bendtsen/Developer/CPH-BUSINESS/Pipper/index.html").

The JavaScript files in the [``frontend/``](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2FJulian.Bendtsen%2FDeveloper%2FCPH-BUSINESS%2FPipper%2Ffrontend%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/Julian.Bendtsen/Developer/CPH-BUSINESS/Pipper/frontend/") directory are:

- index-script.js
- fetch-script.js
- load-script-new.js
- update-script.js

The [``frontend/components/``](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2FJulian.Bendtsen%2FDeveloper%2FCPH-BUSINESS%2FPipper%2Ffrontend%2Fcomponents%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/Julian.Bendtsen/Developer/CPH-BUSINESS/Pipper/frontend/components/") directory contains the create-pip.js file, which includes functions for creating and editing "Pip" elements (similar to Tweets in Twitter).

### Backend

The backend is built with PHP and it connects to a MySQL database. The backend code is located in the [``public/``](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2FJulian.Bendtsen%2FDeveloper%2FCPH-BUSINESS%2FPipper%2Fpublic%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/Julian.Bendtsen/Developer/CPH-BUSINESS/Pipper/public/") directory. The main PHP file is index.php.

The backend uses environment variables for database connection details, which are stored in the `.env` file.

## Setup

1. Clone the repository.
2. Rename [``.env-renameTo.env``](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2FJulian.Bendtsen%2FDeveloper%2FCPH-BUSINESS%2FPipper%2F.env-renameTo.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/Julian.Bendtsen/Developer/CPH-BUSINESS/Pipper/.env-renameTo.env") to `.env` and fill in your database connection details.
3. Install dependencies with `npm install`.
4. Start the server with `npm start`.

## Usage

To create a new "Pip", use the form on the main page. You can also edit existing Pips using the edit button on each Pip.

## Contributing

This is a school project and is not open for contributions.

## License

This project is licensed under the MIT License.
