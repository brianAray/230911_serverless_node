const searchContainer = document.querySelector("#search_container");

const searchBox = document.querySelector("#search_box");

const submitButton = document.querySelector("#submit");

function printText(){
    alert(searchBox.value);
}

submitButton.addEventListener("", printText);

// Event Capturing and Event Bubbling

/**
 * By default most events are bubbling, which means they propagate from the inner most element to the outer most element
 * 
 * Event capturing is the inverse, it propagates from the outer most element to the inner most element
 */

const outerDiv = document.querySelector("#outer-div");
const innerDiv = document.querySelector("#inner-div");
const innerParagraph = document.querySelector("#inner_p");

outerDiv.addEventListener("click", () => alert("outer_div"));
innerDiv.addEventListener("click", () => alert("inner_div"));
innerParagraph.addEventListener("click", () => alert("inner_paragraph"));

// to make it capturing, you add a boolean true as a 3rd parameter
outerDiv.addEventListener("click", () => alert("outer_div"), true);
innerDiv.addEventListener("click", () => alert("inner_div"), true);
innerParagraph.addEventListener("click", () => alert("inner_paragraph"), true);