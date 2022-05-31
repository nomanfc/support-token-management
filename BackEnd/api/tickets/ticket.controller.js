

const {
    createTicketService,
    updateTicketService,
    updateTicketStatusService,
    getAllTicketService,
    getAllTicketJoinDetailsService,
    getTicketByTicketNumberService,
    getTicketJoinDetailsByTicketNumberService,
    checkTicketNumberDuplicationService,
    deleteTicketService
} = require("./ticket.service")


const {
    ticketCreateMail,
    ticketClosedMail
    } =require("../email/email.controller")


exports.createTicketController = (req, res) => {
    const body = req.body
    createTicketService(body, (error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                error: error.sqlMessage
            })
        } else {
            //MARK: call email function
            ticketCreateMail(body)

            return res.status(200).json({
                success: 1,
                messege: "Ticket created successfully."
            })
            
        }
    })
}

exports.updateTicketController = (req, res) => {
    const body = req.body
    updateTicketService(body, (error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                error: error.sqlMessage
            })
        } else {
            return res.status(200).json({
                success: 1,
                messege: "Ticket updated successfully."
            })
        }
    })
}

exports.updateTicketStatusController = (req, res) => {
    const body = req.body
    updateTicketStatusService(body, (error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                error: error.sqlMessage
            })
        } else {
            //MARK: call email function
            if (body.status == "closed") ticketClosedMail(body)

            return res.status(200).json({
                success: 1,
                messege: "Ticket status updated successfully."
            })
        }
    })
}

exports.getAllTicketController = (req, res) => {
    getAllTicketService((error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                error: error.sqlMessage
            })
        } else {
            return res.status(200).json({
                success: 1,
                data: results
            })
        }
    })
}

exports.getTicketByTicketNumberController = (req, res) => {
    const ticketNumber = req.params.ticketNumber
    getTicketByTicketNumberService(ticketNumber, (error, results) => {
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
                    message: "No record not found with your given ticket number."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " Ticket number fetched successfully.",
                    data: results
                })
            }
        }
    })
}

exports.getAllTicketJoinDetailsController = (req, res) => {
    getAllTicketJoinDetailsService((error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                error: error.sqlMessage
            })
        } else {
            return res.status(200).json({
                success: 1,
                data: results
            })
        }
    })
}


exports.getTicketJoinDetailsByTicketNumberController = (req, res) => {
    const ticketNumber = req.params.ticketNumber
    getTicketJoinDetailsByTicketNumberService(ticketNumber, (error, results) => {
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
                    message: "No record not found with this designationId."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " Ticket number fetched successfully.",
                    data: results
                })
            }
        }
    })
}


exports.deleteTicketController = (req, res) => {
    const id = req.params.id
    deleteTicketService(id, (error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                error: error.sqlMessage,
                messege: "Database connection error"
            })
        } else {
            return res.status(200).json({
                success: 1,
                messege: "Ticket deleted successfully"
            })
        }
    })
}


exports.checkTicketNumberDuplicationController = (req, res) => {
    const ticketNumber = req.params.ticketNumber
    checkTicketNumberDuplicationService(ticketNumber, (error, results) => {
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
                    message: "Ticket number is available to use."
                })
            } else {
                res.status(200).json({
                    success: 1,
                    message: " Ticket number is taken, please try another one.",
                })
            }
        }
    })
}