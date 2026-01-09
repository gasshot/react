import { useState, useEffect } from "react";

function useFetchProduct(productId) {
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [isProductError, setIsProductError] = useState(false);

  console.log(productId);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsProductLoading(true);
        const response = await fetch(`http://localhost:3000/products/${productId}`);

        if(!response.ok){
            throw new Error("");
        }

        const json = await response.json();
        
        setProduct(json);
        setIsProductLoading(false);
      } catch {
        setIsProductError(true);
        setIsProductLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  return {
    product,
    isProductLoading,
    isProductError,
  };
}
export default useFetchProduct;
