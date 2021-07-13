const express = require("express");
const asyncHandler = require("express-async-handler");
const controller = require("../../controllers/employee.controller");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const employees = await controller.getAllEmployees();
      return res.ok({ employees });
    } catch (e) {
      return res.handleError(e, req);
    }
  })
);

module.exports = router;
