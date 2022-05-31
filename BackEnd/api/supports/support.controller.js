

const {
    createSupportService,
    updateSupportService,
    getAllSupportService,
    getAllSupportShortService,
    getSupportbySupportIdService,
    deleteSupportService,
    updateSupportStatusService
} = require("./support.service")

exports.createSupportController = (req, res) => {
    const body = req.body
    createSupportService(body, (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({
                success: 0,
                message: "Database connection failed"
            })
        } else {
            res.status(200).json({
                success: 1,
                message: "Support added successfully."
            })
        }
    })
}

exports.updateSupportController = (req, res) => {
    const body = req.body
    updateSupportService(body, (error, results) => {
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
                    message: "No record found with this supportId."
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

exports.updateSupportStatusController = (req, res) => {
    const body = req.body
    updateSupportStatusService(body, (error, results) => {
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
                    message: "No record found with this supportId."
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

exports.getAllSupportController = (req, res) => {
    getAllSupportService((error, results) => {
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
                    message: " All support fetched successfully.",
                    data: results
                })
            }
        }
    })
}

exports.getAllSupportShortController = (req, res) => {
    getAllSupportShortService((error, results) => {
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
                    message: " All support fetched successfully.",
                    data: results
                })
            }
        }
    })
}

exports.getSupportBySupportIdController = (req, res) => {
    const supportId = req.params.supportId
    getSupportbySupportIdService(supportId, (error, results) => {
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
                    message: "No record not found with this supportId."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " Support fetched successfully.",
                    data: results
                })
            }
        }
    })
}

exports.deleteSupportController = (req, res) => {
    const supportId = req.params.supportId
    deleteSupportService(supportId, (error, results) => {
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
                    message: "No record not found with this supportId."
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