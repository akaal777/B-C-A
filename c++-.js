document.addEventListener('DOMContentLoaded', () => {
    const playlistList = document.getElementById('playlist-list');
    const videoList = document.getElementById('video-list');

    const playlists = [
        { name: "C++ [Apna-college]", url: "https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&si=g1ObTg1SL7QyNFFs" },
        { name: "C++ [Code with harry]", url: "https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL&si=yhu_ktYFAf5wYQTB" },
        { name: "C++ [Learn Coding]", url: "https://youtube.com/playlist?list=PLqleLpAMfxGDq9Ehl8FUstcRrCRQPQO7n&si=RCS_mU1bi527YJ6i" },
    ];

    const videos = [
        { name: "C++ [Coding seekho]", url: "https://youtu.be/ZzRT6pyROz4?si=Fq7SQD7cGbZqHCF4" },
        { name: "C++ [Learn coding]", url: "https://youtu.be/HME2SrWWSYk?si=76opJ3Z9ptIGsofS" },
        { name: "C++ [Apna-college]", url: "https://youtu.be/mlIUKyZIUUU?si=FdAWt1pVkOIEs-uE" },
        { name: "C++ [Code with harry]", url: "https://youtu.be/yGB9jhsEsr8?si=RjAtWz63DmCIJgs4" },
        { name: "C++ [College wallah]", url: "https://youtu.be/e7sAf4SbS_g?si=mjAhnI9fPnnMHJPJ" },
        { name: "C++ [5 min Engineering]", url: "https://www.youtube.com/watch?v=eWHzz-WHQh4"}
    ];

    const relatedInfo = [
        { name: "C++ [W3 schools]", url: "https://www.w3schools.com/cpp/cpp_intro.asp" },
        { name: "C++ [Geeks for Geeks]", url: "https://www.geeksforgeeks.org/c-plus-plus/" },
        { name: "C++ [Javatpoint]", url: "https://www.javatpoint.com/cpp-tutorial" },
        { name: "C++ [Code with harry]", url: "https://www.codewithharry.com/tutorial/cplusplus/" },
        { name: "C++", url: "https://cplusplus.com/doc/tutorial/" },
    ];



    const notes = [
        { name: "C++ Cheatsheet", url: "https://www.codewithharry.com/blogpost/cpp-cheatsheet/" },
        { name: "C++ CheetSheet[github]", url: "https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-cheatsheets.md" },
        { name: "C++ Projects", url: "https://www.interviewbit.com/blog/cpp-projects/" },
        { name: "C++ Programs", url: "https://www.sanfoundry.com/cpp-programs/" },
        { name: "C++ Notes", url: "https://drive.google.com/file/d/1uucE6DVdhbbUSoNUb4-ul32cCpD4ezlN/view" },
    ];


    const books = [
        { name: "C++ Book [Richard l Halterman]", url: "https://web.archive.org/web/20191005170118/https://python.cs.southern.edu/cppbook/progcpp.pdf" },
        { name: "C++ Book [Tutorialspoint]", url: "https://www.tutorialspoint.com/cplusplus/cpp_tutorial.pdf" },
        { name: "C++ Book [Stack Overflow]", url: "https://riptutorial.com/Download/cplusplus.pdf" },
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
                window.open(item.url, '_blank');
            });
            
            container.appendChild(button);
        });
    }

    renderButtons(playlists, 'playlist-list', 'playlist-button');
    renderButtons(videos, 'video-list', 'video-button');
    renderButtons(relatedInfo, 'related-info-list', 'related-info-button');
    renderButtons(books, 'book-list', 'book-button');
    renderButtons(notes, 'notes-list', 'notes-button');
});
