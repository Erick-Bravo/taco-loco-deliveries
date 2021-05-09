# taco-loco-deliveries

## To Run The App

To run the app, please do the following:

run in command line
- npm install
- npm start

## Dependencies
- @testing-library/jest-dom ^5.12.0
- @testing-library/react ^11.2.6
- @testing-library/user-event ^12.8.3
- normalize.css ^8.0.1
- react ^17.0.2
- react-dom ^17.0.2
- react-router-dom ^5.2.0
- react-scripts 4.0.3
- web-vitals ^1.1.2

## taco-loco-api
For this project, I have create a seperate api using the json-server package. <br/>
This api is hosted to heroku at https://taco-loco-api.herokuapp.com/
It contains only 3 cutomers with id, firstName, lastName, and address in
JSON format.

## User Stories
As an employee of Taco Loco I am:
- I am able to add a new delivery with customers name and address
- I am able to look up all deliveries that are stored in the database
- I can update customer info if needed
- I can delete a delivery

## Questions
- Should we create a single route app so all tools and data are in one place for the user?
or should we have multiple routes for page simplifications and organization?
- Should we exclude Redux?  

## Dev Notes:
- This project took me about 14 - 16 hours from 
the moment of repo creation in github.
- It was the first time I had used a json-server so 
naturally, time was allocated in learning how to create a json-server and 
how to interact with its api.
- The time does not include TDD. My strategy for this project was 
to learn json-server then implement what I knew first, just in case I could not 
get to TDD.
- Test should absolutely be written alongside development, however
TDD in react was something I was also unfamiliar with.
- Even after this project is submitted, I will be researching and implementing <br/>TDD to further my skills as a developer. 
