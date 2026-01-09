import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router'
import styles from './Home.module.css'
import useFetchProducts from '../../hooks/useFetchProducts';

const Home = () => {
  const { products } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredProducts = products.filter((category)=>{
    if(selectedCategory ==="전체"){
      return true;
    }
    return selectedCategory === category;
  })

  return (
    <>
      <ul className={styles.categoryList}>
        {["전체", "상의", "하의", "신발", "악세서리"].map((category) => {
          return <li key={category} className={
            selectedCategory === category ? styles.selected : null}
            onClick={() => {
              setSelectedCategory(category);
            }}>
            {category}
          </li>
        })}
      </ul>

      <h3>상품 목록({products.length})</h3>
      <div className={styles.productList}>
        {filteredProducts.map(({ id, category, image, name, price }) => {

          return (
            <Link key={id} to={`/products/${id}`} className={styles.productListItem}>
              <div >
                <img src={image} />
                <div className={styles.productInfo}>
                  <div className={styles.productCategory}>{category}</div>
                  <div className={styles.productName}>{name}</div>
                  <div className={styles.productPrice}>{price.toLocaleString()}원</div>
                </div>
              </div>

            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Home