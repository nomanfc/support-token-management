const {
  createDepertmentController,
  updateDepertmentController,
  getAllDepertmentController,
  getAllDepertmentShortController,
  getDepertmentByDepertmentIdController,
  deleteDepertmentController,
} = require("./depertment.controller");

const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createDepertmentController);
router.put("/", checkToken, updateDepertmentController);
router.get("/", checkToken, getAllDepertmentController);
router.get("/short", checkToken, getAllDepertmentShortController);
router.get("/:depertmentId", checkToken, getDepertmentByDepertmentIdController);
router.delete("/:depertmentId", checkToken, deleteDepertmentController);

module.exports = router;
