

const {
    createProductQuarry,
    updateProductQuarry,
    updateProductStatusQuary,
    getAllProductQuarry,
    gettAllproductShortQuarry,
    deleteProductQuarry,
    getProductByProductIdQuarry
} = require("./product.allquary")


const pool = require("../../config/database")

exports.createProductService = (data, callBack) => {
    pool.query(createProductQuarry,
        [
            data.name,
            data.status,
            data.description,
            data.category
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}

exports.updateProductService = (data, callBack) => {
    pool.query(updateProductQuarry,
        [
            data.name,
            data.description,
            data.category,
            data.productId
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        }
    )
}

exports.updateProductStatusService = (data, callBack) => {
    pool.query(updateProductStatusQuary,
        [
            data.status,
            data.productId
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        }
    )
}

exports.getAllProductService = (callBack) => {
    pool.query(getAllProductQuarry,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}

exports.getAllProductShortService = (callBack) => {
    pool.query(gettAllproductShortQuarry,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}

exports.getProductByProductIdService = (productId, callBack) => {
    pool.query(getProductByProductIdQuarry,
        productId,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results[0])
            }
        })
}

exports.deleteProductService = (productId, callBack) => {
    pool.query(deleteProductQuarry,
        productId,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}