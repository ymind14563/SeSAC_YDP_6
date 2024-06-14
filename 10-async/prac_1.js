// 실습. promise 사용하기

function call2(name) {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            console.log(name);
            res(name);
        }, 1000)
    })
}
function back2() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            console.log(`back`);
            res(`back`);
        }, 1000)
    })
}
function hell2() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            res(`callback hell`);
        }, 1000)
    })
}


call2(`kim`)
    .then(function(name) {
        console.log(name + '반가워');
        return back2();
    })
    .then(function(txt) {
        console.log(txt + '을 실행했구나');
        return hell2();
    })
    .then(function(message) {
        console.log('여기는' + message);
    });


// 실습2. exec(async) 사용하기

async function exec() {
    const name = await call2(`kim`);
    console.log(name + '반가워');
    const txt = await back2();
    console.log(txt + '을 실행했구나');
    const message = await hell2();
    console.log('여기는' + message);
}

exec();

// 실습3.  '배경색 변경' 코드를 Promise를 이용해 변경하기

function backgroundColor(color) {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            document.body.style.backgroundColor = color;
            res(color);
        }, 1000)
    })
}

async function changeColor() {
    await backgroundColor(`red`);
    await backgroundColor(`orange`);
    await backgroundColor(`yellow`);
    await backgroundColor(`green`);
    await backgroundColor(`blue`);

}

changeColor();