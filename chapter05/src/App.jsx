import React, { use } from 'react'
import { useState } from 'react';
import './App.css'

function App() {
  const [like, setLike] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <p>
        안녕하세요. 저는 블로그 글입니다.
        {isHidden ? (
          <span>
            더보기...
          </span>
        ) : (
          <>
            <br />
            조금 긴 글입니다.
            <br />
            조금 긴 글입니다.
            <br />
            조금 긴 글입니다.
          </>
        )}
      </p>
      <div>좋아요 숫자 : {like}</div>
      <button onClick={() => {
        setLike(like + 1);
      }}>

        좋아요</button>
      <button onClick={() => { setIsHidden(isHidden ? false : true) }}>
        글 {isHidden ? " 더보기" : "숨기기"}</button>
    </div>
  )
}

export default App
