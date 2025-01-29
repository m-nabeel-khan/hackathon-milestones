// get reference to the form and display area
const Rform = document.getElementById('resume-form') as HTMLFormElement;
const resDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Now below we are going to handle form submission
Rform.addEventListener('submit',(event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fname = (document.getElementById('f-name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

// Save form data in localStorage with the username as the key
const resumeData = {
    name,
    email,
    contact,
    education,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally

    //to generate the resume content dynamically
    const resumeHTM = `
    <h1><b>Editable & Shareable Resume</b></h1>
    
    <h3>Personel Information:</h3>

    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Father Name:</b><span contenteditable="true">${fname}</span></p>
    <p><b>E-Mail:</b><span contenteditable="true">${email}</span></p>
    <p><b>Contact No:</b><span contenteditable="true">${contact}</span></p>

    <h3>Education:</h3>
    
    <p <span contenteditable="true">${education}</p>

    <h3>Experience:</h3>
    
    <p <span contenteditable="true">${experience}</p>

    <h3>Skills:</h3>
    
    <p <span contenteditable="true">${skills}</p>
    `
    // Display Generated resume
resDisplayElement.innerHTML = resumeHTM;
// Generate a shareable URL with the username only
const shareableURL =`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog, where the user can choose "Save as PDF"
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('contact') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});