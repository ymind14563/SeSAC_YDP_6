// 선수와 관련된 라우터를 정의하는 파일

// 기본 요청 경로 localhost:PORT/players

const express = require(`express`);
const router = express.Router();
const controller = require(`../controller/Cplayer`);

// /players 초기 위치 설정은 최상단 index.js 에서 app.use(`/players`,playerRouter); 에서 한다.
router.get(`/`, controller.getPlayers); // 이미 players.js에서 설정하고 있기에 `/`로 설정한다. = /players

router.get(`/:player_id`, controller.getPlayer);

router.post(`/`, controller.postPlayer);

router.patch(`/:player_id/team`, controller.patchPlayer);

router.delete(`/:player_id`, controller.deletePlayer);

module.exports = router;