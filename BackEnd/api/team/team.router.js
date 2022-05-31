

const {
    createTeamMemberController,
    updateTeamMemberController,
    getAllTeamMemberController,
    getTeamMemberByUserIdController,
    deleteTeamMemberController,
    teamUserIdDuplicationCheckController,
    teamMemberEmailDuplicationCheckController
} = require("./team.controller")
const {
    checkToken
} = require("../../auth/token_validation")

const router = require("express").Router()

router.post("/", checkToken, createTeamMemberController)
router.put("/", checkToken, updateTeamMemberController)
router.get("/", checkToken, getAllTeamMemberController)
router.get("/:userId", checkToken, getTeamMemberByUserIdController)
router.delete("/:id", checkToken, deleteTeamMemberController)

router.get("/isduplicate/:userId", checkToken, teamUserIdDuplicationCheckController)
router.post("/isduplicate", checkToken, teamMemberEmailDuplicationCheckController)

module.exports = router