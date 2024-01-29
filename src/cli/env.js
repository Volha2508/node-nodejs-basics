import { env } from 'node:process';
const parseEnv = () => {
    const keys = Object.keys(env);
    keys.forEach((key) => {
        if( key.startsWith('RSS_') ) {
            console.log( key,'=',env[key] );
        }
    });
};
parseEnv();