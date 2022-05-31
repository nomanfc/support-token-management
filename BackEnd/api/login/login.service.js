
const {
    gestUserByEmailQuary
} = require("./login.allquary")

const pool = require("../../config/database")

exports.loginService = (email, callBack) => {
    pool.query(gestUserByEmailQuary,
        email,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            }
            return callBack(null, results[0])
        }
    )
}