const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat')
require('dayjs/locale/pt-br')
const prompt = require('prompt-sync')({ sigint: true });

dayjs.extend(customParseFormat);
dayjs.locale('pt-br');

function Years() {
    const date = prompt("Digite sua data de nascimento no formato: DD-MM-AA: ");
    const birthday = dayjs(date, 'DD-MM-YY');
    const age = dayjs().diff(birthday,`year`);
    console.log(`Você tem ${age} anos`);
}

Years();





