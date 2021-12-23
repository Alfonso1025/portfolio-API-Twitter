import '@babel/polyfill';

let test = "Test ES10";
console.log(test);

import app from './server'


async function main() {
	await app.listen(app.get('port'));
	console.log('Server on port ',app.get('port'));

    
}


main()