// List of video links
const videoLinks = [
    { name: 'Computer Organizatio and Architecture [Playlist]', url: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=GH7gA_HejLMJSO3V' },
    { name: 'COA [One shot]', url: 'https://www.youtube.com/watch?v=1rUevQ3bSEY' },
];

// List of reading materials
const readingLinks = [
    { name: 'Instruction Format', url: 'https://www.geeksforgeeks.org/computer-organization-instruction-formats-zero-one-two-three-address-instruction/' },
    { name: 'Risc and Cisc', url: 'https://www.geeksforgeeks.org/computer-organization-risc-and-cisc/' },
    { name: 'Register', url: 'https://www.geeksforgeeks.org/what-is-register-digital-electronics/' },
    { name: 'Class of Register', url: 'https://www.geeksforgeeks.org/different-classes-of-cpu-registers/'},
];

// List of PDF resources
const pdfLinks = [
    { name: '1. Basic Architecture of Computer', url:'https://drive.google.com/file/d/1y4N9E6LWARFdJp8HDEgywUY1lLQRdBl6/view'},
    { name: '2. CPU Organisation', url:'https://drive.google.com/file/d/1a-9ydYqpDwH84Eoxof-7JCqgACGxaHcn/view'},
    { name: '3. Instruction Set Architecture', url:'https://drive.google.com/file/d/1cf8_OJB92xZylxE2C7Hu-cLDLueu4mVr/view'},
    { name: '4. RISC and CISC', url:'https://drive.google.com/file/d/1WoenUVYMUsXGGnK2ztdHgqi13R6y4q3D/view'},
    { name: '5. Memory Organisation', url:'https://drive.google.com/file/d/1RUKPKyhxYRZwawMfI_xcdC6B2nkA6w_4/view'},
    { name: '6. Register Transfer and Micro Operations', url:'https://drive.google.com/file/d/1MSnNrz0QxhjuL_2cD0_gACJ9BKs-wsOQ/view'},
    { name: '7. Arithmetic Logic Shift Unit', url:'https://drive.google.com/file/d/1UWhsnfGka43c4q1GSvCnCN-hgNnUl7Nl/view'},
    { name: '8. Control Unit Design', url:'https://drive.google.com/file/d/1GH0DySYMuACuYJ_ci1A17dcxcvpxnFE7/view'},
    { name: '9. Input Output Organization', url:'https://drive.google.com/file/d/1msKKcAHz3hN446A-ppFVjmJJ6xK-6_66/view'},
    { name: '10. Asynchronous Data Transfer', url:'https://drive.google.com/file/d/1sMAP_t-F698cGNtwiCKgPAaAwklCxK6Z/view'},
];

// Function to create buttons
function createButtons(links, container) {
    links.forEach(link => {
        const button = document.createElement('button');
        button.className = 'big-button';
        button.innerText = link.name;
        button.addEventListener('click', () => {
            window.open(link.url, '_blank');
        });
        container.appendChild(button);
    });
}

// Create video buttons
const videoButtonsContainer = document.getElementById('video-buttons');
createButtons(videoLinks, videoButtonsContainer);

// Create reading material buttons
const readingButtonsContainer = document.getElementById('reading-buttons');
createButtons(readingLinks, readingButtonsContainer);

// Create PDF buttons
const pdfButtonsContainer = document.getElementById('pdf-buttons');
createButtons(pdfLinks, pdfButtonsContainer);
