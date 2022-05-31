const {
  createCategoryController,
  updateCategoryController,
  getAllCategoryController,
  getCategoryByCategoryIdController,
  deleteCategoryController,
  getAllCategoryShortController,
} = require("./category.controller");

const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createCategoryController);
router.put("/", checkToken, updateCategoryController);
router.get("/", checkToken, getAllCategoryController);
router.get("/short", checkToken, getAllCategoryShortController);
router.get("/:categoryId", checkToken, getCategoryByCategoryIdController);
router.delete("/:categoryId", checkToken, deleteCategoryController);

module.exports = router;
