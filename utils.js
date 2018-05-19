const chalk = require('chalk');
const createArray = from => to => Array(to - from + 1).fill().map((_, idx) => from + idx);
const defaultColor = { blue: 'blue'}

const log = console.log;

const trace = label => val => {
    log(chalk.red.bold(`${label}: ${val}`));
    return val;
}

const fns = {
    createArray,
    trace
};

module.exports = fns;
