

const {
    createTeamMemberService,
    updateTeamMemberService,
    getAllTeamMemberService,
    getTeamMemberByUserIdService,
    deleteTeamMemberService,
    teamUserIdDuplicationCheckService,
    teamMemberEmailDuplicationCheckService
} = require("./team.service")

const {
    hashSync,
    genSaltSync,
    compareSync
} = require("bcrypt")

exports.createTeamMemberController = (req, res) => {
    const body = req.body
    const salt = genSaltSync(10)
    if (body.password != null) {
        body.password = hashSync(body.password, salt)
    }
    createTeamMemberService(body, (error, results) => {
        if (error) {
            //  console.log(error)
            return res.status(500).json({
                success: 0,
                message: "Database connection errror"
            })
        }
        return res.status(200).json({
            success: 1,
            message: "team meamber created successfully"
        })
    })
}

exports.updateTeamMemberController = (req, res) => {
    const body = req.body
    // const id = req.prams.id
    updateTeamMemberService(body, (error, results) => {
        if (error) {
            //  console.log(error)
            return res.status(500).json({
                success: 0,
                message: "Database connection errror"
            })
        }
        return res.status(200).json({
            success: 1,
            message: "team member updated successfully"
        })
    })
}

exports.getAllTeamMemberController = (req, res) => {
    getAllTeamMemberService((error, results) => {

        if (error) {
            console.log(error)
        }
        return res.json({
            success: 1,
            data: results
        })
    })
}

exports.getTeamMemberByUserIdController = (req, res) => {
    const userId = req.params.userId

    getTeamMemberByUserIdService(userId, (error, results) => {

        if (error) {
            console.log(error)
        }
        return res.json({
            success: 1,
            data: results
        })
    })
}

exports.deleteTeamMemberController = (req, res) => {
    const id = req.params.id
    deleteTeamMemberService(id, (error, results) => {
        if (error) {
            console.log(error)
            return res.json({
                success: 0,
                message: "connection error"
            })
        }
        return res.json({
            success: 1,
            message: "Record successfully deletd."
        })
    })
}

//MARK:- functions for check value is allready exits or not
exports.teamUserIdDuplicationCheckController = (req, res) => {
    const userId = req.params.userId
    teamUserIdDuplicationCheckService(userId, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "This user id is available to use."
            })
        }
        return res.json({
            success: 1,
            data: results || 0,
            message: "This user id allready taken try another one."
        })
    })
}

exports.teamMemberEmailDuplicationCheckController = (req, res) => {
    const email = req.body.email
    // console.log(email) //test purpose
    teamMemberEmailDuplicationCheckService(email, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "This email address is available to use."
            })
        }
        return res.json({
            success: 1,
            data: results || 0,
            message: "This email address allready taken try another one."
        })
    })
}