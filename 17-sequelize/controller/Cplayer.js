// 선수와 관련된 컨트롤러 모음
const { Player, Profile } = require(`../models/index`);

// 전체 선수 조회
exports.getPlayers = async (req, res) => {
    // Models에 접근하여 확인해야 함. 선수는 DB가 가지고 있음.

    try { 
        const players = await Player.findAll(); // select * from player
        res.json(players);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}

// 선수 하나 조회
exports.getPlayer = async (req, res) => {
    try {
        console.log(req.params.player_id);
        const { player_id } = req.params;

        // select * from player where player_id = 1
        const player = await Player.findOne({
            where: { player_id }, // { player_id : player_id }
            include: [
                { 
                    model : Profile,
                    attributes: [`position`, `salary`]

                }
            ] // join
        });
        
        res.json(player);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}


// 선수 추가
exports.postPlayer = async (req, res) => {
    try{
        console.log(req.body);
        const { name, age, team_id } = req.body;

        // INSERT INTO Player(name, age, team_id) VALUES (name, age, team_id)
        const newPlayer = await Player.create({ 
            name, age, team_id // {name : name, age : age, team_id : team_id}
        })

        res.json(newPlayer);

    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}


// 선수 소속팀 변경
exports.patchPlayer = async (req, res) => {
    
    try{
        console.log(req.params.id);
        console.log(req.body);

        const { player_id } = req.params; // url 주소에 선수 번호가 들어있으니 req.params에서 얻는다.
        const { team_id } = req.body; // body에 선수의 정보가 들어있으니 req.body에서 얻는다.

        const updatedPlayer = await Player.update(
            // 무엇을 바꾸는데?
            { team_id },

            // 누구를 바꿔야하는데?
            {where: { player_id }}
        );

        res.json(updatedPlayer);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}

// 선수 방출 (삭제)
exports.deletePlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const isDeleted = await Player.destroy({
            where: { player_id }
        });

        console.log(isDeleted); // 1

        if (isDeleted) {
            return res.send(true);
        } else {
            return res.send(false);
        }

    } catch (error) {
        console.error(error);
        res.status(500).send(`Internal Server Error`);
    }
}