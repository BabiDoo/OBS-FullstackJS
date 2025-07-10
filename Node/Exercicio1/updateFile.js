import fs from 'node:fs';

export function updateFile(newContent) {
    fs.writeFile('meuarquivo.txt', newContent, 'utf-8', (err) => {
        if(err) {
            console.log(err);
        }
    })
}