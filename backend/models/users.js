const db = require("../db");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { resolve } = require("path");

const signup = async (body) => {
    console.log(body);
  let { FirstName, LastName, email, password } = body.data;

//   db.conn.connect();

  let promise = new Promise(async (resolve, reject) => {
    await db.conn.query(
      `select * from users where email = '${email}'`,
      (err, rows, fields) => {
        console.log(rows);
        if (rows.length > 0) {
          data = {
            error: 1,
            message: "User Already Exist",
          };
          resolve(data);
        } else {
          bcrypt.hash(password, 10, (err, hash_password) => {
            db.conn.query(
              `insert into users(email,password,first_name,last_name) values('${email}','${hash_password}','${FirstName}','${LastName}')`,
              (err) => {
                if (err) {
                  console.log("UserModel@Signup", err);
                  data = {
                    error: 1,
                    message: "Error saving data",
                  };
                  resolve(data);
                } else {
                  data = {
                    error: 0,
                    message: "Sign Up Successfully",
                  };
                  resolve(data);
                }
              }
            );
          });
        }
      }
    );
  });
  return promise.then((data) => {
    return data;

  });
};

const signin = async (body) => {
//   db.connect();

  let { email, password } = body.data;
  let signInPromise = new Promise(async (resolve, reject) => {
    await db.conn.query(
      `select * from users where email = '${email}'`,
      (err, rows, fields) => {
        if (err) {
          console.log("Error: ", err);
          resolve("DB Error");
        }
        if (rows && rows.length > 0) {
          console.log(rows[0].password);

          var token = jwt.sign(email, "secret_key");
          bcrypt.compare(password, rows[0].password, (err, res) => {
            console.log("Bcrypt Comparison: ", res);
            if (res) {
              resolve({
                error: 0,
                message: "Login Successfully",
                user: rows,
                token: token,
              });
            } else {
              resolve({
                error: 1,
                message: "Invalid Username or Password",
              });
            }
          });
        } else {
          resolve({
            error: 1,
            message: "Invalid Username or Password",
          });
        }
      }
    );
  });

  return signInPromise.then((data) => {
    return data;
  });
};

const getProducts = async (body) => {
  db.connect();

  console.log(body);
  var promise = new Promise(async (resolve, reject) => {
    await db.con.query(
      `select uuid as user_uuid from users where email = '${body}'`,
      async(err, rows) => {
        console.log(err);
        if (rows.length > 0) {
          let user_uuid = rows[0].user_uuid;
          await db.con.query(`select * from products where user_uuid = '${user_uuid}'`,(err,rows,fields)=>{
            resolve(rows);
          })

        }
      }
    );
  });
  return promise.then((data) => {
    return data;
  });
};

module.exports = {
  signup: signup,
  signin: signin,
  getProducts: getProducts,
};
