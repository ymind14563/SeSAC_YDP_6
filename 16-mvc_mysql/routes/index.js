const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 작업 순서
// read all -> create -> delete -> read one -> update


// GET / => localhost:PORT/
router.get('/', controller.getMain);

// GET /visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 전체 조회

// GET /visitor/:id
router.get('/visitor/:id', controller.getVisitor); // 방명록 하나 조회

// POST /visitor
router.post(`/visitor`, controller.postVisitor); // 방명록 추가

// PATCH /visitor
router.patch(`/visitor`, controller.patchVisitor); // 방명록 하나 수정


// DELETE /visitor
router.delete(`/visitor`, controller.deleteVisitor); // 방명록 하나 삭제
module.exports = router;

