/* 
CHALLENGE 3:
With Dom Manipulation, use an event listener on the button so that whenever it is clicked,
the text from the input box is rendered on the page, and the image source is changed to
the image attached to this challenge.
*/
let input = document.getElementById("text");
const button = document.getElementById("submit");
const p = document.querySelector("p");
const img = document.getElementsByClassName("ourImage");

button.addEventListener("click", function () {
  console.log(input);
  p.innerHTML = input.value;
  imgs[0].src = "./img.png";
});
