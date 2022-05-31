
const {
    createTicketQuary,
    updateTicketQuary,
    updateTicketStatusQuary,
    getAllTicketsQuarry,
    getAllTicketsJoinDtailsQuarry,
    getTicketJoinByTicketNumberQuary,
    getTicketByTicketNumberQuary,
    checkticketNumberDuplicationQuary,
    deleteTicketQuary
} = require("./ticket.allquary")

const pool = require("../../config/database")

exports.createTicketService = (data, callBack) => {
    pool.query(createTicketQuary,
        [
            data.ticketNumber,
            data.supportId,
            data.productId,
            data.priority,
            data.subject,
            data.description,
            data.uploadedFile,
            data.userId,
            data.createdBy,
            data.status
        ],
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results)
            }
        })
}

exports.updateTicketService = (data, callBack) => {
    pool.query(updateTicketQuary,
        [
            data.supportId,
            data.productId,
            data.priority,
            data.subject,
            data.description,
            data.uploadedFile,
            data.userId,
            data.createdBy,
            data.status,
            data.id
        ],
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results)
            }
        })
}

exports.updateTicketStatusService = (data, callBack) => {
    pool.query(updateTicketStatusQuary,
        [
            data.status,
            data.id
        ],
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results)
            }
        })
}

exports.getAllTicketService = ( callBack) => {
    pool.query(getAllTicketsQuarry,
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results)
            }
        })
}

exports.getTicketByTicketNumberService = ( ticketNumber,callBack) => {
    pool.query(getTicketByTicketNumberQuary,
        ticketNumber,
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results[0])
            }
        })
}

exports.getAllTicketJoinDetailsService = ( callBack) => {
    pool.query(getAllTicketsJoinDtailsQuarry,
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results)
            }
        })
}

exports.getTicketJoinDetailsByTicketNumberService = ( ticketNumber,callBack) => {
    pool.query(getTicketJoinByTicketNumberQuary,
        ticketNumber,
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results[0])
            }
        })
}

exports.deleteTicketService = ( id,callBack) => {
    pool.query(deleteTicketQuary,
        id,
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results)
            }
        })
}


//MARK:- Check ticket duplication...
exports.checkTicketNumberDuplicationService = ( ticketNumber,callBack) => {
    pool.query(checkticketNumberDuplicationQuary,
        ticketNumber,
        (err, results, fields) => {
            if (err) {
                callBack(err, results)
            } else {
                callBack(null, results[0])
            }
        })
}