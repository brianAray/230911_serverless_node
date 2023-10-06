import {render, screen} from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Greeting from './Greeting';

describe("Greeting Component", () => {
    test("renders Hello World as a text", () => {
        // arrange
        render(<Greeting/>);
        
        // Act
        //... nothing

        // assert
        const helloWorldElement = screen.getByText("hello world", {exact: false});

        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders it's nice to meet you as text on load", () => {
        let message = "Nice to meet you";

        render(<Greeting/>);

        const textElement = screen.getByText(message);
        expect(textElement).toBeInTheDocument();
    });

    test("renders I have been changed when change text button has been clicked", () => {
        let message = "I have been changed";
        render(<Greeting/>);

        const changeTextButton = screen.getByRole("button");
        // instead of running click on the element, you have to use the fireEvent api to emulate user behavior
        fireEvent(changeTextButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        )
        const textElement = screen.getByText(message);
        
        expect(textElement).toBeInTheDocument();
    });

    test("does not render 'Nice to meet you' when button is clicked", () => {
        render(<Greeting/>);
        const button = screen.getByRole("button");
        fireEvent(button, new MouseEvent('click', {bubbles: true, cancelable: true}));

        // used incase the element may not be there, otherwise it will throw an error
        const outputElement = screen.queryByText("Nice to meet you");
        expect(outputElement).not.toBeInTheDocument();
    })
});
