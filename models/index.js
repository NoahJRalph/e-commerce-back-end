const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Category have many Product
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Product belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  onUpdate: 'CASCADE',
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'tags',
});
// Tag belongToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  onUpdate: 'CASCADE',
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'products',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};