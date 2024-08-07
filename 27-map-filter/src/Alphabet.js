import React, { useState } from 'react'

export default function Alphabet() {
    // 배열 ex
    const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a']);

    // 배열 안에는 객체 형태 ex
    const [alpha, setAlpha] = useState([
        {
            id: 1,
            al: `a`
        },
        {
            id: 2,
            al: `p`
        },
        {
            id: 3,
            al: `p`
        },
        {
            id: 4,
            al: `l`
        },
        {
            id: 5,
            al: `e`
        },
    ])

    const [ inputAlpha, setInputAlpha ] = useState('');

    // 글자 추가
    const addAlpha = () => {
        // Q. input이 빈 값이라면 alphabet 상태가 변경되지 않도록 하기
        if(inputAlpha.trim().length === 0) {
            return;
        }
        
        // * concat
        // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.
        // ex) 
        // let arr1 = [1, 2, 3];
        // let arr2 = [4, 5, 6];
        // let arr3 = arr1.concat(arr2);

        // console.log(arr3); // [1, 2, 3, 4, 5, 6];
        const newAlpha = alpha.concat ({
            id: alpha.length + 1,
            al: inputAlpha,
        })

        setAlpha(newAlpha); 
        setInputAlpha('') // 입력칸 초기화
    }
    // 글자 삭제
    const deleteAlpha = (targetId) => {
        console.log(targetId); // targetId: 삭제될 요소의 Id = value.id

        // targetId에 해당되지 않는 것만 newAlpha에 새로운 배열 만듬
        // targetId에 해당 되는 것만 제외하고 새로 만들어지니,
        // 결론적으로 삭제되는 것과 같은 결과를 보인다.
        const newAlpha = alpha.filter((al) => al.id !== targetId);
        setAlpha(newAlpha); 
    }
    // 키보드 이벤트
    const handleKeyDown = (e) => {
        console.log(e);

        // if(e.code === 'Enter') {
        //     addAlpha();
        // }

        if (e.keyCode === 13) {
            addAlpha();
        }
    }

  return (
    <div>
        <h1>Map & Filter</h1>
        <ol>
            {/* 배열 */}
            {alphabet.map((value, idx) => {
                <li key={idx}>{value}</li>
            })}

            {/* 배열 ex */}
            {/* return 키워드 o */}
            {alphabet.map((value, idx) => {
                return <li key={idx}>{value}</li>
            })}

            <hr />

            {/* 객체 ex */}
            {alpha.map((value) => (
                <li key={value.id}>{value.al}</li>
            ))}

            {/* 알파벳 추가해보기 */}
            <input type="text" placeholder='알파벳 입력' value={inputAlpha} onChange={(e) => {
                setInputAlpha(e.target.value);
            }}
            // Q2) 엔터키를 눌렀을 때 입력 추가
            onKeyDown={(e) => handleKeyDown(e)}
            />

            <button onClick={addAlpha}>추가</button>

            {/* 알파벳 삭제해보기 */}
            <ol>
                {alpha.map((value) => (
                    <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>{value.al}</li>
                ))}
            </ol>
        </ol>
    </div>
  );
}
