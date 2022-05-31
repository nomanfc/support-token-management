const {
  clientCreateQuary,
  clientUpdateQuary,
  getClientByUserIdQuary,
  getAllClientsQuary,
  deleteClientQuary,
  myTicketsQuary,
  userIdDuplicationCheckQuary,
  clientEmailDuplicationCheckQuary,
} = require("./client.allquary");

const pool = require("../../config/database");

exports.createClientService = (data, callBack) => {
  pool.query(
    clientCreateQuary,
    [
      data.name,
      data.userId,
      data.type,
      data.status,
      data.email,
      data.password,
      data.phoneNumber,
      data.businessSector,
      data.contactPerson,
      data.contactPhone,
      data.address,
      data.facebook,
      data.linkedin,
      data.twitter,
      data.skyp,
      data.git,
      data.web,
      data.youtube,
      data.profileImage,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        callBack(error);
      }
      return callBack(null, results);
    }
  );
};

exports.updateClientService = (data, callBack) => {
  pool.query(
    clientUpdateQuary,
    [
      data.name,
      data.email,
      data.phoneNumber,
      data.businessSector,
      data.contactPerson,
      data.contactNumber,
      data.address,
      data.facebook,
      data.linkedin,
      data.twitter,
      data.skyp,
      data.git,
      data.web,
      data.youtube,
      data.profileImage,
      data.id,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        callBack(error);
      }
      return callBack(null, results);
    }
  );
};

exports.getAllClientService = (callBack) => {
  pool.query(getAllClientsQuary, (error, results, fields) => {
    if (error) {
      console.log(error);
      callBack(error);
    }
    return callBack(null, results);
  });
};

exports.getClientsByUserIdService = (userId, callBack) => {
  pool.query(getClientByUserIdQuary, userId, (error, results, fields) => {
    if (error) {
      console.log(error);
      callBack(error);
    }
    return callBack(null, results[0]);
  });
};

exports.deleteClientService = (id, callBack) => {
  pool.query(deleteClientQuary, id, (error, results, fields) => {
    if (error) {
      console.log(error);
      callBack(error);
    }
    return callBack(null, results);
  });
};

//Secton: Duplicayion Check
exports.userIdDuplicationCheckService = (userId, callBack) => {
  pool.query(
    userIdDuplicationCheckQuary,
    [userId, userId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
};

exports.clientEmailDuplicationCheckService = (email, callBack) => {
  pool.query(
    clientEmailDuplicationCheckQuary,
    [email, email],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
};

//MARK:all tickets by userid
exports.getAllMyTicketsByClientId = (clientId, callBack) => {
  pool.query(myTicketsQuary, clientId, (err, results, fields) => {
    if (err) {
      callBack(err, results);
    } else {
      callBack(null, results);
    }
  });
};
