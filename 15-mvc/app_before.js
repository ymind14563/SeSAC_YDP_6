// before 는 ejs를 제외한 모든 코드를 한 곳에 작성
// after 는 controller,routes,model, app.js로 나눠서 작성

const express = require(`express`);
const app = express();
const PORT = 8000;

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);

// (임시) DB에서 가지고 온 데이터라고 가정하고 진행
const comments = [
    {
        id: 1,
        userid: 'helloworld',
        date: '2022-10-31',
        comment: '안녕하세요^~^',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2022-11-01',
        comment: '반가워유',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2022-11-02',
        comment: '오 신기하군',
    },
    {
        id: 4,
        userid: 'bestpart',
        date: '2022-11-02',
        comment: '첫 댓글입니당ㅎㅎ',
    },
];

app.get(`/`, (req, res) => {
    res.render(`index`);
})

app.get(`/comments`, (req, res) => {
 res.render(`comments`, { comments }); // { comments : commnets}
})

// 콜론(:) : 요청의 주소에서 "변수"를 사용하는 방법
app.get(`/comment/:id`, (req, res) => {
    // 요청(req)에 파라미터(/:id)의 값(:id)을 입력해야한다.
    console.log(req.params);  // { id: '1' }
    console.log(req.params.id);  // '1' }

    // 댓글 id : 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id;
    // comments가 배열이기에 index 0인 값을 가져오려면 
    // [id - 1] 을 해야 배열 상 첫번째 값을 가져온다.
    console.log(comments[commentId - 1]); 
    
    
    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if (!comments[commentId - 1]) { // !undefined => true => 조건문실행
        return res.render(`404`);
    }  
    
    res.render(`comment`, { comment : comments[commentId - 1]});
})

// 요청의 주소에 변수 여러개 사용
app.get(`/test/:id/:name`, (req, res) => {
    res.send(req.params);
    // {
    //     "id": "1",
    //     "name": "banana"
    //  }
})

// 404 맨 마지막 라우트(주소)로 선언 해야한다 !!
// : 그렇지 않고 맨 위에 작성하면 `*`이기에 나머지 라우팅(주소를 설계한 행위)이 전부 무시됨 !!)
app.get('*', (req, res) => {
    res.render(`404`);
})


app.listen(PORT, () => {
    console.log(`${PORT} 서버 연결 성공`);
})