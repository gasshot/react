import React from 'react'
import BookInfo from './components/BookInfo'
import products from "./products.json";

function App() {


  return (
    <div>
      <h1>온라인 일간 베스트</h1>

      {products.map((product) => (
        <BookInfo
          key={product.id}
          bookName={product.bookName}
          authorName={product.authorName}
          publisher={product.publisher}
          publishDate={product.publishDate}
          discount={product.discount}
          bookPrice={product.bookPrice}
          description={product.description}
          imgSrc={product.imgSrc}
        />      )
      )}
    </div>
  )
}

export default App
