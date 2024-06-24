// User(model)을 Cuser(controller)로 불러오기
const { getDbUser } = require(`../model/User`);

exports.getUser = (req, res) => {
    
    res.render(`user`, { user:getDbUser() });
}