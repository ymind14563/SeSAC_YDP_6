// [before]
// // (임시) DB로부터 방명록 데이터를 받아옴
// exports.getVisitors = () => {
//     return [
//       { id: 1, name: '홍길동', comment: '내가 왔다.' },
//       { id: 2, name: '이찬혁', comment: '으라차차' },
//     ];
// };    

// [after]
const mysql = require(`mysql`);
const conn = mysql.createConnection({
  host: `localhost`,
  user: `user`,
  password: `12345678`,
  database: `codingon`
}); // database 연결 객체

exports.getVisitors = (callback) => {
  conn.query(`select * from visitor`, (err, rows) => {
    if(err) throw err;

    console.log(`model/Visitor.js >>  `, rows);
    callback(rows);
  })
}


exports.getVisitor = (targetId, callback)  => {
  conn.query(`select * from visitor where id=${targetId}`, (err, row) => {
    if(err) throw err;

    console.log(`model/Visitor.js >>`, row);
    // model/Visitor.js >> [ RowDataPacket { id: 3, name: '이수현', comment: '아뵤뵤뵤' } ]
    callback(row[0]); // 배열 형태이기 때문에 [0] 사용
  })

}


// POST 로직
exports.postVisitor = (data, callback) => {
  console.log(data)
  conn.query(`insert into visitor(name, comment) values('${data.name}','${data.comment}')`,
    (err, rows) => {
      if (err) throw err;

      console.log('model/Visitor.js >> ', rows);
      // model/Visitor.js >>  OkPacket {
      //   fieldCount: 0,
      //   affectedRows: 1,
      //   insertId: 4, // -> pk
      //   serverStatus: 2,
      //   warningCount: 0,
      //   message: '',
      //   protocol41: true,
      //   changedRows: 0
      // }
      callback(rows.insertId);
    }
  )
}


// PATCH 로직
exports.patchVisitor = (updateData, callback) => {
  const {id, name, comment} = updateData;
  conn.query(
    `update visitor set name='${name}', comment='${comment}' where id=${id}`,
    (err, rows) => {
      if(err) throw err

      console.log(`model/visitor.js >> `, rows);
      callback(true);
    });
}

// DELETE 로직
exports.deleteVisitor = (targetId, callback) => {
  // targetId: 삭제해야할 visitor id
  conn.query(`delete from visitor where id=${targetId}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(`model/Visitor.js >> `, rows);
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 0,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0
    // }
    callback(true); // 삭제
  })
}