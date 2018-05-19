"use strict";
const utils = require('./utils');
const { trace } = utils;

/* 
const magicNumber = 8;
magicNumber++;
 */
const superMagicNumbers = [10,21,92];
const magicNumbers = Object.freeze([1,2,3]);


trace('magicNumbers ===>')(magicNumbers);