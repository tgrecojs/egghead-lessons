const utils = require('./utils');
const { trace } = utils;

/* 
const magicNumber = 8;
magicNumber++;
 */

const magicNumbers = Object.freeze([1,2,3]);

trace('magicNumbers ===>')(magicNumbers);