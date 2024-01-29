import fs from 'fs';
const create = async () => {
    fs.writeFile('files/fresh.txt', 'I am fresh and young', { flag: 'ax' }, (err) => {
        if (err) throw ('FS operation failed');
    });
};
await create();