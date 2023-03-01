import { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { cartContext } from '../../providers/cartContext';

const ProductList = () => {
  const { products, search, filteredProducts, setFilteredProducts } =
    useContext(cartContext);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <StyledProductList>
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </StyledProductList>
  );
};

export default ProductList;
