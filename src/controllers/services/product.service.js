
const productDal = require("../../../utils/mysql/dal/product.dal");

const addproduct = async (productData) => {
    try {
      const productId = await productDal.addproduct(productData);
      return { id: productId, message: 'Product created successfully' };
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const getProduct = async(productData) => {
    try{
      const product = await productDal.getProduct(productData)
      return { data: product, message: 'All Product get successfully' };
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  
  module.exports = {
  
    addproduct,
    getProduct
}