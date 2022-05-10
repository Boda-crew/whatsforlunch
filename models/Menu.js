import Sequelize from "sequelize";

class Menu extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false
            },
            type: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Menu',
            tableName: 'menu',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {}
};

export {Menu};