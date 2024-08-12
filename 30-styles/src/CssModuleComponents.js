import React from 'react'
import styles from './styles/cssModule.module.css'

// CSS module
// 클래스명 중복 방지
export default function CssModuleComponents() {
  console.log(styles); // yellow :  "cssModule_yellow__HsDaM" // 'HsDaM'와 같은 새로운 고유 번호가 부여됨.
  return (
    
    <div className={styles.container}>
        {/* 두 클래스를 동시에 적용 */}
        {/* 배열의 요소들을 문자열로 합쳐서 클래스명을 한줄로 만들어야 함 (join(' ') - 띄어쓰기해야 제대로 인식) */}
        <div className={[styles.box, styles.red].join(' ')}>1</div>
        <div className={[styles.box, styles.orange].join(' ')}>2</div>

        {/* 백틱 사용한 템플릿 리터럴. 두 클래스를 함께 적용 */}
        {/* 가장 간단하며 가독성 좋음. 추천. */}
        <div className={`${styles.box} ${styles.yellow}`}>3</div>
    </div>
  )
}
