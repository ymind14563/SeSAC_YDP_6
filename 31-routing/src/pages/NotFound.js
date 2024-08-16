import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h1>NotFound</h1>
        {/* 변경되는 부분만 재랜더링 = 변경되지 않은 부분은 그대로 유지 */}
        <Link to='/'>홈으로 이동하기</Link>
        <br />
        {/* 전체 초기화하여 이동 */}
        <a href="http://localhost:3000">a 태그로 홈 이동</a>
    </div>
  )
}
