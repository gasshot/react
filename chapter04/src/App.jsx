import React from 'react'
import BookInfo from './components/BookInfo'


function App() {


  return (
    <div>
      <BookInfo
  bookName="괴테는 모든 것을 말했다"
  authorName="스즈키 유이"
  publisher="리프"
  publishDate='2025.11.19'
  discount={10}
  bookPrice={17000}
  description='저명한 괴테 연구가 도이치는 홍차 티백에서 출처 불명의 괴테 명언을 발견한다. “사랑은 모든 것을 혼동시키지 않고 혼연일체로 만든다.” 평생 괴테를 연구한 그조차 본 적 없는 낯선 문...'  

/>
    </div>
  )
}

export default App
