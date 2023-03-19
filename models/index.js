const User = require('./User');
const Cart = require('./Cart');
const Product = require('./Product');

Cart.belongsTo(User, {
    foreignKey: 'user_id'
});