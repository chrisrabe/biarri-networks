const express = require("express");
const asyncHandler = require("express-async-handler");
const controller = require("../../controllers/role.controller");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const roles = await controller.getAllRoles();
      return res.ok({ roles });
    } catch (e) {
      return res.handleError(e, req);
    }
  })
);

module.exports = router;
