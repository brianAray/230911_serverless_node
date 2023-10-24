import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    test('it renders the button with the correct label', () => {
        // Arrange - Render the button
        const renderResult = render(<Button label="Click Me"/>);

        const buttonElement = renderResult.getByText("Click Me");

        // Assert
        expect(buttonElement).toBeInTheDocument();
    });

    test('it triggers the onClick handler when clicked', () => {
        // Arrange
        const handleClick = jest.fn();
        const renderResult = render(<Button label="Click Me" onClick={handleClick}/>);

        const buttonElement = renderResult.getByText("Click Me");

        // Act
        fireEvent.click(buttonElement);

        // Assert
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})