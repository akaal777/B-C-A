document.addEventListener('DOMContentLoaded', () => {
    const playlistList = document.getElementById('playlist-list');
    const videoList = document.getElementById('video-list');
    const pdfList = document.getElementById('pdf-list');
    const onlinePdfList = document.getElementById('online-pdf-list'); // New online PDF list reference

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
        { name: "Complete Discrete Mathematics [One Shot]", url: "https://www.youtube.com/watch?v=papVRQqtrgc" }
    ];

    const relatedInfo = [
        { name: "Set Theory", url: "https://www.geeksforgeeks.org/set-theory/" },
        { name: "Logical Statement", url: "https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_propositional_logic.htm" },
        { name: "Relation", url: "https://www.geeksforgeeks.org/relation-in-maths/" },
        { name: "Function", url: "https://www.geeksforgeeks.org/functions-in-discrete-mathematics/" },
        { name: "Graph Theory", url: "https://www.geeksforgeeks.org/mathematics-graph-theory-basics/" },
        { name: "Mathematical Induction", url: "https://www.geeksforgeeks.org/principle-of-mathematical-induction/" },
        { name: "Tree", url: "https://www.tutorialspoint.com/discrete_mathematics/introduction_to_trees.htm" }
    ];

    const books = [
        { name: "Discrete Mathematics-Richard Johnsonbaugh.5th Edition", url: "https://ia800500.us.archive.org/33/items/richard-johnsonbaugh.-discrete-mathematics/richard%20johnsonbaugh.%20discrete%20mathematics.pdf" }
    ];

    const pdfs = [
        { name: "Set Theory", url: "ch1 set theory_compressed.pdf" },
        { name: "Logical Statement", url: "ch 2 logic.pdf" },
        { name: "Mathematical Induction", url: "ch3 mathematical induction.pdf" },
        { name: "Relation", url: "ch 4 relation.pdf" },
        { name: "Function", url: "ch5 function.pdf" },
        { name: "Growth of Functions", url: "ch6 growth of function.pdf" },
        { name: "Graph Theory", url: "ch7 graph theory.pdf" },
        { name: "Tree", url: "ch 8 tree.pdf" },
        { name: "Relation Related", url: "ch 9 relation related.pdf" }
    ];

    const onlinePdfs = [
        { name: "Set Theory", url: "https://drive.google.com/file/d/1wRCayUHG5OU99b2OXmMvTfpBxuPtpQmG/view" },
        { name: "Logical Statement", url: "https://drive.google.com/file/d/1MG7TytBwWazccpq_Bag_zNwwrRNybCLL/view" },
        { name: "Mathematical Induction", url: "https://drive.google.com/file/d/1XpGfhLGGs0O9kR-5VFYC2dOxh0_5VbNy/view" },
        { name: "Relation", url: "https://drive.google.com/file/d/1Ettv47YdIXfGyw-p11o4Wp5iP-XGtjr_/view" },
        { name: "Function", url: "https://drive.google.com/file/d/1x01G8aTXvqN7PqikPFTqfHIxCOPZ-mCi/view" },
        { name: "Growth of Functions", url: "https://drive.google.com/file/d/1Dbr785ZgOYflDfLLYZN_gZKiQM3XMnU1/view" },
        { name: "Graph Theory", url: "https://drive.google.com/file/d/1F7FAsd--4xTbX1jjz1g9nbYpzJWVkW8D/view" },
        { name: "Tree", url: "https://drive.google.com/file/d/1OtWB3XNbiLelgvUiDoPxeTOPyyR0iLeq/view" },
        { name: "Relation Related", url: "https://drive.google.com/file/d/1ZXtpR6seWyqc8xE6PzvJyEwyd5jN14Ya/view" }
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
                const link = document.createElement('a');
                link.href = item.url;
                link.target = "_blank"; // Open in new tab
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
    renderButtons(onlinePdfs, 'online-pdf-list', 'pdf-button'); // Render online PDFs
});
