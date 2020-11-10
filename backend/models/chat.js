const db = require("../db");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
// const { getallusers } = require("../controllers/chat");

const getallusers = async (body) => {

//   db.conn.connect();

  let promise = new Promise(async (resolve, reject) => {
    await db.conn.query(
      `select * from users`,
      (err, rows, fields) => {
        console.log(rows);
        if (rows && rows.length > 0) {
          resolve(rows);
        } else {
         
            resolve({message:'No User Found',rows})
        }
      }
    );
  });
  return promise.then((data) => {
    return data;

  });
};


module.exports = {
  getallusers: getallusers,
};
