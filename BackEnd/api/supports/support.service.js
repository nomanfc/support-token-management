
const {
    createSupportQuary,
    updateSupportQuary,
    getAllSupportQuary,
    getAllSupportShortQuary,
    getSupportByIdQuary,
    deleteSupportQuary,
    UpdateStatusQuary
} = require("./support.allquary")

const pool = require("../../config/database")

exports.createSupportService = (data, callBack) => {
    pool.query(createSupportQuary,
        [
            data.title,
            data.description,
            data.department,
            data.status
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}

exports.updateSupportService = (data, callBack) => {
    pool.query(updateSupportQuary,
        [
            data.title,
            data.description,
            data.department,
            data.status,
            data.supportId
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

exports.updateSupportStatusService = (data, callBack) => {
    pool.query(UpdateStatusQuary,
        [
            data.status,
            data.supportId
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

exports.getAllSupportService = (callBack) => {
    pool.query(getAllSupportQuary,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}

exports.getAllSupportShortService = (callBack) => {
    pool.query(getAllSupportShortQuary,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}

exports.getSupportbySupportIdService = (supportId, callBack) => {
    pool.query(getSupportByIdQuary,
        supportId,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results[0])
            }
        })
}

exports.deleteSupportService = (supportId, callBack) => {
    pool.query(deleteSupportQuary,
        supportId,
        (error, results, fields) => {
            if (error) {
                callBack(error)
            } else {
                callBack(null, results)
            }
        })
}