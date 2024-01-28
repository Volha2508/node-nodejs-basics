import fs from 'fs';
const copy = async () => {
    fs.cp('files','files_copy', { recursive: true, force: false, errorOnExist: true }, (err) => {
        if (err) throw ('FS operation failed');;
    });
};

await copy();
