const {
  createDepertmentService,
  updateDepertmentService,
  getAllDepertmentService,
  getAllDepertmentShortService,
  deleteDepertmentService,
  getDepertmentByDepertmentIdService,
} = require("./depertment.service");

exports.createDepertmentController = (req, res) => {
  const body = req.body;
  createDepertmentService(body, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: "Database connection failed",
      });
    } else {
      res.status(200).json({
        success: 1,
        message: "Depertment added successfully.",
      });
    }
  });
};

exports.updateDepertmentController = (req, res) => {
  const body = req.body;
  updateDepertmentService(body, (error, results) => {
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
          message: "No record found with this depertmentId.",
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

exports.getAllDepertmentController = (req, res) => {
  getAllDepertmentService((error, results) => {
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
          message: " All depertment fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.getAllDepertmentShortController = (req, res) => {
  getAllDepertmentShortService((error, results) => {
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
          message: " All depertment fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.getDepertmentByDepertmentIdController = (req, res) => {
  const depertmentId = req.params.depertmentId;
  getDepertmentByDepertmentIdService(depertmentId, (error, results) => {
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
          message: "No record not found with this depertmentId.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " Depertment fetched successfully.",
          data: results,
        });
      }
    }
  });
};

exports.deleteDepertmentController = (req, res) => {
  const depertmentId = req.params.depertmentId;
  deleteDepertmentService(depertmentId, (error, results) => {
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
          message: "No record not found with this depertmentId.",
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
