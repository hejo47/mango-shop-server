module.exports = function (sequelize, dataTypes) {
    const banner = sequelize.define('Banner', {// 테이블 정의
        imageUrl: {
            type: dataTypes.STRING(300),
            allowNull: false,
        },
        href: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
    })
    return banner;
}