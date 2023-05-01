const router = require('express').Router();
const productController = require('../../src/controllers/product.controller')
const successresponse = require("../../utils/mysql/helper/successResponse")
const unsuccessresponse = require("../../utils/mysql/helper/unsuccessResponse")


router.post("/addProduct",productController.addproduct,successresponse, unsuccessresponse)
// router.get("/getallProduct",productController.getProduct,successresponse,unsuccessresponse)

module.exports = router

