// get reference to the form and display area
var Rform = document.getElementById('resume-form');
var resDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Now below we are going to handle form submission
Rform.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var fname = document.getElementById('f-name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    //to generate the resume content dynamically
    var resumeHTM = "\n    <h1><b>Editable & Shareable Resume</b></h1>\n    \n    <h3>Personel Information:</h3>\n\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Father Name:</b><span contenteditable=\"true\">").concat(fname, "</span></p>\n    <p><b>E-Mail:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact No:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n\n    <h3>Education:</h3>\n    \n    <p <span contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience:</h3>\n    \n    <p <span contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    \n    <p <span contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display Generated resume
    resDisplayElement.innerHTML = resumeHTM;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog, where the user can choose "Save as PDF"
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('contact').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
