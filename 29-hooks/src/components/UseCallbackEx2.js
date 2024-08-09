import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
    const [post, setPost] = useState({});

    // [before]
    const getPost = async () => {
    console.log('data fetching...');
    // 데이터 요청
    const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts//${postId}`
    )
        setPost(res.data);
    };

    // useEffect 의존성 배열에 "함수"를 넣으면
    // 컴포넌트가 리랜더링 -> 함수가 재생성 (주소값 변경) ->  getPost 재호출 => 갯수만큼 계속 랜더링 (무한랜더링)
    // useEffect(() => {
    //     getPost();
    // }, [getPost]) // 무한 랜더링으로 인해 주석 처리
 

    // [after]
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 postId가 변경되지 않는 한 컴포넌트는 리랜더링 되지 않음
    const getPostUseCallback = useCallback(async() => {
        console.log('data fetching...');
        // 데이터 요청
        const res = await axios.get(
         `https://jsonplaceholder.typicode.com/posts//${postId}`
        );
        setPost(res.data);
    }, [postId])

    useEffect(() => {
        getPostUseCallback();
    }, [getPostUseCallback])

    return (
    <div>
        <h1>UseCallbackEx2</h1>
        {post.id ? post.title : '로딩 중...'}
        <br />
    </div>
  )
}


/** 
 * useEffect(() => {}, [])
 * 생명주기 관련하여 특정 구간에서 실행시키고 싶을 때 사용.
 * 
 * useMemo(() => {}, []) 
 * 복잡한 로직을 통해 구한 값을 의미없이 반복할 필요없으니 메모 해놓고
 * 특정한 움직임이 있을 때만(의존성 배열에 들어있는 바꾸고자하는 값) 값을 새로 구함.
 * 
 * useCallback(() => {}, [])
 * useMemo와 비슷함. useMemo와 차이점은 값을 저장하는 것이 아니라 함수를 저장.
*/ 