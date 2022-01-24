# github-repos-search
App that displays GitHub Repositories With Search Functionality

## Deployment - https://github-copycat-by-darkotal-an.netlify.app/

## Description:
* A simple App searching Github users by their Usernames and displaying general public information about the user himself and his repositories.
  * it is fetching data via axios HTTP client from [an oficial GitHub API](https://docs.github.com/en/rest)

By entering a UserName used as an official Github login, the app renders data in two columns.

* The Url-s are clickable and lead to public repositories or websites, blogs... 
* The search field filters repos by name, repos names link to official Github repositories

### Future improvements:
 * improving rendering, discrapancy betwwen the user and his repos beeing rendered
 * improving responsivnes in total but primary that of userProfile Card to render horizontaly when mobile view
 * 

## Instructions: 
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* This project was deployed on [Netlify](https://www.netlify.com/) .

* We install: npm i axios react-bootstrap
  -in order to get bootstrap components and to fetch gitHub repos
            
# React 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

