

exports.gestUserByEmailQuary = `SELECT userId,name,type,status,email, password,profileImage FROM users 
WHERE email = ?`