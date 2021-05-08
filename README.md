# taco-loco-deliveries


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

## taco-loco-api
for this project, I have create a simple api using the json-server package.
This api is hosted to heroku at https://taco-loco-api.herokuapp.com
It contains only 4 cutomers with id, firstName, lastName, and address in JSON format.

## User Stories
As an employee of Taco Loco I am:
- I am able to add a new delivery with customers name and address
- I am able to look up all deliveries that are stored in the database
- I can update customer info if needed
- I can delete a delivery

## Questions
- Should we create a single route app so all tools and data are in one place for the user?
or should be have multiple routes for page simplifications and organization?
- Should we exclude Redux?  
