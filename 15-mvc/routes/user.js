const express = require(`express`);
const controller = require(`../controller/Cuser`);
const router = express.Router();

console.log(`------ routes/index.js -------`);
console.log(controller);

// app.js:17 에 /user 가 초기 주소로 등록되어있으니, 
// router.get에서 `/`는 /user가 기본 요청 주소이다.
// GET localhost:PORT/user
router.get(`/`, controller.getUser);

module.exports = router;