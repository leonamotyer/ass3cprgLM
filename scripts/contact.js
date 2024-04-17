// contact.js

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', function() {
        let contact = document.getElementById('contact-page'); //create variable to hold the inner html text by the id 'contact-page' so it can be changed
        contact.innerHTML = '<h1>Thank you for your message</h1>'; //change what the html reads as text under the id 'contact-page'
    });
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
