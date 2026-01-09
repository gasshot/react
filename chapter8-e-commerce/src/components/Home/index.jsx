import React from 'react'
import styles from './Home.module.css'

const Home = () => {

  const products = Array(10).fill(null);
  return (
    <>
      <ul className={styles.categoryList}>
        <li className={styles.selected}>전체</li>
        <li>상의</li>
        <li>하의</li>
        <li>신발</li>
        <li>가방</li>
        <li>악세서리</li>
      </ul>

      <h3>상품 목록(20)</h3>
      <div className={styles.productList}>
        {products.map((_, index) => (
          <div className={styles.productListItem} key={index}>
            <img src="https://picsum.photos/200" alt="" />
            <div className={styles.productInfo}>
              <div className={styles.productCategory}>상의</div>
              <div className={styles.productName}>멋진 니트</div>
              <div className={styles.productPrice}>19,000원</div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default Home