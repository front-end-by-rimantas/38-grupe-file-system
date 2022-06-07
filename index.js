import { file } from './lib/file.js';
import { skaitomKarves } from './lib/karviuTurgus.js';

const karves = await skaitomKarves();
console.log(karves);

const readStatus = await file.read('users', 'petras.json');
console.log(readStatus);


// const user = {
//     name: 'Petras',
//     age: 99,
//     isLoggedIn: false,
// }

// const status = file.create('users', 'petras.json', user);
// console.log('File status:', status);