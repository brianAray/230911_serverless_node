import {render, fireEvent} from '@testing-library/react';
import Form from './Form';

describe('Form Component', () => {
    test('it renders the input fields correctly', () => {
        const renderResult = render(<Form onSubmit={jest.fn()}/>)

        const usernameInput = renderResult.getByLabelText('Username:');
        const passwordInput = renderResult.getByLabelText('Password:');

        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test('it triggers the onSubmit handler with input values when the form is submitted', () => {
        const handleSubmit = jest.fn();
        const renderResult = render(<Form onSubmit={handleSubmit}/>);

        const usernameInput = renderResult.getByLabelText('Username:');
        fireEvent.change(usernameInput, {target: {value: 'JohnDoe'}});

        const passwordInput = renderResult.getByLabelText('Password:');
        fireEvent.change(passwordInput, {target: {value: 'Pass1'}});

        const submitButton = renderResult.getByRole('button', {name: /submit/i});
        fireEvent.submit(submitButton);

        expect(handleSubmit).toHaveBeenCalledWith({username: 'JohnDoe', password: 'Pass1'})

    })
})