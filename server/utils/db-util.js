/**
 * Created by Administrator on 2017/9/8.
 */
const allConfig = require("./../../config")
const config = allConfig.database
const mysql = require("mysql")

const pool = mysql.createPool({
    host     :  config.HOST,
    user     : config.USERNAME,
    password : config.PASSWORD,
    database : config.DATABASE
})

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
              /*  console.log('db_')
                console.log(sql)*/
                connection.query(sql, values, ( err, rows) => {

                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

}

let createTable = function( sql ) {
    return query( sql, [] )
}


let findDataById = function( table,  id ) {
    let  _sql =  "SELECT * FROM ?? WHERE id = ? "
    return query( _sql, [ table, id ] )
}

let selectAllById = function( table, id ) {
    let  _sql =  "SELECT * FROM ?? WHERE id = ? "
    return query( _sql, [ table, id ] )
}

let selectByKey = function(table, key ) {
    let  _sql =  "SELECT * FROM ?? WHERE ? "
    return query( _sql, [ table, key ] )
}


let findDataByPage = function( table, start, end ) {
    let  _sql =  "SELECT * FROM ??  LIMIT ? , ? "
    return query( _sql, [ table,  start , end ] )
}


let insertData = function( table, values ) {
    let _sql = "INSERT INTO ?? SET ?"
    return query( _sql, [ table, values ] )
}


let updateData = function( table, values, id ) {
    let _sql = "UPDATE ?? SET ? WHERE id = ?"
    console.log('db')
    console.log(values)
    console.log(id)
    return query( _sql, [ table, values, id ] )
}


let deleteDataById = function(table,id) {
    let _sql = "DELETE FROM ?? WHERE id = ?"
    return query( _sql, [table, id] )
}


let select = function( table, keys ) {
    let  _sql =  "SELECT ?? FROM ?? "
    return query( _sql, [ keys, table ] )
}


let selectAll = function(table) {
    let  _sql =  "SELECT * FROM ?? "
    return query( _sql, [ table ] )
}


let count = function( table ) {
    let  _sql =  "SELECT COUNT(*) AS total_count FROM ?? "
    return query( _sql, [ table ] )
}

module.exports = {
    query,
    createTable,
    findDataById,
    findDataByPage,
    deleteDataById,
    insertData,
    updateData,
    select,
    selectByKey,
    selectAllById,
    selectAll,
    count,
}