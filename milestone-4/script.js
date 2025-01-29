// get reference to the form and display area
var Rform = document.getElementById('resume-form');
var resDisplayElement = document.getElementById('resume-display');
// Now below we are going to handle form submission
Rform.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var fname = document.getElementById('f-name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //to generate the resume contect dynamically
    var resumeHTM = "\n    <h1><b>Editable Resume</b></h1>\n    \n    <h3>Personel Information:</h3>\n\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Father Name:</b><span contenteditable=\"true\">").concat(fname, "</span></p>\n    <p><b>E-Mail:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact No:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n\n    <h3>Education:</h3>\n    \n    <p <span contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience:</h3>\n    \n    <p <span contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    \n    <p <span contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display Generated Display
    if (resDisplayElement) {
        resDisplayElement.innerHTML = resumeHTM;
    }
    else {
        console.error('The Resume Display Element is Missing');
    }
});
