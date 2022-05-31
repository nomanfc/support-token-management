exports.createDesignationQuarry = `INSERT INTO designations(name,status)
values(?,?)`;
exports.updateDesignationQuarry = `UPDATE designations SET name=?,status=? where designationId =?`;
exports.getAllDesignationQuarry = ` SELECT designationId,name,status FROM designations `;
exports.getAllDesignationShortQuarry = ` SELECT designationId,name FROM designations WHERE status =1`;
exports.getDesignationByDesignationIdQuarry = `SELECT designationId,name,status FROM designations WHERE designationId = ?`;
exports.deleteDesignationQuarry = `DELETE FROM designations WHERE designationId = ?`;
