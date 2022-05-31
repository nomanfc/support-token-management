

const {
    createSupportController,
    updateSupportController,
    getAllSupportController,
    getAllSupportShortController,
    getSupportBySupportIdController,
    deleteSupportController,
    updateSupportStatusController
} = require("./support.controller")

const {
    checkToken
} = require("../../auth/token_validation")

const router = require("express").Router()

router.post("/", checkToken,createSupportController)
router.put("/", checkToken,updateSupportController)
router.get("/",checkToken, getAllSupportController)
router.get("/short",checkToken, getAllSupportShortController)
router.get("/:supportId", checkToken,getSupportBySupportIdController)
router.delete("/:supportId", checkToken,deleteSupportController)
router.patch("/status/",checkToken,updateSupportStatusController)

module.exports = router