

const {
    createProductController,
    updateProductController,
    getAllProductController,
    getAllProductShortController,
    getProductByProductIdController,
    deleteProductController,
    updateProductStatusController
} = require("./product.controller")

const {
    checkToken
} = require("../../auth/token_validation")

const router = require("express").Router()

router.post("/", checkToken,createProductController)
router.put("/", checkToken,updateProductController)
router.get("/",checkToken, getAllProductController)
router.get("/short",checkToken, getAllProductShortController)
router.get("/:productId", checkToken,getProductByProductIdController)
router.delete("/:productId", checkToken,deleteProductController)
router.patch("/status/",checkToken,updateProductStatusController)

module.exports = router