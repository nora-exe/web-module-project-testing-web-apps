import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

// 💡 Test 1
test('renders without errors', () => {
    render (<ContactForm />);
});

// 💡 Test 2
test('renders the contact form header', () => {
    render (<ContactForm />);
    const header = screen.getByText(/contact form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/contact form/i);
});

// 💡 Test 3
test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render (<ContactForm />);
    const firstNameField = screen.getByLabelText(/first name*/i);
    userEvent.type(firstNameField, "1234");
    const errorMessage = await screen.findAllByTestId('error');
    expect(errorMessage).toHaveLength(1);
});

// 💡 Test 4
test('renders THREE error messages if user enters no values into any fields.', async () => {
    render (<ContactForm />);
    const btnSubmit = screen.getByRole('button');
    userEvent.click(btnSubmit);
    const errorMessages = await screen.findAllByTestId('error');
    expect(errorMessages).toHaveLength(3);
});

// 💡 Test 5
test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    render (<ContactForm />);
    const firstNameField = screen.getByLabelText(/first name*/i);
    const lastNameField = screen.getByLabelText(/last name*/i);
    userEvent.type(firstNameField, "12345");
    userEvent.type(lastNameField, "12345");

    const btnSubmit = screen.getByRole('button');
    userEvent.click(btnSubmit);

    const errorMessage = await screen.findAllByTestId('error');
    expect(errorMessage).toHaveLength(1);
});

// 💡 Test 6
test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    render (<ContactForm />);
    const emailField = screen.getByLabelText(/email*/i);
    userEvent.type(emailField, "invalid@email")

    const errorMessage = await screen.findByText(/must be a valid email/i);
    expect(errorMessage).toBeInTheDocument();
});

// 💡 Test 7
test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    render (<ContactForm />);
    const btnSubmit = screen.getByRole('button');
    userEvent.click(btnSubmit);
    const errorMessage = await screen.findByText(/lastname is a required field/i);
    expect(errorMessage).toBeInTheDocument();
});

// 💡 Test 8
test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    render (<ContactForm />);
    const firstNameField = screen.getByLabelText(/first name*/i);
    const lastNameField = screen.getByLabelText(/last name*/i);
    const emailField = screen.getByLabelText(/email*/i);
    userEvent.type(firstNameField, "12345");
    userEvent.type(lastNameField, "12354");
    userEvent.type(emailField, "valid@email.com")
    const btnSubmit = screen.getByRole("button");
    userEvent.click(btnSubmit);
    await waitFor(() => {
        const checkFirstName = screen.getByText("12345");
        const checkLastName = screen.getByText("12354");
        const checkEmail = screen.getByText("valid@email.com");
        const checkMessage = screen.queryByTestId("messageDisplay");
        expect(checkFirstName).toBeInTheDocument();
        expect(checkLastName).toBeInTheDocument();
        expect(checkEmail).toBeInTheDocument();
        expect(checkMessage).not.toBeInTheDocument();
    });

});

// 💡 Test 9
test('renders all fields text when all fields are submitted.', async () => {
    render (<ContactForm />);
    const firstNameField = screen.getByLabelText(/first name*/i);
    const lastNameField = screen.getByLabelText(/last name*/i);
    const emailField = screen.getByLabelText(/email*/i);
    const message = screen.getByLabelText(/message/i);
    userEvent.type(firstNameField, "12345");
    userEvent.type(lastNameField, "12354");
    userEvent.type(emailField, "valid@email.com")
    userEvent.type(message, "mensaje")
    const btnSubmit = screen.getByRole('button');
    userEvent.click(btnSubmit);
    await waitFor(() => {
        const checkFirstName = screen.getByText(/12345/i);
        const checkLastName = screen.getByText(/12354/i);
        const checkEmail = screen.getByText(/valid@email.com/i);
        const checkMessage = screen.getByTestId(/message/i);
        expect(checkFirstName).toBeInTheDocument();
        expect(checkLastName).toBeInTheDocument();
        expect(checkEmail).toBeInTheDocument();
        expect(checkMessage).toBeInTheDocument();
    });
});