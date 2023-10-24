import { render, fireEvent} from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('it renders the initial state correctly', () => {
        const renderResult = render(<Counter/>);

        const countValue = renderResult.getByTestId('count-value');

        expect(countValue.textContent).toBe('Current Count: 0');
    });

    test('it increments the count when the button is clicked', () => {
        // const {getByTestId, getByRole} = render(<Counter/>);

        // fireEvent.click(getByRole('button'));
        // expect(getByTestId('count-value').textContent).toBe('Current Count: 1');

        // fireEvent.click(getByRole('button'));
        // expect(getByTestId('count-value').textContent).toBe('Current Count: 2');

        const renderResult = render(<Counter/>);

        const countValue = renderResult.getByTestId('count-value');
        const incrementButton = renderResult.getByRole('button', {name: /increment/i});

        fireEvent.click(incrementButton);
        expect(countValue.textContent).toBe('Current Count: 1');

        fireEvent.click(incrementButton);
        expect(countValue.textContent).toBe('Current Count: 2');
    })
})