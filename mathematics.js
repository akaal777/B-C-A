document.addEventListener('DOMContentLoaded', () => {
    const playlistList = document.getElementById('playlist-list');
    const videoList = document.getElementById('video-list');
    const pdfList = document.getElementById('pdf-list'); // Reference to PDF list

    const playlists = [
        { name: "Set Theory", url: "https://youtube.com/playlist?list=PLEHGYFbPuuMEMCD-8hwgnsZS0xKd8ydie&si=8tXVkKQVxpmVOGOO" },
        { name: "Logical Statement", url: "https://youtube.com/playlist?list=PLEHGYFbPuuMFtOiodQS01_bjt7ZDQ-5BK&si=4TFuJWIMJ4HtESJ5" },
        { name: "Relation and Function", url: "https://youtube.com/playlist?list=PLEHGYFbPuuMHwxnYr_c8nu4Zm1rcXt1bq&si=vwz6WxvAIfEN6kk8" },
        { name: "Graph Theory", url: "https://youtube.com/playlist?list=PLEHGYFbPuuMGWI1vTAEynekaEsk6O1yPn&si=HTpPZO4mXF_cuRAd" }
    ];

    const videos = [
        { name: "Introduction to Mathematical Induction", url: "https://youtu.be/A3bBWmS7Brg?si=c2Mg0CwA3yEv28Dx" },
        { name: "Questions of Mathematical Induction", url: "https://youtu.be/d-C0TOMolqo?si=Vx9Z6-WmYdkzOeRA" },
        { name: "Examples of Mathematical Induction", url: "https://youtu.be/x96dWnDvY6A?si=mZeTD5CdNcTbEQ9F" },
        { name: "Most Important Questions of Mathematical Induction", url: "https://youtu.be/Aecx6sUIqBE?si=02VdjH197aiMroZ4" },
        { name: "Complete Discrete Mathematics [One Shot]", url: "https://www.youtube.com/watch?v=papVRQqtrgc"}
    ];

    const relatedInfo = [
        { name: "Set Theory", url: "https://www.geeksforgeeks.org/set-theory/" },
        { name: "Logical Statement", url: "https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_propositional_logic.htm" },
        { name: "Relation", url: "https://www.geeksforgeeks.org/relation-in-maths/" },
        { name: "Function", url: "https://www.geeksforgeeks.org/functions-in-discrete-mathematics/" },
        { name: "Graph Theory", url: "https://www.geeksforgeeks.org/mathematics-graph-theory-basics/" },
        { name: "Mathematical Induction", url: "https://www.geeksforgeeks.org/principle-of-mathematical-induction/" }
    ];

    const books = [
        { name: "Discrete Mathematics-Richard Johnsonbaugh.5th Edition", url: "Mathbook.pdf" },
    ];

    // Updated PDF list with direct paths to PDF files
    const pdfs = [
        { name: "Set Theory", url: "ch1 set theory_compressed.pdf" },
        { name: "Logical Statement", url: "ch 2 logic.pdf" },
        { name: "Mathematical Induction", url: "ch3 mathematical induction.pdf" },
        { name: "Relation", url: "ch 4 relation.pdf" },
        { name: "Function", url: "ch5 function.pdf" },
        { name: "Growth of Functions", url: "ch6 growth of function.pdf" },
        { name: "Graph Theory", url: "ch7 graph theory.pdf" },
        { name: "Tree", url: "ch 8 tree.pdf"},
        { name: "Relation Related", url: "ch 9 relation related.pdf"}
    ];

    function renderButtons(list, elementId, buttonClass) {
        const container = document.getElementById(elementId);
        container.innerHTML = '';
        list.forEach((item) => {
            const button = document.createElement('button');
            button.className = buttonClass;
            button.textContent = item.name;
            
            // Open URL in new tab for all links
            button.addEventListener('click', () => {
                // Set the download attribute to suggest file download
                const link = document.createElement('a');
                link.href = item.url;
                link.download = item.name; // Suggest a filename for download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
            
            container.appendChild(button);
        });
    }

    renderButtons(playlists, 'playlist-list', 'playlist-button');
    renderButtons(videos, 'video-list', 'video-button');
    renderButtons(relatedInfo, 'related-info-list', 'related-info-button');
    renderButtons(books, 'book-list', 'book-button');
    renderButtons(pdfs, 'pdf-list', 'pdf-button');
});
