const {
  createDesignationService,
  updateDesignationService,
  getAllDesignationService,
  getAllDesignationShortService,
  deleteDesignationService,
  getDesignationByDesignationIdService,
} = require("./designation.service");

exports.createDesignationController = (req, res) => {
  const body = req.body;
  createDesignationService(body, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed",
      });
    } else {
      res.status(200).json({
        success: 1,
        message: "Designation added successfully.",
      });
    }
  });
};

exports.updateDesignationController = (req, res) => {
  const body = req.body;
  updateDesignationService(body, (error, results) => {
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
          message: "No record found with this designationId.",
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

exports.getAllDesignationController = (req, res) => {
  getAllDesignationService((error, results) => {
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
          message: " All designation fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.getAllDesignationShortController = (req, res) => {
  getAllDesignationShortService((error, results) => {
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
          message: " All designation fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.getDesignationByDesignationIdController = (req, res) => {
  const designationId = req.params.designationId;
  getDesignationByDesignationIdService(designationId, (error, results) => {
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
          message: "No record not found with this designationId.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " Designation fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.deleteDesignationController = (req, res) => {
  const designationId = req.params.designationId;
  deleteDesignationService(designationId, (error, results) => {
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
          message: "No record not found with this designationId.",
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
