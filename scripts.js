// Data
const scripts = [
    { Name: "⭐ | Infinite Yield", Script: "loadstring(game:HttpGet(('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'),true))()", Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fofficial-jjsploit.com%2Fwp-content%2Fuploads%2F2023%2F05%2FInfinite-Yield-Free-Download.webp&f=1&nofb=1&ipt=85da040fdea573fb8cf4c020d0118fcd229e22dac4c2eb58eaba177f41c11ba2&ipo=images" },
];
// Code
function displayScripts(scriptsToShow) {
    const scriptList = document.getElementById('script-list');
    scriptList.innerHTML = '';

    scriptsToShow.forEach(script => {
        const scriptItem = document.createElement('div');
        scriptItem.className = 'script-item';

        const img = document.createElement('img');
        img.src = script.Image;
        scriptItem.appendChild(img);

        const name = document.createElement('span');
        name.textContent = script.Name;
        scriptItem.appendChild(name);

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.onclick = () => {
            navigator.clipboard.writeText(script.Script).then(() => {
                
            });
        };
        scriptItem.appendChild(copyButton);

        scriptList.appendChild(scriptItem);
    });
}

function filterScripts(query) {
    return scripts.filter(script =>
        script.Name.toLowerCase().includes(query.toLowerCase())
    );
}

function init() {
    const searchInput = document.getElementById('search');

    displayScripts(scripts);

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const filteredScripts = filterScripts(query);
        displayScripts(filteredScripts);
    });

}

init();