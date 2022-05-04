// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category)

Category.hasMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag)
ProductTag.hasMany(Product)
// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product)
// Product.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
