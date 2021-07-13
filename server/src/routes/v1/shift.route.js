const express = require("express");
const asyncHandler = require("express-async-handler");
const controller = require("../../controllers/shift.controller");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const shifts = await controller.getAllShifts();
      return res.ok({ shifts });
    } catch (e) {
      return res.handleError(e, req);
    }
  })
);

module.exports = router;
