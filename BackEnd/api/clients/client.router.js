const {
  createClientController,
  updateClientController,
  getAllClientController,
  getClientByUserIdController,
  deleleClintController,
  userIdDuplicationCheckController,
  getAllmyTicketsController,
  emailDuplicationCheckController,
} = require("./client.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createClientController);
router.put("/", checkToken, updateClientController);
router.get("/", checkToken, getAllClientController);
router.get("/:userId", checkToken, getClientByUserIdController);
router.delete("/:id", checkToken, deleleClintController);
router.get("/mytickets/:userId", checkToken, getAllmyTicketsController);

router.get(
  "/isduplicate/:userId",
  checkToken,
  userIdDuplicationCheckController
);
router.post("/isduplicate", checkToken, emailDuplicationCheckController);
module.exports = router;
