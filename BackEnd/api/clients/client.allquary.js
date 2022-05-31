exports.clientCreateQuary = `INSERT INTO users (name,userId,type,status,email,password,phoneNumber,businessSector,
    contactPerson,contactNumber,address,facebook,linkedin,twitter,skyp,git,web,youtube,profileImage) 
    values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

exports.clientUpdateQuary = `UPDATE users SET name =?,email=?,phoneNumber=?,businessSector=?,
    contactPerson=?,contactNumber=?,address=?,facebook=?,linkedin=?,twitter=?,skyp=?,git=?,
    web=?,youtube=?,profileImage=? WHERE id =?`;

exports.getClientByUserIdQuary = `SELECT id,name,userId,type,email,phoneNumber,businessSector,
contactPerson,contactNumber,address,facebook,linkedin,twitter,skyp,git,web,youtube,profileImage FROM users WHERE userId = ?`;

exports.getAllClientsQuary = `SELECT id,name,userId,type,email,phoneNumber,businessSector,
contactPerson,contactNumber,address,facebook,linkedin,twitter,skyp,git,web,youtube,profileImage FROM clients`;

exports.deleteClientQuary = "delete FROM users WHERE id =?";

exports.myTicketsQuary = `SELECT  id,ticketNumber,depertment,productName,priority,subject,description,status,
clientName,clientNumber,clientEmail,createdBy,createrEmail,uploadedFile FROM ticketDetails  WHERE clientId = ? `;

//Mark:- Quary for check duplication
exports.userIdDuplicationCheckQuary = `SELECT userId FROM users WHERE userId = ?`;

exports.clientEmailDuplicationCheckQuary = `SELECT email FROM users WHERE email = ?`;
