    
var connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableName,cb) {
        var queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },




// var connection = require('./connection.js');

// var orm = {
//     all: function (tableInput, cb) {
//         connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
//             if (err) throw err;
//             cb(result)
//         })
//     },
    // update: function (tableName, columnToUpdate, condition, cb) {
    //     var queryString = 'UPDATE ' + tableName + ' SET ' + columnToUpdate + ' WHERE ' + condition;
    //     connection.query(queryString, function (err, result) {
    //         if (err) throw err;
    //         cb(result)
    //     })

    // },
    // insert: function(value, cb) {
    //         var queryString = "insert into burgers(burger_name)";
        
    //         queryString += " values (";
    //         queryString += value +")";
            
    //         // insert into burgers(burger_name) values (value)
    //         console.log(queryString);
    //         connection.query(queryString, function(err, result) {
    //           if (err) {
    //             throw err;
    //           }
        
    //           cb(result);
    //         });
    //       },


    // }

    insertOne: function (tableName, burger_name, cb) {
      var queryString = "INSERT INTO " + tableName + " (burger_name) VALUES ('" + burger_name + "')";
      console.log(queryString);
      connection.query(queryString, function (err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },
  updateOne: function (tableName, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + tableName;

      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;
      // console.log(condition);

      connection.query(queryString, function (err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },
};



module.exports = orm;