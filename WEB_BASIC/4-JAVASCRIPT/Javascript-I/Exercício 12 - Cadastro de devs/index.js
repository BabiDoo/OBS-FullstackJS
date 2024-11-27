const button = document.getElementById('addTechBtn');
button.addEventListener('click', add_skills);
const techList = document.getElementById('techList');

function add_skills() {

    const skillNameLabel = document.createElement('label');
    skillNameLabel.textContent = 'Skill: ';

    const skillInput = document.createElement('input');
    skillInput.type = 'text';
    skillInput.name = 'skillName'; 

    const skillLevelLabel = document.createElement('label');
    skillLevelLabel.textContent = 'Your level: ';

    const skillLevelInput = document.createElement('input');
    skillLevelInput.type = 'number';
    skillLevelInput.name = 'skillLevel';
    skillLevelInput.min = 1;
    skillLevelInput.max = 10;

    techList.appendChild(skillNameLabel);
    techList.appendChild(skillInput);
    techList.appendChild(skillLevelLabel);
    techList.appendChild(skillLevelInput);

}

