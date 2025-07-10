import fs from 'node:fs';

export function showFile() {
    fs.readFile('meuarquivo.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    })
}