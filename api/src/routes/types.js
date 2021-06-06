const { Router } = require("express");
const router     = Router();

const routerHelper = require("../helper/routerHelper");
const getTypes     = require("../controllers/types/getTypes.controller");

router.get("/types", routerHelper(getTypes));

module.exports = router;