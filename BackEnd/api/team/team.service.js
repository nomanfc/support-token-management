
const {
    teamMemberCreateQuary,
    teamMemberUpdateQuary,
    getAllTeamMemberQuary,
    deleteTeamMemberQuary,
    teamUserIdDuplicationCheckQuary,
    teamMemberEmailDuplicationCheckQuary,
    getTeamMemberByUserIdQuary
} = require("./team.allquary")

const pool = require("../../config/database")

exports.createTeamMemberService = (data, callBack) => {
    pool.query(teamMemberCreateQuary,
        [
            
            data.name,
            data.userId,
            data.type,
            data.status,
            data.email,
            data.password,
            data.phoneNumber,
            data.birthDate,
            data.gender,
            data.designation,
            data.department,
            data.address,
            data.facebook,
            data.linkedin,
            data.twitter,
            data.skyp,
            data.git,
            data.web,
            data.youtube,
            data.profileImage
        ],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callBack(error)
            }
            return callBack(null, results)
        }
    )
}

exports.updateTeamMemberService = (data, callBack) => {
    pool.query(teamMemberUpdateQuary,
        [
            data.name,
            data.type,
            data.email,
            data.phoneNumber,
            data.birthDate,
            data.gender,
            data.designation,
            data.department,
            data.address,
            data.facebook,
            data.linkedin,
            data.twitter,
            data.skyp,
            data.git,
            data.web,
            data.youtube,
            data.profileImage,
            data.id
        ],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callBack(error)
            }
            return callBack(null, results)
        }
    )
}

exports.getAllTeamMemberService = (callBack) => {
    pool.query(getAllTeamMemberQuary,
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callBack(error)
            }
            return callBack(null, results)
        }
    )
}

exports.getTeamMemberByUserIdService = (userId, callBack) => {
    pool.query(getTeamMemberByUserIdQuary,
        userId,
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callBack(error)
            }
            return callBack(null, results[0])
        }
    )
}

exports.deleteTeamMemberService = (id, callBack) => {
    pool.query(deleteTeamMemberQuary,
        id,
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callBack(error)
            }
            return callBack(null, results)
        }
    )
}

//Secton: Duplicatioion Check
exports.teamUserIdDuplicationCheckService = (userId, callBack) => {
    pool.query(teamUserIdDuplicationCheckQuary,
        [userId,
            userId
        ],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callBack(error)
            }
            return callBack(null, results[0])
        }
    )
}

exports.teamMemberEmailDuplicationCheckService = (email, callBack) => {
    pool.query(teamMemberEmailDuplicationCheckQuary,
        [email,
            email
        ],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callBack(error)
            }
            return callBack(null, results[0])
        }
    )
}