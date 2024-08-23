// 여러 파일에서 공통적으로 사용하는 타입을 관리

// #1. Type 지정
// 단일 Todo 아이템 타입
export interface ToDoItem{
    id: number; // 유일 아이디
    text: string; //  Todo 내용
    completed: boolean; // 완료 여부
}

export interface PostItem2 {
    id: number;
    title: string;
    body: string;
}