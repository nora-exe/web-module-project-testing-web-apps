# Integration Testing React Module Project : Contact Form - Testing

This module explored the basics of the react-testing library and ideas behind the integration testing methodology. In this project you will practice how to build tests that follow the arrange-act-assert model, different methods of querying for DOM elements in a test, the use of different expect types and using async/await to test for changes in state.

## Testing Web Applications

## Objectives

- explain what automated testing is and its importance
- use react-testing-library for testing react components
- use react-testing-library to test user interactions with userEvent
- use async / await and waitFor to test changes in a components state.

## Introduction

In this challenge, you will be writing tests for a contact form that has been built with React.

As a developer, you will be writing tests for every component. As we've learned, tests are a very important part of programming. The tests you will write will help you feel confident in the code you push to production!

![Contact Example](project-goals.gif)

***Make sure to complete your tasks one at a time and complete test each task before proceding forward.***

## Instructions
### Task 1: Project Set Up
* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-reducer-pattern`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`
- [ ] In a new terminal window, run `npm test`
- [ ] With each saved change in your editor, the test runner will re-run all the tests
- [ ] **IMPORTANT** If a test fails, use the test runner's error messages to find out why it is failing

### Task 2: Project Requirements
> *All of the work you will do today will be contained inside the ContactForm.test.js file. You will be tasked to write the code for at least 9 different tests on various parts of the ContactForm component. Please read the instructions for each test carefully.*

#### Test Brainstorming
* [ ] Run and play around with the form interface.
* [ ] Write out a list of possible testcases for this application within Understanding-questions.md.

#### Complete a case that tests if:
* [ ] the component renders the contact form component without errors.
* [ ] the header h1 element exists. Include three asserts, if the header is in the document, if the heads is truthy, if the header has the correct test content.
* [ ] the component renders ONE error message if the user enters less than 4 characters into the firstname field. Make sure to use async / await and the correct screen method to account for state change.
* [ ] the component renders THREE error messages if the user submits without filling in any values.
* [ ] the component renders ONE error message if the user submits without filling in the email field.
* [ ] the component renders the text *"email must be a valid email address"* if an invalid email address is typed into the email field.
* [ ] the component renders the text *"lastName is a required field"* the form is submitted without a last name.
* [ ] the component renders the firstname, lastname and email text when submitted with valued fields and does **not** render a message value when one is not entered into the message field.
* [ ] renders all fields when the user submits with valid text filled in for all fields.


## Stretch goals

- Look at your test cases in Understanding-questions and see if there are any that you have not completed.
- From the this list or from your own mind, add in at least one more new testcase.
- There is alot of state management within our component in this project! See if you can separate the form and error validation code into their own hooks.

# Notes
🎥https://youtu.be/Sd75Tf16y2Y

## Key Terminology:
* 📝 RTL queries - [React Testing Library queries allow uses to select elements from the DOM for testing.](https://testing-library.com/docs/react-testing-library/cheatsheet/) + [More info here.](https://testing-library.com/docs/queries/about)

* 📝 ARIA roles - [DOM elements that have role attributes automatically assigned to them.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

* 📝 expect - [expect is a jest method used to test the value of an element](https://jestjs.io/docs/en/expect.html)

* 📝userEvent / fireEvent - [userEvent is a react testing library method used to simulate user input. userEvent is a more advanced and simplified version of fireevent.](https://testing-library.com/docs/ecosystem-user-event/)

* 📝regular expressions - [A regular expression (shortened as regex or regexp) is a sequence of characters that define a search pattern](https://www.youtube.com/watch?v=sXQxhojSdZM)

* 📝async / await - [A javascript idea that allows for a more streamline processing of promises.](https://javascript.info/async-await)


## Key Concepts:
* 📝 end-to-end tests - [a testing method that involves testing an application’s workflow from beginning to end. This method basically aims to replicate real user scenarios.](https://www.browserstack.com/guide/end-to-end-testing)
* 📝 integration tests - [A method of software testing where individual components or units of code are tested to validate user interactions.](https://www.testingxperts.com/blog/what-is-integration-testing#What%20is%20Integration%20Testing?)

* 📝 unit tests - [A level of software testing where individual units / components of a software are tested. The purpose is to validate that each unit of the software performs as designed.](https://softwaretestingfundamentals.com/unit-testing/)

* 📝 react testing library - [a light-weight solution for testing React components.](https://testing-library.com/docs/react-testing-library/intro/)

* 📝 test driven development - [A programming methodology that encourages early testing and later ui development](https://www.youtube.com/watch?v=y8TcPr73Bwo)

## MP
* 🎥https://www.loom.com/share/94ff7b7e39c349d4875dfd607e10e0e3
* ⚙ https://github.com/nora-exe/web-module-project-testing-web-apps/tree/nora-corser