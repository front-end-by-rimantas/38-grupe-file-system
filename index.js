import { file } from './lib/file.js';
import { skaitomKarves } from './lib/karviuTurgus.js';

const karves = await skaitomKarves();
// console.log(karves);

const readStatus = await file.read('users', 'petras.json');
// console.log(readStatus);


const userMaryte = {
    name: 'Tevs',
    age: 87,
    isMarried: false,
}

const createStatus = await file.create('', 'tevas.json', userMaryte);
console.log('File status:', createStatus);

const batas = {
    color: 'yellow',
    size: 40,
}

const createStatus2 = await file.create('shoes', 'yellow.json', batas);
console.log('File status:', createStatus2);