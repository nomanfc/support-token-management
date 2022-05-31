

exports.userUpdateQuary = `UPDATE users set type=?,status=?,email=?, password=?, accessToken=? WHERE id =?`;

exports.getUserByIdQuary = `SELECT id,userId, name,type,status, email,phoneNumber FROM users
    WHERE userId = ?`;

exports.getAllUsersQuary = `SELECT id,userId, name,type,status,email
FROM users WHERE password IS NOT NULL`;

exports.changeUserStatusQuary = `UPDATE users set status = ? WHERE userId =?`;

//Mark:- Quary for check duplication
exports.userIdDuplicationCheckQuary = `SELECT userId FROM users WHERE userId = ?`;

exports.userEmailDuplicationCheckQuary = `SELECT email FROM users WHERE email = ?`;
