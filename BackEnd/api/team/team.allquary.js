
exports.teamMemberCreateQuary = `INSERT INTO users (name,userId,type,status,email,password,phoneNumber,birthDate,gender,
    designation,department,address,facebook,linkedin,twitter,skyp,git,web,youtube,profileImage) 
    values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

exports.teamMemberUpdateQuary = `UPDATE users set name=?,type=?,email=?,phoneNumber=?,birthDate=?,gender=?,
designation=?,department=?,address=?,facebook=?,linkedin=?,twitter=?,skyp=?,git=?,web=?,youtube=?,profileImage=?
WHERE id =?`

exports.getTeamMemberByUserIdQuary = `SELECT id,name,userId,type,email,phoneNumber,birthDate,gender,
designation,department,address,facebook,linkedin,twitter,skyp,git,web,youtube,profileImage FROM users WHERE userId = ?`

exports.getAllTeamMemberQuary = `SELECT id,name,userId,type,email,phoneNumber,birthDate,gender,
designation,department,address,facebook,linkedin,twitter,skyp,git,web,youtube,profileImage FROM teams `

exports.deleteTeamMemberQuary = 'DELETE  FROM users WHERE id =?'

//Mark:- Quary for check duplication 
exports.teamUserIdDuplicationCheckQuary = `SELECT userId FROM users WHERE userId = ?`

exports.teamMemberEmailDuplicationCheckQuary =  `SELECT email FROM users WHERE email = ?`