

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

const loginRouter = require("./api/login/login.router");
const userRouter = require("./api/users/user.router");
const clientRouter = require("./api/clients/client.router");
const teamRouter = require("./api/team/team.router");
const supportRouter = require("./api/supports/support.router");
const productRouter = require("./api/products/product.router");
const categoryRouter = require("./api/categories/category.router");
const depertmentRouter = require("./api/depertments/depertment.router");
const designationRouter = require("./api/designations/designation.router");
const ticketRouter = require("./api/tickets/ticket.router");

app.use(cors());
app.use(express.json());

app.use("/api", loginRouter);
app.use("/api/users", userRouter);
app.use("/api/clients", clientRouter);
app.use("/api/team", teamRouter);
app.use("/api/supports", supportRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/depertments", depertmentRouter);
app.use("/api/designations", designationRouter);
app.use("/api/tickets", ticketRouter);

app.listen(process.env.APP_PORT || 3040, () => {
  console.log("server listeing from:", process.env.APP_PORT);
});
