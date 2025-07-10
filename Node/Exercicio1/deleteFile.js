import fs from 'node:fs';

export function deleteFile () {
    fs.unlink("meuarquivo.txt", (err) => {
        if (err) {
            console.log(err);
        }
    })
}