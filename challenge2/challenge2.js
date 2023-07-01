/* 
CHALLENGE 2:
With Dom Manipulation, use an event listener on the button so that whenever it is clicked,
the text from the input box is rendered onto the page.
*/
let input = document.getElementById("text");
const button = document.getElementById("submit");
const p = document.querySelector("p");

button.addEventListener("click", function () {
  console.log(input);
  p.innerHTML = input.value;
});

