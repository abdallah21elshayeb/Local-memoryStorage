var pool = require("./pool");

exports.query = (queryText, queryValues) => {
return new Promise((resolve,reject) => {
  pool.query(queryText,queryValues).then(res => {
    resolve(res);
  })
  .catch(err => {
    reject(err);
  })
})
}