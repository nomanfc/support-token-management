const {
  createDepertmentQuarry,
  updateDepertmentQuarry,
  getAllDepertmentQuarry,
  getAllDepertmentShortQuarry,
  deleteDepertmentQuarry,
  getDepertmentByDepertmentIdQuarry,
} = require("./depertment.allquary");

const pool = require("../../config/database");

exports.createDepertmentService = (data, callBack) => {
  pool.query(
    createDepertmentQuarry,
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

exports.updateDepertmentService = (data, callBack) => {
  pool.query(
    updateDepertmentQuarry,
    [data.name, data.status, data.depertmentId],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results);
      }
    }
  );
};

exports.getAllDepertmentService = (callBack) => {
  pool.query(getAllDepertmentQuarry, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};

exports.getAllDepertmentShortService = (callBack) => {
  pool.query(getAllDepertmentShortQuarry, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};

exports.getDepertmentByDepertmentIdService = (depertmentId, callBack) => {
  pool.query(
    getDepertmentByDepertmentIdQuarry,
    depertmentId,
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results[0]);
      }
    }
  );
};

exports.deleteDepertmentService = (depertmentId, callBack) => {
  pool.query(deleteDepertmentQuarry, depertmentId, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};
