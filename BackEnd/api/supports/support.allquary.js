

exports.createSupportQuary = `INSERT INTO supports (title,description,department,status)values(?,?,?,?)`
exports.updateSupportQuary =`UPDATE supports set title=?,description =?,department =?, status =? WHERE supportId = ?`
exports.getAllSupportQuary = `SELECT supportId,title,description,department,status FROM supports`
exports.getAllSupportShortQuary = `SELECT supportId,title FROM supports WHERE status = 1`
exports.getSupportByIdQuary= `SELECT supportId,title,description,department,status FROM supports WHERE supportId =?`
exports.deleteSupportQuary = 'DELETE FROM supports WHERE supportId =?'
exports.UpdateStatusQuary = `UPDATE supports set status=? WHERE supportId=?`