

const {
    UserByUserId,
    Users,
    UpdateUser,

    changeUserStatusController,
    UserIdDuplicationCheck,
    EmailDuplicationCheck
} = require("./user.controller")

const router = require('express').Router()

const {
    checkToken
} = require("../../auth/token_validation")

router.get("/:userId", checkToken, UserByUserId)
router.get("/", checkToken, Users)
router.put("/", checkToken, UpdateUser)
router.patch("/status/", checkToken, changeUserStatusController)

//Routers for checking valuse exitxtance.
router.get("/isduplicate/:userId", checkToken, UserIdDuplicationCheck)
router.post("/isduplicate", checkToken, EmailDuplicationCheck)

module.exports = router