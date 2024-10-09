// Poems list with links to HTML files
const poems = [
    { title: '1. On His Blindness', link: 'Poem1.html' },
    { title: '2. The Village Schoolmaster', link: 'Poem2.html' },
    { title: '3. The Tyger', link: 'Poem3.html' },
    { title: '4. The Solitary Reaper', link: 'Poem4.html' },
    { title: '5. Kubla Khan', link: 'Poem5.html' },
    { title: '6. To a Skylark', link: 'Poem6.html' },
    { title: '7. La Belle Dame Sans Merci', link: 'Poem7.html' },
    { title: '8. Dover Beach', link: 'Poem8.html' },
    { title: '9. The Listners', link: 'Poem9.html' },
    { title: '10. Night Of The Scorpion', link: 'Poem10.html' },
];

const poemsListDiv = document.getElementById('poems-list');

poems.forEach(poem => {
    const button = document.createElement('button');
    button.textContent = poem.title;
    button.onclick = function() {
        window.open(poem.link);
    };
    poemsListDiv.appendChild(button);
});

// Add functionality for the Grammar button
document.getElementById('grammarButton').addEventListener('click', function() {
    window.open('grammer.html');
});
