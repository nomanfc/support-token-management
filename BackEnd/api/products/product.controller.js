
const{
createProductService,
updateProductService,
updateProductStatusService,
getAllProductService,
getAllProductShortService,
deleteProductService,
getProductByProductIdService
}=require("./product.service")

exports.createProductController = (req, res) => {
    const body = req.body
    createProductService(body, (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed"
            })
        } else {
            res.status(200).json({
                success: 1,
                message: "Product added successfully."
            })
        }
    })
}

exports.updateProductController = (req, res) => {
    const body = req.body
    updateProductService(body, (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed."
            })
        } else {
            if (results.affectedRows == 0) {
                res.json({
                    success: 0,
                    message: "No record found with this productId."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " Record updated successfully.",
                })
            }
        }
    })
}

exports.updateProductStatusController = (req, res) => {
    const body = req.body
    updateProductStatusService(body, (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed."
            })
        } else {
            if (results.affectedRows == 0) {
                res.json({
                    success: 0,
                    message: "No record found with this productId."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: "Status updated successfully.",
                })
            }
        }
    })
}

exports.getAllProductController = (req, res) => {
    getAllProductService((error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed."
            })
        } else {
            if (!results) {
                res.json({
                    success: 0,
                    message: "Records not found."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " All product fetched successfully.",
                    data: results
                })
            }
        }
    })
}

exports.getAllProductShortController = (req, res) => {
    getAllProductShortService((error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed."
            })
        } else {
            if (!results) {
                res.json({
                    success: 0,
                    message: "Records not found."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " All product fetched successfully.",
                    data: results
                })
            }
        }
    })
}

exports.getProductByProductIdController = (req, res) => {
    const productId = req.params.productId
    getProductByProductIdService(productId, (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed."
            })
        } else {
            if (!results) {
                res.json({
                    success: 0,
                    message: "No record not found with this productId."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " Product fetched successfully.",
                    data: results
                })
            }
        }
    })
}

exports.deleteProductController = (req, res) => {
    const productId = req.params.productId
    deleteProductService(productId, (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed."
            })
        } else {
            if (results.affectedRows == 0) {
                res.json({
                    success: 0,
                    message: "No record not found with this productId."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " Record deleted successfully.",
                })
            }
        }
    })
}