// get reference to the form and display area
const Rform = document.getElementById('resume-form') as HTMLFormElement;
const resDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Now below we are going to handle form submission
Rform.addEventListener('submit',(event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fname = (document.getElementById('f-name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    //to generate the resume contect dynamically
    const resumeHTM = `
    <h1><b>Editable Resume</b></h1>
    
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
    // Display Generated Display
    if (resDisplayElement){
        resDisplayElement.innerHTML = resumeHTM;
    } else {console.error('The Resume Display Element is Missing')}
})