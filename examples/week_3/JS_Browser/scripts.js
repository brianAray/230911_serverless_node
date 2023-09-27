console.log("Hello there");

// get by id
const elementById = document.getElementById("div1");

console.log(elementById);

// get by class name
const elementsByClass = document.getElementsByClassName("list-item");

console.log(elementsByClass[0]);

// get by tag name
const elementsByTagName = document.getElementsByTagName("h1");

console.log(elementsByTagName[0]);


// CSS Seleector
// Most flexible
const elementBySelector = document.querySelector("#div1");

console.log(elementBySelector);

const elementsBySelector = document.querySelectorAll(".list-item");

console.log(elementsBySelector[0]);


const body = document.querySelector("body");

console.log(body);


// to get the parent element of an item

const listItem = document.querySelectorAll(".list-item")[0];

const parentOfListItem = listItem.parentElement;

console.log(parentOfListItem);

console.log(parentOfListItem.childNodes)

console.log(parentOfListItem.firstElementChild);
console.log(parentOfListItem.lastElementChild);

/**
 * 
 * DOM Structure
 * 
 *  The DOM is a hierarchical structure of an HTML document.
 * 
 * Each object corresponds to an element or part of the document
 * 
 * Document Node (document)
 *  - Top level node in the DOM hierarchy
 * - Represents the entire HTML document
 * 
 * ElementNodes (HTMLElement)
 *  - Representing the HTML elements in the document
 *  - Such as <div>, <h1>, <p>
 *  - Element nodes have attributes, child nodes, and content
 * 
 * Attribute Nodes (Attr)
 *  - Represent the attributes of HTML elements
 *  - They are typically attached to their respective element nodes
 *  - for example, text in the p tag
 * 
 * 
 */

// Sibling Traversal

const nextSiblingList = listItem.nextElementSibling;

console.log(nextSiblingList);

const prevElementSibling = nextSiblingList.previousElementSibling;

console.log(prevElementSibling);


// DOM Manipulation

const header = document.querySelector("h1");

console.log(header);

header.innerText = "I have been changed";

// parentOfListItem.innerHTML = '<p>hello</p>';

// creating elements

const newElement = document.createElement("h3");

newElement.innerText = "I am created through JS";

document.body.appendChild(newElement);

// removing elements

newElement.parentNode.removeChild(newElement);

// Manipulating style

listItem.style.color = "blue";
listItem.style = "background-color: red"

