import { useParams } from 'react-router'

import useFetchProduct from '../../hooks/useFetchProduct'
import useFetchReviews from '../../hooks/useFetchReviews'

import styles from './ProductDetail.module.css'
const ProductDetail = () => {
    const { productId } = useParams();
    const { product, isProductLoading, isProductError } = useFetchProduct(productId);
    const { reviews, isReviewsLoading, isReviewsError } = useFetchReviews(productId);

    if (isProductLoading) {
        return (<div>
            상품 정보를 불러오고 있습니다....
        </div>)
    }

    if (isProductError) {
        return (<div>
            상품 정보를 불러오는데 실패했습니다...
        </div>)
    }

    return (
        <div>
            <div className={styles.productContainer}>
                <img src={product.image} alt="" />
                <div className={styles.productInfo}>
                    <div className={styles.productCategory}>{product.category}</div>
                    <h2 className={styles.productName}>{product.name}</h2>
                    <div className={styles.productPrice}>{product.price.toLocaleString()}원</div>
                    <button>구매하기</button>
                </div>

            </div>
            <hr />
            <p className={styles.productDesc}>{product.description}</p>
            <h3>리뷰({reviews.length})</h3>
            <hr />
            <div className={styles.reviewItem}>
                <div className={styles.reviewHeader}>
                    <div>Alice</div>
                    <div>(4/5)</div>
                </div>

                <div className={styles.text}>너무 잘 사용하고 있습니다. 최고로 좋은 제품이에요. 다들 꼭 사세요~</div>
            </div>
        </div>

    )
}

export default ProductDetail