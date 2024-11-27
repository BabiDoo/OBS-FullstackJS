const button = document.getElementById('addTechBtn');
button.addEventListener('click', add_skills);
const techList = document.getElementById('techList');

function add_skills() {

    const skillNameLabel = document.createElement('label');
    skillNameLabel.textContent = 'Skill: ';

    const skillInput = document.createElement('input');
    skillInput.type = 'text';
    skillInput.name = 'skill'; 

    techList.appendChild(skillNameLabel);
    techList.appendChild(skillInput);

}