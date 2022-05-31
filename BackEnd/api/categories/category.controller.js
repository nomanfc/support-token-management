const {
  createCategoryService,
  updateCategoryService,
  getAllCategoryService,
  getAllCategoryShortService,
  deleteCategoryService,
  getCategoryByCategoryIdService,
} = require("./category.service");

exports.createCategoryController = (req, res) => {
  const body = req.body;
  createCategoryService(body, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed",
      });
    } else {
      res.status(200).json({
        success: 1,
        message: "Category added successfully.",
      });
    }
  });
};

exports.updateCategoryController = (req, res) => {
  const body = req.body;
  updateCategoryService(body, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed.",
      });
    } else {
      if (results.affectedRows == 0) {
        res.json({
          success: 0,
          message: "No record found with this categoryId.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " Record updated successfully.",
        });
      }
    }
  });
};

exports.getAllCategoryController = (req, res) => {
  getAllCategoryService((error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed.",
      });
    } else {
      if (!results) {
        res.json({
          success: 0,
          message: "Records not found.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " All category fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.getAllCategoryShortController = (req, res) => {
  getAllCategoryShortService((error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed.",
      });
    } else {
      if (!results) {
        res.json({
          success: 0,
          message: "Records not found.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " All category fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.getCategoryByCategoryIdController = (req, res) => {
  const categoryId = req.params.categoryId;
  getCategoryByCategoryIdService(categoryId, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed.",
      });
    } else {
      if (!results) {
        res.json({
          success: 0,
          message: "No record found with this categoryId.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " Category fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.deleteCategoryController = (req, res) => {
  const categoryId = req.params.categoryId;
  deleteCategoryService(categoryId, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed.",
      });
    } else {
      if (results.affectedRows == 0) {
        res.json({
          success: 0,
          message: "No record not found with this categoryId.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " Record deleted successfully.",
        });
      }
    }
  });
};
