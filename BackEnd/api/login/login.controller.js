
//Mark: importing paswword 
const {
    hashSync,
    genSaltSync,
    compareSync
} = require("bcrypt")

//Mark: Importing jwt sign
const {
    sign
} = require("jsonwebtoken")

//Mark: Importing login service
const {
    loginService
} = require("./login.service")

exports.loginController = (req, res) => {
    const body = req.body
    loginService(body.email, (err, results) => {
        if (err) {
            console.log(err)
        }
        if (!results) {
            return res.json({
                success: 0,
                data: "Invalid email or password"
            })
        }

        //  result.status == 1 check either user active or not 
        if (results.status == 1) {
            const result = compareSync(body.password, results.password)
            if (result) {
                results.password = undefined
                //creating json web token
                const jsontoken = sign({
                    result: results
                }, process.env.JSON_TOKEN_KEY, {
                    algorithm: 'HS256',

                })
                return res.json({
                    success: 1,
                    data: {
                        status: results.status,
                        name: results.name,
                        userId: results.userId,
                        type: results.type,
                        image: results.profileImage
                    },
                    message: "Login successfull.",
                    token: jsontoken
                })
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                })
            }
        } else {
            return res.json({
                success: 0,
                status: results.status,
                message: "Access Denied! Unauthorized User"
            })
        }
    })
}