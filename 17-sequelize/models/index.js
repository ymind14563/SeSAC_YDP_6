// ORM: "객체" & "관계형 데이터베이스의 데이터"를 매핑
// 	code & 실제 database를 연결
// 데이터베이스 종류: MySQL, MSSQL, ORACLE, ....
// 	=> CURD
	
// 	SQL문 == query 문 == 질의문: 데이터베이스에 CRUD같은 작업을 명령하기 위한 명령어
// 	SQL문을 사용하면 CRUD할 때 SQL 문법을 정확히 사용
// 	ORM을 사용하게 되면 SQL문을 쓰지 않고도 CRUD를 할 수 있다 <-

// sequelize, mysql datattypes 문법 비교 공식문서
// https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types

const Sequelize = require('sequelize'); // sequelize 패키지를 불러옴
const config = require(__dirname + '/../config/config.json')["development"];
// db 연결정보 // config.json으로 가서 development의 키에 해당하는 값을 가져온다는 의미
const db = {}; // 마지막 정리를 위해 빈객체 생성// 빈객체

const sequelize = new Sequelize(config.database, config.username, config.password, config); 
// sequelize 객체 생성 // new Sequelize(codingon, user, 12345678, development키의 값 전체)

// 모델 불러오기 
// 참고 : 맨처음 파일 설정하면 등록이 되어버리기때문에 중간에 파일명을 바꾸거나해도 등록되어있기에 계속 에러가 뜬다.(파일을 삭제하고 새로 만들어야 해결됨.)
// 참고2 : 코드를 실행하고 MySQL 워크벤치에 테이블이 생성되는데 Mac은 테이블명이 대문자로, Windows는 소문자로 생성된다. MySQL은 대소문자를 구분하지 않으므로 상관은 없다.
const PlayerModel = require(`./Player`)(sequelize, Sequelize);
const ProfileModel = require(`./Profile`)(sequelize, Sequelize);
const TeamModel = require(`./Team`)(sequelize,Sequelize);
const GameModel = require(`./Game`)(sequelize,Sequelize);
const TeamGameModel = require(`./TeamGame`)(sequelize,Sequelize);


// 모델간 관계 연결
// 1) Player : Profile = 1 : 1
// 하나의 선수당 하나의 프로필을 가짐
PlayerModel.hasOne(ProfileModel, { 
  onDelete: `CASCADE`, // 플레이어와 연관된 프로필도 삭제
  onUpdate: `CASCADE`, // 플레이어와 연관된 프로필도 업데이트
  foreignKey: `player_id`, // ProfileModel에 `player_id` 이름의 fk 생성
  sourceKey: `player_id` // PlayerModel `player_id` 컬럼 참조
});

ProfileModel.belongsTo(PlayerModel, {
  foreignKey: `player_id`, // ProfileModel에 `player_id` fk 생성
  targetKey: `player_id` // 참조하게 될 PlayerModel의 키는 `player_id`
});


// 2) Team : Player = 1 : N
// 한 팀에는 여러 명의 선수가 존재
TeamModel.hasMany(PlayerModel, {
  foreignKey: `team_id`, // PlayerModel에 `team_id` fk 생성
  sourceKey: `team_id` // TeamModel에서 참조될 키가 `team_id`
});

PlayerModel.belongsTo(TeamModel, {
  foreignKey: 'team_id', // PlayerModel에 `team_id` fk 생성
  targetKey: `team_id` // 참조하게 될 TeamModel의 키는 `team_id`
});


// 3) Team : Game = N : M
// 하나의 팀은 여러 게임 가능, 한 게임에서는 여러 팀이 참여
// 두 모델의 관계 모델은 TeamGameModel
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel, // 중계(관계) 테이블 정의
  foreignKey: `team_id`, // TeamGameModel에서 TeamModel을 참조하는 fk
  otherKey: `game_id` // TeamGameModel에서 GameModel을 참조하는 fk
})

GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel, // 중계(관계) 테이블 정의
  foreignKey: `game_id`, // TeamGameModel에서 GameModel을 참조하는 fk
  otherKey: `team_id` // TeamGameModel에서 TeamModel을 참조하는 fk
})



db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize : sequelize, Sequelize : Sequelize}

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
// db = { sequelize : sequelize, Sequelize : Sequelize, 
//            Player : PlayerModel, Profile : ProfileModel, Team : TeamModel }

module.exports = db;
// db 객체를 모듈로 내보냄(-> 다른 파일에서 db 모듈을 사용할 예정)




// -------------------------------------------
// 첫 생성 시 이미 생성된 코드

// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
  // sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


