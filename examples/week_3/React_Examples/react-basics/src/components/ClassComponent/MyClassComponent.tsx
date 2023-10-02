import React, { Component } from 'react';

class MyClassComponent extends Component<{}, { message: string }> {

    state = {message: "hello there"};

    constructor(props: any){
        super(props);
        this.state = {message: "Hello there"};
    }

    textChange(event: any){
        this.setState({message: event.target.value});
    }

    componentDidMount(): void {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ message: string; }>, snapshot?: any): void {
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ message: string; }>, nextContext: any): boolean {
        console.log('shouldComponentUpdate');
        return true;
    }

    

    render(){
        return (
            <>
                <input type="text" onChange={this.textChange.bind(this)}></input>
                <h1>{this.state.message}</h1>
            </>
        )
    }
}

export default MyClassComponent;