import React, { useEffect } from 'react'

// custom hooks
export default function useTitle(custom) {
  useEffect(() => {
    // mount 시 실행 공간
    const prevTitle = document.title;
    document.title = custom;

    // unMount 시 실행 공간
    return () => (document.title = prevTitle);

  }, [custom]); // custom이 변경될 때마다 문서의 제목을 업데이트함
}

// 페이지의 제목을 동적으로 설정
// 컴포넌트가 언마운트 될 때 이전 제목으로 복원하는 기능
