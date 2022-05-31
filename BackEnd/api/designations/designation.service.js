const {
  createDesignationQuarry,
  updateDesignationQuarry,
  getAllDesignationQuarry,
  getAllDesignationShortQuarry,
  deleteDesignationQuarry,
  getDesignationByDesignationIdQuarry,
} = require("./designation.allquary");

const pool = require("../../config/database");

exports.createDesignationService = (data, callBack) => {
  pool.query(
    createDesignationQuarry,
    [data.name, data.status],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results);
      }
    }
  );
};

exports.updateDesignationService = (data, callBack) => {
  pool.query(
    updateDesignationQuarry,
    [data.name, data.status, data.designationId],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results);
      }
    }
  );
};

exports.getAllDesignationService = (callBack) => {
  pool.query(getAllDesignationQuarry, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};

exports.getAllDesignationShortService = (callBack) => {
  pool.query(getAllDesignationShortQuarry, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};

exports.getDesignationByDesignationIdService = (designationId, callBack) => {
  pool.query(
    getDesignationByDesignationIdQuarry,
    designationId,
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results[0]);
      }
    }
  );
};

exports.deleteDesignationService = (designationId, callBack) => {
  pool.query(
    deleteDesignationQuarry,
    designationId,
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results);
      }
    }
  );
};
