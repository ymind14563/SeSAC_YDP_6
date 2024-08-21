import React from 'react'

// interface 설정
interface CardProps {
  title: string;
  children: React.ReactNode; 
  // 기존에는 React.FC<CardProps>만 써도 interface에서 children 주석 처리해도 잘받아왔으나,
  // 논란점으로인해 React18 부터 변경됨으로 이제 명시적으로 interface에 포함 시켜야 함
  // 그럼에도 interface에서 children을 생략하고 싶다면 React.FC<React.PropsWithChildren<CardProps>>로 처리
  // 강제로 React.FC<React.PropsWithChildren<CardProps>>로 전달하려면 children: React.ReactNode; 주석 처리 (주석처리해도 작동함)
}

// React.ReactNode 란?
// - 리액트에서 가장 유연하고 광범위한 타입
// : 컴포넌트가 자식으로 받을 수 있는 모든 형태의 값을 정의

// #1. children을 직접 전달
// export default function Card({ title, children }: CardProps) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{children}</div>
//     </div>
//   )
// }

// #2. React.FC (children 자동 전달)
// - React.18 이 후로 변경됨 -> 자동 전달 X / 명시적으로 적어줘야 함
// const Card: React.FC<CardProps> = ({ title, children }) => {
//   return (
//     <div>
//        <h1>{title}</h1>
//        <div>{children}</div>
//     </div>
//   )
// }

// #2-1. React.FC (그럼에도 children 자동 전달하려면) - 위에 interface에서 타입 주석처리해도 작동함
// 근데 아래 Props에 children이 있는 이유는? 아래 <div>에서 값을 전달 받기 위해 -> 위의 타입 명시와 다른 이야기
const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ title, children }) => {
  return (
    <div>
       <h1>{title}</h1>
       <div>{children}</div>
    </div>
  )
}

export default Card
