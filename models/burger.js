const orm = require("../config/orm");


//   * Also inside `burger.js`, create the 
//  will call the ORM functions using burger
//  ific input for the ORM.

const burger = {
    all: async () => {

        const result = await orm.all("burgers");  // the string is the name of the DB table

        return result;
    },

    create: async (cols, vals) => {
        const result = await orm.create("burgers", cols, vals);
        //console.log(vals.length);
        return result;
      },

    update: async (objColVals, condition) => {

        orm.update("burgers", objColVals, condition, (res) => {
            return(res);
          });
    }
    
}



module.exports = burger;