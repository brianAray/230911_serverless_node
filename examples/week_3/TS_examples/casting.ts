/**
 * Casting
 * 
 * Type casting in TS is  away to tell the TS transpiler that you know the actual data type
 * of the value better than it does. 
 * 
 * Sometiems, you might need to change the data type of a variable or value explicitly
 * 
 * TS provides two ways to do this, the older <> or the newer "as" way
 */

// <> old style
let x: any = "Hello there";
let lengths: number = (<string>x).length;

// we are explicitly casting x to a string

// as-syntax (preferred)

let y: any = "Hello";
let lengths2: number = (x as string).length;

// both syntaxes get the same result, but the as syntax is generally more readable

class A1 {
    value: number;
    constructor(value: number){
        this.value = value;
    }
}
class B1 {
    value: number;
    constructor(value: number){
        this.value = value;
    }
}

let a1Instance: any = new A1(42);
let b1Instance: B1 = a1Instance as B1;

