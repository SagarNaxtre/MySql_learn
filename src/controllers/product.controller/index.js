const productService = require("../services/product.service")


const addproduct = async (req, res,next) => {
    try {
      const productData = req.body;
      // console.log(productData)
      const result = await productService.addproduct(productData);
      res.locals.finalResponse = result;
      next()
   } catch (error) {
    next(error)
}
}


const getProduct = async(req,res,next) => {
  try {
  const result = await productService.getProduct;
  res.locals.finalResponse = result;
  next()
} catch (error) {
next(error)
}
}

module.exports = {
  addproduct,
  getProduct
}