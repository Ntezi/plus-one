# PlusOne Assignment
## _The technical challenge_

This project has two main directories **server** and **client** for backend and frontend components respectively.

## Installation
Run

```
git clone https://github.com/Ntezi/plus-one.git
cd plus-one
```

- This application is not deployed to any server.
- You will need [Docker](https://www.docker.com/) to run both frontend and backend sites locally.
- Please use two different tabs of terminal to run both applications

### Run the backend component
In the project directory, you can run:
```sh
cd server
docker-compose up --build
```
And the backend can be accessed at [http://localhost:2205](http://localhost:2205)

Note: To access the following API endpoints, you will need an API Key as **TOKEN** that can be found in the .env file from **server** directory:
- [http://localhost:2205/check](http://localhost:2205/check)

### Run the frontend component
This component was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

In the project directory, you can run:
```sh
cd client
docker-compose up --build
```
And open [http://localhost:2206](http://localhost:2206) to view it in the browser.

## Tech stack
The following are the main resources used to implement this project:
- [Node.js](https://nodejs.org/en/) with [Express](https://expressjs.com/) - for backend.
- [Reactjs](https://reactjs.org/) with [Redux Tool Kit](https://redux-toolkit.js.org/) and [Webpack](https://webpack.js.org/) - for frontend.
- [Docker](https://www.docker.com/) for project build.

## Contacts
- Email Address: ngabomarius@gmail.com
