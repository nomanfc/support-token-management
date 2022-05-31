const {
  createDesignationController,
  updateDesignationController,
  getAllDesignationController,
  getAllDesignationShortController,
  getDesignationByDesignationIdController,
  deleteDesignationController,
} = require("./designation.controller");

const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createDesignationController);
router.put("/", checkToken, updateDesignationController);
router.get("/", checkToken, getAllDesignationController);
router.get("/short", checkToken, getAllDesignationShortController);
router.get(
  "/:designationId",
  checkToken,
  getDesignationByDesignationIdController
);
router.delete("/:designationId", checkToken, deleteDesignationController);

module.exports = router;
