const connection = require("./connection")

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
const printQuestionMarks = num => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  const objToSql = ob => {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  const orm = {
    all: async (tableInput) => {
      const queryString = `SELECT * FROM ${tableInput}`;
      const result = await connection.query(queryString);
      return result;
    },
  
    create: async (table, cols, vals) => {
      // console.log("vals in orm" + vals);
      // console.log("lenth of vals", vals.length)
      //console.log(queryString);

      let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
      const result = await connection.query(queryString, vals);
      return result;
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    update: async (table, objColVals, condition) => {
      let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
  
      console.log(queryString);
      const result = await connection.query(queryString);
  
      return result;
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;


// * `selectAll()`
// * `insertOne()`
// * `updateOne()`
