const {
  createCategoryQuarry,
  updateCategoryQuarry,
  getAllCategoryQuarry,
  getAllCategoryShortQuarry,
  deleteCategoryQuarry,
  getCategoryByCategoryIdQuarry,
} = require("./category.allquary");

const pool = require("../../config/database");

exports.createCategoryService = (data, callBack) => {
  pool.query(
    createCategoryQuarry,
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

exports.updateCategoryService = (data, callBack) => {
  pool.query(
    updateCategoryQuarry,
    [data.name, data.status, data.categoryId],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results);
      }
    }
  );
};

exports.getAllCategoryService = (callBack) => {
  pool.query(getAllCategoryQuarry, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};

exports.getAllCategoryShortService = (callBack) => {
  pool.query(getAllCategoryShortQuarry, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};

exports.getCategoryByCategoryIdService = (categoryId, callBack) => {
  pool.query(
    getCategoryByCategoryIdQuarry,
    categoryId,
    (error, results, fields) => {
      if (error) {
        callBack(error);
      } else {
        callBack(null, results[0]);
      }
    }
  );
};

exports.deleteCategoryService = (categoryId, callBack) => {
  pool.query(deleteCategoryQuarry, categoryId, (error, results, fields) => {
    if (error) {
      callBack(error);
    } else {
      callBack(null, results);
    }
  });
};
