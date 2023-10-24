import {render, fireEvent} from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    test('it renders with the correct label', () => {
        const renderResult = render(<Input label="username" type="text"/>);

        const inputElement = renderResult.getByLabelText('username');

        expect(inputElement).toBeInTheDocument();
    });

    test('it triggers the onChange handler when the user types into the input', () => {
        const handleChange = jest.fn();
        const renderResult = render(<Input label="username" type="text" onChange={handleChange}/>);

        const inputElement = renderResult.getByLabelText('username');

        fireEvent.change(inputElement, {target: {value: 'JohnDoe'}});

        expect(handleChange).toHaveBeenCalledWith('JohnDoe');
    })
})