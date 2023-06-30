/* 
    CHALLENGE 4:
    FIND THE ERRORS IN THE CODE
    There are 3 errors: 1 HTML and 2 JavaScript
    When fixed, the background color should change
    to whatever text is in the input
    whenever the button is clicked
*/

const input = document.querySelector('input')
const button = document.getElementById('insert')
const body = document.querySelector('body')

button.addEventListener('resize', () => {
    body.style.backgroundColor = input.value
})