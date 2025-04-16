const button = document.getElementById('addBtn');
button.addEventListener('click', add_skills);

const subBtn = document.getElementById('submit');
subBtn.addEventListener('click', add_dev);

function add_skills() {
    const skillName = document.getElementById('skill').value; // nome da skill
    const skillLevel  = document.getElementById('XP').value; // valor da skill

    const li = document.createElement('li'); // cria um elemento li
    li.textContent = `${skillName} -> ${skillLevel}`; // adiciona os valores no li

    // Adicionando botão de remoção à habilidade
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.classList.add('remove-skill-btn');
    removeBtn.addEventListener('click', function() {
        li.remove(); // Remove a habilidade quando o botão é clicado
    });

    li.appendChild(removeBtn); // Adiciona o botão ao lado da habilidade
    const list = document.getElementById('list');
    list.appendChild(li); // adiciona os valores na lista
}

function add_dev(event) {
    event.preventDefault();  // Previne o envio do formulário para evitar recarregamento da página
    const devName = document.getElementById('devName').value; // nome do desenvolvedor
    const skillsList = document.getElementById('list').getElementsByTagName('li');
    if (!devName || skillsList.length === 0) {
        alert("Por favor, preencha o nome do desenvolvedor e adicione pelo menos uma habilidade.");
        return;
    }

    let skillsText = "";
    let skillListHTML = "<ul>";
    for (let i = 0; i < skillsList.length; i++) {
        skillListHTML += `<li>${skillsList[i].textContent}</li>`;
    }
    skillListHTML += "</ul>";

    const devList = document.getElementById('devList');
    const li = document.createElement('li');  // Cria um elemento li
    li.classList.add('dev-list-item');
    li.innerHTML = `
        <div class="dev-name">Nome: ${devName}</div>
        <div class="dev-tech">Habilidades: ${skillListHTML}</div>
    `; // Adiciona nome e habilidades com formato organizado
    devList.appendChild(li);

    // Limpar campos após adicionar o desenvolvedor
    document.getElementById('devName').value = '';
    document.getElementById('list').innerHTML = '';
}
