# Project SportSee

## Presentation

Build an analytics dashboard with React for Openclassrooms JS React Application Developer Training. SportSee is the training's project number 12.

## Project (with Docker)

### Starting the project

- This ommand will allow you to create your Docker container and run your image on extern port 8000 (forwarding the intern port 3000) :
  docker container run --name micro-api -p 3000:8000 -dt micro-api yarn dev

## How to use with mock data

The project need its API in order to fully works. But there is an option to use mock data in place of the API calls.
You can to skip the installation of the backend. The application will detect a network error and offer to use the dummy data, you must click to accept.
This is what always happens when the application is tested on the Vercel.com platform [Openclassrooms projet 12: SportSee](https://projet-12.vercel.app/)
