const Visitor = require('../model/Visitor');

// (1) GET / => localhost:PORT/
exports.getMain = (req, res) => {
  res.render('index');
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // [before]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  Visitor.getVisitors((result) => {
    // result 매개변수
    // : model/Visitor.js의 getVisitors 함수의 callback(rows)의 "rows" 변수에 대응.
    console.log(`controller/Cvisitor.js >> `, result);

    console.log(Visitor); // { getVisitors: [Function (anonymous)] }
    console.log(Visitor.getVisitors); // [Function (anonymous)]
    

    // res.send(`test`);

    res.render(`visitor`, { data: result });
    // 함수의 결과 값을 data에 대입하여야 하는데 Visitor.getVisitors를 입력하게 되면
    // 함수 자체를 입력하는 것이 되기 때문에 오류가 발생한다.
  })
};

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  // req.params.id // 조회 해야할 id
  Visitor.getVisitor(req.params.id, (result) => {
    res.send(result);
  }); 

}


// POST
exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    // result: rows.insertId
    
    console.log(`controller/Cvisitor.js >> ` , result);
    // controller/Cvisitor.js >> 4

    res.send({
      id : result,
      name : req.body.name,
      comment : req.body.comment
    })
  });
}

// Patch
exports.patchVisitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, (result) => {
    console.log(`controller/Cvisitor.js >> `, result);

    res.send({ result }); // { result : result }

  });
}


// Delete
exports.deleteVisitor = (req, res) => {
  console.log(req.body);

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('controller/Cvisitor.js >> ', result);
    
    res.send({ result }); // { result : result }
  })
}