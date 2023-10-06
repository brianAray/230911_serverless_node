import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {
    test('renders posts if request succeeds', async () => {
        // 

        jest.spyOn(window, "fetch").mockResolvedValue({
            json: async() => [{id: '1', title: 'first post'}],
        } as any);

        render(<Async/>);

        // fetch request gets a list
        // this will get back all the lists on the page        
        const listItemElement = await screen.findAllByRole("listitem");

        // we are just going to verify that it is not empty
        expect(listItemElement[0]).toHaveTextContent("first post");

    })
})