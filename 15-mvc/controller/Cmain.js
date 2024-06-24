// const Comment = require(`../model/Comment`);
const { getDbComments } = require(`../model/Comment`);

exports.getMain = (req, res) => {
    res.render(`index`);
}

exports.getComments = (req, res) => {
    res.render(`comments`, { comments : getDbComments() }); // { comments : commnets}
}

exports.getComment =  (req, res) => {
    // 요청(req)에 파라미터(/:id)의 값(:id)을 입력해야한다.
    console.log(req.params);  // { id: '1' }
    console.log(req.params.id);  // '1' }

    // 댓글 id : 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id;

    const dbComments = getDbComments(); // 추가된 부분

    // comments가 배열이기에 index 0인 값을 가져오려면 
    // [id - 1] 을 해야 배열 상 첫번째 값을 가져온다.
    console.log(dbComments[commentId - 1]); 
    
    
    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if (!dbComments[commentId - 1]) { // !undefined => true => 조건문실행
        return res.render(`404`);
    }  
    
    res.render(`comment`, { comment : dbComments[commentId - 1]});
}
