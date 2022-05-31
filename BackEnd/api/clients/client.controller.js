const {
  createClientService,
  updateClientService,
  getAllClientService,
  getClientsByUserIdService,
  deleteClientService,
  userIdDuplicationCheckService,
  getAllMyTicketsByClientId,
  clientEmailDuplicationCheckService,
} = require("./client.service");

const pool = require("../../config/database");

exports.createClientController = (req, res) => {
  const body = req.body;
  createClientService(body, (error, results) => {
    if (error) {
      //  console.log(error)
      return res.status(500).json({
        success: 0,
        message: "Database connection failed.",
      });
    }
    return res.status(200).json({
      success: 1,
      message: "Client created successfully.",
    });
  });
};

exports.updateClientController = (req, res) => {
  const body = req.body;
  // const id = req.prams.id
  updateClientService(body, (error, results) => {
    if (error) {
      //  console.log(error)
      return res.status(500).json({
        success: 0,
        message: "Database connection errror.",
      });
    }
    return res.status(200).json({
      success: 1,
      message: "Client updated successfully.",
    });
  });
};

exports.getAllClientController = (req, res) => {
  getAllClientService((error, results) => {
    if (error) {
      console.log(error);
    }
    return res.json({
      success: 1,
      data: results,
    });
  });
};

exports.getClientByUserIdController = (req, res) => {
  const userId = req.params.userId;

  getClientsByUserIdService(userId, (error, results) => {
    if (error) {
      console.log(error);
    }
    return res.json({
      success: 1,
      data: results,
    });
  });
};

exports.deleleClintController = (req, res) => {
  const id = req.params.id;
  deleteClientService(id, (error, results) => {
    if (error) {
      console.log(error);
      return res.json({
        success: 0,
        message: "Database connection failed.",
      });
    }
    return res.json({
      success: 1,
      message: "Client record successfully deletd.",
    });
  });
};

//MARK:- functions for check value is allready exits or not
exports.userIdDuplicationCheckController = (req, res) => {
  const userId = req.params.userId;
  userIdDuplicationCheckService(userId, (err, results) => {
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
      message: "This user id allready taken, please try another one.",
    });
  });
};

exports.emailDuplicationCheckController = (req, res) => {
  const email = req.body.email;
  // console.log(email) //test purpose
  clientEmailDuplicationCheckService(email, (err, results) => {
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
      message: "This email address allready taken, please try another one.",
    });
  });
};

//MARK: return all tickets by userId
exports.getAllmyTicketsController = (req, res) => {
  const userId = req.params.userId;
  getAllMyTicketsByClientId(userId, (error, results) => {
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
          message: "No record not found with this ticket.",
        });
      } else {
        res.status(200).json({
          success: 1,
          message: " Ticket number fetched successfully.",
          data: results,
        });
      }
    }
  });
};
