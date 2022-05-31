

const {
  getUserByUserId,
  getUsers,
  updateUser,
  updateUserStatusService,
  getUserIdDuplication,
  getUserEmailDuplication,
} = require("./user.service");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");

const { sign } = require("jsonwebtoken");

exports.UpdateUser = (req, res) => {
  //const id= req.params.id
  const body = req.body;
  const salt = genSaltSync(10);
  if (body.password != null) {
    body.password = hashSync(body.password, salt);
  }
  updateUser(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    }
    return res.status(200).json({
      success: 1,
      message: "User data successfully updated",
    });
  });
};

exports.changeUserStatusController = (req, res) => {
  const body = req.body;
  updateUserStatusService(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    } else {
      if (results.affectedRows == 0) {
        res.json({
          success: 0,
          message: "No record found with this userId.",
        });
      } else {
        console.log(results);
        res.status(200).json({
          success: 1,
          message: " Status updated successfully.",
        });
      }
    }
  });
};

exports.UserByUserId = (req, res) => {
  const userId = req.params.userId;
  getUserByUserId(userId, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found",
      });
    }
    results.password = undefined;
    return res.json({
      success: 1,
      data: results,
    });
  });
};

exports.Users = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    results.password = undefined;
    return res.json({
      success: 1,
      data: results,
    });
  });
};

//MARK:- functions for check value is allready exits or not
exports.UserIdDuplicationCheck = (req, res) => {
  const userId = req.params.userId;
  getUserIdDuplication(userId, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "This user id is available to use.",
      });
    }

    return res.json({
      success: 1,
      data: results || 0,
      message:
        "This user id allready taken by one of our team members. Please try another one.",
    });
  });
};

exports.EmailDuplicationCheck = (req, res) => {
  const email = req.body.email;
  // console.log(email) //test purpose
  getUserEmailDuplication(email, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "This email address is available to use.",
      });
    }
    return res.json({
      success: 1,
      data: results || 0,
      message: "This email address allready taken try another one.",
    });
  });
};
