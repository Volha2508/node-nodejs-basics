import fs from 'fs';
const list = async () => {
    fs.readdir('files/', (err, files) => { 
        if (err) {
            throw ('FS operation failed'); 
        }
        else { 
          files.forEach(file => { console.log(file); });
        } 
    });
};

await list();