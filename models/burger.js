// import orm.js into burger.js
const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res));
    },

    create(cols, vals, cb) {
        orm.create('burgers', cols, vals, (res) => cb(res));
    },
    
    update(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, (res) => cb(res));
    }
};

// Export at the end of the burger.js file.
module.exports = burger;