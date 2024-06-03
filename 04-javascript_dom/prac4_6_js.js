const userId = document.getElementById(`userid`);
const comment = document.getElementById(`comment`);
const form = document.querySelector(`form`);
const ul = document.querySelector(`ul`);


form.addEventListener(`submit`,(e) => {
    (e).preventDefault();

    if (userId.value === "" || comment.value === "") {
        alert(`빈 칸이 있습니다.`);
        return;
    }

    const li = document.createElement(`li`);
    li.textContent = `${userId.value} - ${comment.value}`;
    
    ul.appendChild(li);

    userId.value = ``;
    comment.value = ``;

})