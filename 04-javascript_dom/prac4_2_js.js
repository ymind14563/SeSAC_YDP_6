const todo_list = document.querySelectorAll(`li`);
todo_list.forEach((e) => {
    e.classList.toggle(`done`);
    e.classList.toggle(`todo`);
});