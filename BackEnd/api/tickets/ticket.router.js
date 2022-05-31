
const{
createTicketController,
updateTicketController,
updateTicketStatusController,
getAllTicketController,
getAllTicketJoinDetailsController,
getTicketByTicketNumberController,
getTicketJoinDetailsByTicketNumberController,
checkTicketNumberDuplicationController,
deleteTicketController
} = require("./ticket.controller")

const{
checkToken
} = require("../../auth/token_validation")

const router = require("express").Router()

router.post("/",checkToken,createTicketController)
router.put("/",checkToken,updateTicketController)
router.get("/",checkToken,getAllTicketController)
router.get("/:ticketNumber",checkToken,getTicketByTicketNumberController)
router.get("/join",checkToken,getAllTicketJoinDetailsController)
router.get("/join/:ticketNumber",checkToken,getTicketJoinDetailsByTicketNumberController)
router.patch("/status",checkToken,updateTicketStatusController)
router.delete("/:id",checkToken,deleteTicketController)

router.get("/isduplicate/:ticketNumber",checkToken,checkTicketNumberDuplicationController)

module.exports = router