// ScriptBox by TinyTosha
// Database Version 3.1
const scripts = [
    { Name: "⭐ | Infinite Yield", Script: "loadstring(game:HttpGet(('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'),true))()", Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fofficial-jjsploit.com%2Fwp-content%2Fuploads%2F2023%2F05%2FInfinite-Yield-Free-Download.webp&f=1&nofb=1&ipt=85da040fdea573fb8cf4c020d0118fcd229e22dac4c2eb58eaba177f41c11ba2&ipo=images" },
    { Name: "⭐ | Xeon: Rivals hub", Script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/Eternal-Kids/Xeon/refs/heads/main/src/main.lua'))()", Image: "" },
    { Name: "UNC Test", Script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/unified-naming-convention/NamingStandard/main/UNCCheckEnv.lua'))()", Image: "https://cdn.discordapp.com/attachments/1337086333419651092/1337086374112919632/image.png?ex=67a62a39&is=67a4d8b9&hm=e17f1cec6c833a2f066920c51f0d627ba375c16e45ee67746a847d4545a53a88&" },
    { Name: "Phoenix P*DR", Script: "loadstring(game:HttpGet('https://pastebin.com/raw/3A1FSfxk'))()", Image: "https://cdn.discordapp.com/attachments/1316879873972899920/1316879874262302751/image.png?ex=679de9b4&is=679c9834&hm=55ddf48db0cab9b490a993e06f6b49b3391d340fa8516327f879cc988ec17db7&" },
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
    const starButton = document.getElementById('star-button');

    displayScripts(scripts);

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const filteredScripts = filterScripts(query);
        displayScripts(filteredScripts);
    });
    starButton.addEventListener('click', () => {
        if (starButton.classList.contains('active')) {
            // Если кнопка уже активирована, деактивируем её
            starButton.classList.remove('active');
            searchInput.value = ''; // Очищаем поле
            searchInput.removeAttribute('readonly'); // Разблокируем поле для редактирования
        } else {
            // Активируем кнопку
            starButton.classList.add('active');
            searchInput.value = '⭐ Favorite ⭐'; // Вставляем звёздочку и текст
            searchInput.setAttribute('readonly', 'true'); // Блокируем редактирование
            // Фильтруем скрипты по звёздочке
            const filteredScripts = filterScripts('⭐');
            displayScripts(filteredScripts);
        }
    });
}

init();
