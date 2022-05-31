exports.getTicketDetailsforEmail = `SELECT  ticketNumber,productName,priority,subject,description,status,clientName,clientNumber,
clientEmail,createdBy,createrEmail FROM ticketDetails WHERE ticketNumber = ? `;

exports.getTicketDetailsforClosedTicketQuary = `SELECT  ticketNumber,productName,priority,subject,description,status,clientName,clientNumber,
clientEmail,createdBy,createrEmail FROM ticketDetails WHERE id = ? `;
