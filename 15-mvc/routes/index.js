// before과 다르게 나누었기 때문에 express 부분 다시 설정한다.
const express = require(`express`);

const controller = require(`../controller/Cmain`);
// const {getMain, getComments, getComment} = require(`../controller/Cmain`); 
// 로 구조분해하여 할당해도 되며 이럴경우 get에서 controller 제외하고 바로 호출가능하다.

const router = express.Router();

console.log(`------ routes/index.js -------`);
console.log(controller);

// GET localhost:PORT/
router.get(`/`, controller.getMain);
// router.get(`/`, getMain); -> 구조분해하여 할당한 경우 controller 생략

// GET localhost:PORT/comments
router.get(`/comments`, controller.getComments);
// router.get(`/comments`, getComments);

// GET localhost:PORT/comment/id
// 콜론(:) : 요청의 주소에서 "변수"를 사용하는 방법
router.get(`/comment/:id`, controller.getComment);
// router.get(`/comment/:id`, getComment);

// 설정한 것들을 내보내기해야 app.js 에서 받을 수 있음.
module.exports = router;