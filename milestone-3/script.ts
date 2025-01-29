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
    <h1><b>Resume</b></h1>
    
    <h3>Personel Information</h3>

    <p><b>Name:</b>${name}</p>
    <p><b>Father Name:</b>${fname}</p>
    <p><b>E-Mail:</b>${email}</p>
    <p><b>Contact No:</b>${contact}</p>

    <h3>Education:</h3>
    
    <p>${education}</p>

    <h3>Experience:</h3>
    
    <p>${experience}</p>

    <h3>Skills:</h3>
    
    <p>${skills}</p>
    `
    // Display Generated Display
    if (resDisplayElement){
        resDisplayElement.innerHTML = resumeHTM;
    } else {console.error('The Resume Display Element is Missing')}
})