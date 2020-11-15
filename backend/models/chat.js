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


const getUserConversations = async (body) => {

  //   db.conn.connect();

  
    let promise = new Promise(async (resolve, reject) => {
      await db.conn.query(
        `select * from conversations where user1 = '${body.user_id}' OR user2 = '${body.user_id}'`,
        async(err, rows, fields) => {
          if (rows && rows.length > 0) {
            // console.log(rows);

            let result =  rows.map(async(item)=>{
                if(item.user1 != body.user_id ){
                  console.log("Item.user 1: ",item.user1)
                  await db.conn.query(
                    `select * from users where uuid = '${item.user1}'`
                  ,(err,rows,fields)=>{
                    // console.log("Rows Data: ", rows);
                    console.log("Row first name: ", rows[0].first_name)
                      item.ConversationName = rows[0].first_name;
                      console.log("Testing: ", item);
                  })
                }else{
                  // console.log("Item.user 2: ",item.user1)

                  await db.conn.query(
                    `select * from users where uuid = '${item.user2}'`
                  ,(err,rows,fields)=>{
                    // console.log("Rows Data: ", rows);
                    // console.log("Row first name: ", rows[0].first_name)


                    item.ConversationName = rows[0].first_name
                    // console.log("Testing: ", item);
                  
                  })
                }
            })

            console.log('Rows:::::::::::', result);
          
            resolve(result);
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
  getUserConversations: getUserConversations,
};
