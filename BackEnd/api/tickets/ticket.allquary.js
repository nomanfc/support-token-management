

exports.createTicketQuary = `INSERT INTO tickets(ticketNumber,supportId,productId,priority,subject,description,uploadedFile,userId,createdBy,status)
values(?,?,?,?,?,?,?,?,?,?)`

exports.updateTicketQuary = `UPDATE tickets SET supportId=?,productId=?,priority=?,subject=?,description=?,uploadedFile=?,
userId=?,createdBy=?,status=?WHERE id = ?`

exports.updateTicketStatusQuary = `UPDATE tickets SET status=? WHERE id =?`

exports.getAllTicketsQuarry = `SELECT  id,ticketNumber,supportId ,productId ,priority,subject,description,
uploadedFile,userId,createdBy, status FROM tickets`

exports.getTicketByTicketNumberQuary = `SELECT  id,ticketNumber,supportId ,productId ,priority,subject,description,
uploadedFile,userId,createdBy, status FROM tickets  WHERE ticketNumber = ? `

exports.getTicketJoinByTicketNumberQuary = `SELECT  id,ticketNumber,depertment,productName,priority,subject,description,status,
clientName,clientNumber,clientEmail,createdBy,createrEmail,uploadedFile FROM ticketDetails  WHERE ticketNumber = ? `

 exports.getAllTicketsJoinDtailsQuarry = `SELECT  id,ticketNumber,depertment,productName,priority,subject,description,status,
 clientName,clientNumber,clientEmail,createdBy,createrEmail,uploadedFile FROM ticketDetails `

exports.deleteTicketQuary = `DELETE  FROM tickets WHERE id =?`

//MARK:- Ticket number duplicacy check 
exports.checkticketNumberDuplicationQuary = `SELECT ticketNumber FROM tickets WHERE ticketNumber = ? `


 //`SELECT tickets.id, ticketNumber,supports.title as depertment,
// IFNULL(products.name, tickets.productId) as productName,priority,subject,tickets.description,tickets.status,
//     clients.userId as clientId,clients.name as clientName,clients.phoneNumber as clientNumber,clients.email as clientEmail,
//     users.userId as createrId,users.name as createdBy,users.email as createrEmail, uploadedFile FROM
//      ((((tickets
//         LEFT JOIN supports ON tickets.supportId = supports.supportId)
//         LEFT JOIN clients ON  tickets.userId = clients.userId)
//         LEFT JOIN users ON  tickets.createdBy = users.userId)
//         LEFT JOIN products ON tickets.productId = products.productId) `