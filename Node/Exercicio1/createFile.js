import fs from 'node:fs';

export function createFile (content) {
    fs.writeFile('meuarquivo.txt', content, 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}