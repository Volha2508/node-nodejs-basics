import fs from 'fs';
const list = async () => {
    fs.readdir('src/fs/files/', (err, files) => { 
        if (err) {
            throw ('FS operation failed'); 
        }
        else { 
          files.forEach(file => { console.log(file); });
        } 
    });
};

await list();