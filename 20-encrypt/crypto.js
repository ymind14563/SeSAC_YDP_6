// crypto
// - Node.js 내장 모듈
// - 암호화 기능 제공
// - bcrypt 모듈 보다 범용성이 큼

// crypto 내장 모듈을 불러오기
const crypto = require(`crypto`);

// createHash()
// - 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 함수
const createHashedPw = (pw) => {
    // 매개변수로 받은 pw를 암호화하는 함수
    // createHash(알고리즘).update(암호화할값).digest(인코딩방식);
    // `sha512` 보안개발자들이 개발한 암호화 함수를 가져다 씀
    return crypto.createHash(`sha512`).update(pw).digest(`base64`);
    
}

// 해시 함수의 한계: 같은 input에 대해서 같은 암후화된 output이 출력됨
// -> 평문(input)으로 되돌아 갈 수는 없지만 output이 동일하다면 input이 동일함까지는 유추가능
// (레인보우 테이블에서도 암호화된 output을 역추적해서 찾아낼 수도 있음)
console.log(createHashedPw(`1234`));
console.log(createHashedPw(`1234`)); // 같은 pw가 들어오면 같은 hash 값을 반환
console.log(createHashedPw(`1233`)); // 미세한 변화에도 hash 값은완전히 다름


// --------------------------------------------
// pbkdf2
// - 비밀번호 기반 키 도출 함수로 주로 비밀번호 저장할 때 사용

// 단방향 암호화 생성 함수
// saltAndHashPw: 임의의 salt값을 생성한 후, pbkdf2Sync함수를 사용해서 해당 솔트와 비밀번호를 기반으로 해시를 생성
const saltAndHashPw = (pw) => {
    const salt = crypto.randomBytes(16).toString('base64'); // salt 생성
    const iterations = 100000; // 반복 횟수
    const keylen = 64; // 생성할 키의 길이
    const digest = 'sha512'; // 해시 알고리즘

    // pbkdf2Sync(비밀번호_원문, 솔트, 반복횟수, 키의 길이, 알고리즘)
    const hash = crypto
        .pbkdf2Sync(pw, salt, iterations, keylen, digest) // pw 값을 암호화 
        .toString('base64'); // 암호화된 Buffer 형식의 데이터를 "base64 문자열로 변환"해서 저장하거나 전송하기 쉽도록

    return {
        salt, hash
    }
}

// --------------------------------------------
// 비밀번호 비교 함수
const comparePw = (inputPw, savedSalt, savedHash) => {
    // saltAndHashPw 함수에서 정의한 값들이랑 일치
    const iterations = 100000; // 반복 횟수
    const keylen = 64; // 생성할 키의 길이
    const digest = 'sha512'; // 해시 알고리즘

    const hash = crypto
        .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, digest) 
        .toString('base64');
    
    // hash: 사용자가 주장하는 비밀번호를 savedSalt와 조합해서 암화한 해시 값
    // savedHash: 정답 비밀번호에 대한 해시 값

    return hash === savedHash;
}

// --------------------------
// 암호 비교 예제
console.log('');

const password = '1234!'; // 정답 비밀번호

// 비밀번호 암호화
const { salt, hash } = saltAndHashPw(password);
console.log(`Salt: ${salt} // Hash: ${hash}`);

const inputPassword = '1234!#'; // 주장하는 비밀번호
const isMatch = comparePw(inputPassword, salt, hash); 
console.log(`비밀번호가 ${isMatch ? '일치합니다.' : '일치하지 않습니다.'}`);










// banana / 1234 회원가입 시도
// banana / asdfasdfasdf 데이터베이스 저장
// banana / 1234 로그인 시도
// 1234를 단방향 암호화하면 (asdfasdfasdf) 암호화한 값으로
// 암호화되어 저장된 회원가입 비번이랑 암호화된 로그인 비번이랑 비교

// 비밀번호를 찾기 시도
// 1. 비밀번호를 변경하게 하는 사이트 - 단방향으로 복호화 못함
// 2. 비밀번호를 찾아주는 사이트 - 양방향으로 복호화
// ----------------

// 양방향
// ex. 사물함에 물건을 보관하고 잠그면(암호화) 안전하게 물건을 보호, 필요할 때 열쇠로 사물함을 열어서(복호화) 물건을 다시 꺼냄
// - 대칭키: 암호화/복호화할 때 쓰는 키가 동일 / 처리 속도 빠른 / 키 공유가 안전하게 이뤄져야 함
// ex. 같은 열쇠로 열고 잠글 수 있지만, 열쇠를 잘 보관해야만 함  (분실시 누구나 열수 있게 됨)
// - 공개키(비대칭키): 두 개의 키를 가지고 암호화/복호화 == 암호화와 복호화할 때 쓰이는 키가 다름
// 	"공개키"로 암호화 / "개인키"로 복호화
// 	대칭키에서는 키 공유가 안전하게 이뤄져야 하지만, 키 교환 문제 해결 가능
// 	대치킹 암호화보다는 처리 속도 느린편
// 	ex. 우체통
// 	누구나 편지(데이터)를 넣을 수 있지만 -> 공개키로 암호화
// 	우체통 열쇠를 가진 사람만 우체통을 열어서 편지(데이터)를 읽을 수 있다 -> 개인키로 복호화