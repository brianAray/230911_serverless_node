import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ItemList from './ItemList';

const mockStore = configureStore();

describe('ItemList Component', () => {
    test('It renders a list of items from the Redux Store', () => {
        const initialState = { items: ['item1', 'item2', 'item3']};

        const store = mockStore(initialState);

        const renderResult = render(
            <Provider store={store}>
                <ItemList/>
            </Provider>
        );

        const itemList = renderResult.getByTestId('item-list');

        expect(itemList.children.length).toBe(3);

        expect(itemList.textContent).toContain('item1');
        expect(itemList.textContent).toContain('item2');
        expect(itemList.textContent).toContain('item3');
    })
})
