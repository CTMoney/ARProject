module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: {
                args: true,
                msg: "You are already subscribed."
            }
        }
    })
    return User
}