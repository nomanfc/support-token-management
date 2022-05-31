
exports.createProductQuarry =`INSERT INTO products(name,status,description,category)
values(?,?,?,?)`
exports.updateProductQuarry=`UPDATE products SET name=?,description=?,category=? where productId =?`
exports.updateProductStatusQuary=`UPDATE products SET status=? where productId =?`
exports.getAllProductQuarry=` SELECT productId,name,status,description,category FROM products `
exports.gettAllproductShortQuarry=`SELECT productId,name FROM products WHERE status =1`
exports.getProductByProductIdQuarry=`SELECT productId,name,status,description,category FROM products WHERE productId = ?`
exports.deleteProductQuarry=`DELETE FROM products WHERE productId = ?`