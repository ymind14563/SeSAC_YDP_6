// Player 모델 정의
const playerModel = (sequelize, DataTypes) => {
    // sequelize 매개변수 : model/index.js에서의 sequelize (db 연결 정보를 입력하여 생성한 객체)
    // DataTypes 매개변수 : model/index.js에서의 sequelize (sequelize 패키지 자체)
    const Player = sequelize.define(
        // param 1 : 모델 이름 설정
        `Player`,

        // param 2 : 모델 컬럼 정의
        {
            player_id : {
                // play_id int not null primary key auto_increment;
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                // name varchar(63) not null;
                type: DataTypes.STRING(63),
                allowNull: false,
            },
            age: {
                // age int not null;
                type: DataTypes.INTEGER,
                allowNull : false
            }
        },

        // param 3 : 모델 옵션 정의
        {
            freezeTableName: true, // 테이블 명 고정 
            // 기본적으로 TableName을 복수형으로 만들어서 Query를 날리는데 TableName을 복수형이 아닌 Model을 설정할때 이름 그대로 사용하게 해준다.
            // timestamps: false // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
        }
    );
    
    return Player;
}

module.exports = playerModel;