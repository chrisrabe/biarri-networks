const express = require("express");

const router = express.Router();

const employeeRoute = require("./employee.route");
const roleRoute = require("./role.route");
const shiftRoute = require("./shift.route");

router.use("/employee", employeeRoute);
router.use("/role", roleRoute);
router.use("/shift", shiftRoute);

module.exports = router;
