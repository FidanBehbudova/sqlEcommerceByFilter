const mysql = require("mysql2")
const config = require("../config")

let connection = mysql.createConnection(config.db)

connection.connect(function (err) {
    if (err) {
        console.log(err)
    }
    connection.query("select *from bagshoes_filter", (err, res) => {
        // console.log(res)
    })

})

module.exports = connection.promise()