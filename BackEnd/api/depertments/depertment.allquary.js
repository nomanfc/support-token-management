exports.createDepertmentQuarry = `INSERT INTO depertments(name,status)
values(?,?)`;
exports.updateDepertmentQuarry = `UPDATE depertments SET name= ?, status= ? WHERE depertmentId =?`;
exports.getAllDepertmentQuarry = ` SELECT depertmentId,name,status FROM depertments `;
exports.getAllDepertmentShortQuarry = ` SELECT depertmentId,name FROM depertments WHERE status =1 `;
exports.getDepertmentByDepertmentIdQuarry = `SELECT depertmentId,name,status FROM depertments WHERE depertmentId = ?`;
exports.deleteDepertmentQuarry = `DELETE FROM depertments WHERE depertmentId = ?`;
