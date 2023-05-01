const connect = require("../connection");

const addproduct = (productData) => {
  const query = `INSERT INTO products (
        title,
        short_title,
        page_title,
        product_slug,
        catalogue_link,
        product_alias,
        pack_size,
        msds,
        specification,
        stock,
        cas,
        coa,
        available_quantities,
        main_inspect_verifier,
        footer_image,
        footer_image_title,
        featured_image,
        featured_image_title,
        product_status,
        progress_status,
        og_title,
        og_description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    productData.title,
    productData.short_title,
    productData.page_title,
    productData.product_slug,
    productData.catalogue_link,
    productData.product_alias,
    productData.pack_size,
    productData.msds,
    productData.specification,
    productData.stock,
    productData.cas,
    productData.coa,
    productData.available_quantities,
    productData.main_inspect_verifier,
    productData.footer_image,
    productData.footer_image_title,
    productData.featured_image,
    productData.featured_image_title,
    productData.product_status,
    productData.progress_status,
    productData.og_title,
    productData.og_description,
  ];

  return new Promise((resolve, reject) => {
    connect.execute(query, values, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.insertId);
      }
    });
  });
};

const getProduct = () => {
  const query = `SELECT * FROM products`;
  console.log(query);
  return new Promise((resolve, reject) => {
    connect.query(query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }

    });
  });
 
}



module.exports = {
  addproduct,
  getProduct
};
