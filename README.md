# kaufland-test-task

# Getting Started:

# Prerequisites:

Node.js and npm installed on your system. You can check these by running node -v and npm -v in your terminal.
A basic understanding of Angular concepts.

# Clone the repository:

Bash
git clone https://github.com/talhayounis/kaufland-test-task.git

# Install dependencies:

Bash
cd kaufland-test 
npm install

# Run the application:

Bash
ng serve

This will start the development server and open your application in the browser at http://localhost:4200 by default.

# How it works:

The FAQ page fetches data from a dummy API (https://jsonplaceholder.typicode.com/posts) and displays a list of questions and their corresponding answers. Clicking on a question toggles the visibility of its answer. Additionally, a "load more" button allows users to fetch additional questions in batches of 10.

# Technologies used:

Angular: A popular framework for building web applications.
HttpClient: Used to fetch data from the API.
ngFor directive: Used to iterate through a list of questions.
ngIf directive: Used to conditionally show/hide the answer content.