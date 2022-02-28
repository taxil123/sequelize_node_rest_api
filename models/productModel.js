module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define('product',{
        title: {
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.FLOAT,
        },
        description:{
            type: DataTypes.STRING,
        },
        published:{
            type: DataTypes.BOOLEAN,
        }
    })

    return Product;
}