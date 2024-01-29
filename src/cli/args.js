import { argv } from 'node:process';
const parseArgs = () => {
    argv.forEach( (val, index, arr) => {
        if( val.startsWith('--') ) {
            console.log( val.slice(2),'is',arr[index+1]);
        }
    } );
};

parseArgs();