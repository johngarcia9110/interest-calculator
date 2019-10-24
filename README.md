# Interest Calculator
A basic React/Redux application that allows the user to calculate the total + interest of a loan or investment over time.

##  Starting the app

- run `yarn install`
- run `yarn start` The application will automatically open in your browser.

## Running Tests
Tests have been created using the prepacked jest library that comes along with Create-React-App. For now, there is only one item being tested, the "total" reducer. This reducer contains the business logic for calculating the total + interest rate.
- run `yarn test` to start the tests.

## Considerations
Due to the timed nature of this task, some things were omitted or not as optimized as I would like. Below is a list of some of the items that I would take care of in the future if more time was allocated.

### Forms
- Input Masks to allow for a better input field validation and user experience.
- Better field validation before dispatching the calculation.
- Better error message handling.

### Meta Data
- Header metadata (favicon, description, etc) are all left as the boilerplate code from Create-React-App.

### Accessibility
- No considerations to accessibility were made during the creation of this app. This would be required before shipping.

### Styling
- The app is not mobile-friendly.
- The app is understyled.