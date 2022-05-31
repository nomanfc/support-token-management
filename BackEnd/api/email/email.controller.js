

const pool = require("../../config/database")


const {
    getProductByProductIdService
} = require("../products/product.service")
const {
    sendMailForNewTicket,
    sendMailForClosingTicket
} = require("./email.service")

const {
    getTicketDetailsforEmail,
    getTicketDetailsforClosedTicketQuary
} = require("./email.allquary")

//MARK: gather info for email after successful ticket creation....
exports.ticketCreateMail = (ticket) => {
    pool.query(getTicketDetailsforEmail, ticket.ticketNumber,
        (error, result, fields) => {
            if (error) {
                console.log("database error", error)
            } else {
                console.log(result)
                //MARK: Calling mail function
                sendMailForNewTicket(result[0])
                    .then((result) => console.log('Email sent...', result))
                    .catch((error) => console.log(error.message))
            }
        }
    )

}

exports.ticketClosedMail = (ticket) => {
    pool.query(getTicketDetailsforClosedTicketQuary, ticket.id,
        (error, result, fields) => {
            if (error) {
                console.log("database error", error)
            } else {
                console.log(result)
                //MARK: Calling mail function
                sendMailForClosingTicket(result[0])
                    .then((result) => console.log('Email sent...', result))
                    .catch((error) => console.log(error.message))
            }
        }
    )

}