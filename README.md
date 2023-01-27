# Project SportSee

## Presentation

Build an analytics dashboard with React for Openclassrooms JS React Application Developer Training. SportSee is the training's project number 12.
Goals:

- feching data from API
- Creation and display charts
- Logical separation of code into reusable components

## Installing and launching Front-end (port 3000)

Clone the repository of SportSee Front-End:
git clone https://github.com/SFERRER-DEV/projet-12.git

Inside this Front-End repository, install dependencies:

#### `npm install` or the `yarn install` command will allow you to install the dependencies.

Launch Front-End on port 3000:

#### `npm run start` or the `yarn start` command will allow you to run the project (automatically on port 3000).

## Project without Docker

### How to use with mock data

The project need its API in order to fully works, but there is the possibility to use mock data in place of the API calls.
You can to skip the installation of the backend. The front-end will detect a **network error** and offer to use the dummy data, you must click to accept. Mocked data are the alternative to a failure of the backend . The source of these data is in [a json file](https://github.com/SFERRER-DEV/projet-12/blob/main/public/data/data.json) in the public folder.
The choice of using mocked data is stored in the localStorage.
This is what happens when the application is tested on the Vercel.com platform [Openclassrooms projet 12: SportSee](https://projet-12.vercel.app/dashboard/profile/)

## Project with Docker (port 8000)

### Starting the project

You will find [here](https://github.com/SFERRER-DEV/P9-front-end-dashboard) the repo contains all the source code to run the micro API for the sports analytics dashboard SportSee

- You will find the instructions to clone and install the backend at this [address](https://github.com/SFERRER-DEV/P9-front-end-dashboard#3-project-with-docker)

- And this next command will allow you to create your Docker container and run your image on extern port 8000 (forwarding the intern port 3000) :

#### `docker container run --name micro-api -p 3000:8000 -dt micro-api yarn dev`

- The front-end will detect that the backend is responding and will request its http api. Backend api is prevalent.
- If you have used the mocked data previously, go to the homepage and click on the button to remove the mock.

## Navigation on the web application and user switching

Routes have been defined but the menu links and header links point to temporary working pages.

- The main page of this project is the profile page and the home page allows to act on the mocked data.
- You can switch user by changing the user id in the url : there are two users available
- Karl is the default user, if no identifier is specified in the route : Karl is id 12 and Cecilia is id 18

## Links

- See SportSee on **Vercel.com** platform : [OC project 12: SportSee](https://projet-12.vercel.app/dashboard/profile/)

- Overview and codebase summary with **Code Climate** : [OC project 12: SportSee](https://codeclimate.com/github/SFERRER-DEV/projet-12)
