const createArray = from => to => Array(to - from + 1).fill().map((_, idx) => from + idx);
const log = console.log;

const trace = label => val => {
    log(`${label}: ${val}`);
    return val;
}

const fns = {
    createArray,
    trace
};

module.exports = fns;
