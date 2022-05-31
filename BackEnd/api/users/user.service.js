


const pool = require("../../config/database")

const {
  userUpdateQuary,
  getUserByIdQuary,
  getAllUsersQuary,
  changeUserStatusQuary,
  userIdDuplicationCheckQuary,
  userEmailDuplicationCheckQuary
} = require("./user.allquary")

exports.updateUser = (data, callBack) => {
  pool.query(userUpdateQuary,
    [
      //Auth info
      
      data.type,
      data.status,
      data.email,
      data.password,
      data.accessToken,
      data.id
    ],
    (error, results, fields) => {
      if (error) {
        callBack(error)
        console.log("no updated") //test purpose
      }
      console.log("updated", results) //test purpose
      return callBack(null, results)
    }
  )
}

exports.updateUserStatusService = (data, callBack) => {
  pool.query(changeUserStatusQuary,
    [
      data.status,
      data.userId
    ],
    (error, results, fields) => {
      if (error) {
        callBack(error)
        console.log("no updated") //test purpose
      }
      console.log("updated", results) //test purpose
      return callBack(null, results)
    }
  )
}

exports.getUserByUserId = (userId, callBack) => {
  pool.query(getUserByIdQuary,
    userId,
    (error, results, fields) => {
      if (error) {
        callBack(error)
      }
      console.log(results)
      return callBack(null, results[0])
    }
  )
}

exports.getUsers = callBack => {
  pool.query(getAllUsersQuary,
    (error, results, fields) => {
      if (error) {
        callBack(error)
      }
      return callBack(null, results)
    }
  )
}

//Section :  for check value is allready exits or not

exports.getUserIdDuplication = (userId, callBack) => {
  pool.query(userIdDuplicationCheckQuary,
    [userId],
    (error, results, fields) => {
      if (error) {
        callBack(error)
      }
      return callBack(null, results[0])
    }
  )
}

exports.getUserEmailDuplication = (email, callBack) => {
  pool.query(userEmailDuplicationCheckQuary,
    email,
    (error, results, fields) => {
      if (error) {
        callBack(error)
      }
      return callBack(null, results[0])
    }
  )
}