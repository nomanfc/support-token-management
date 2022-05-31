exports.createCategoryQuarry =`INSERT INTO categories(name,status)
values(?,?)`
exports.updateCategoryQuarry=`UPDATE categories SET name=?, status = ? where categoryId =?`
exports.getAllCategoryQuarry=` SELECT categoryId,name,status FROM categories`
exports.getAllCategoryShortQuarry=` SELECT categoryId,name FROM categories where status = 1`
exports.getCategoryByCategoryIdQuarry=`SELECT categoryId,name FROM categories WHERE categoryId = ?`
exports.deleteCategoryQuarry=`DELETE FROM categories WHERE categoryId = ?`