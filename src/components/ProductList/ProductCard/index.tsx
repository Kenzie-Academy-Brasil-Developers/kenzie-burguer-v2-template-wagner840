import { useContext } from 'react';
import { toast } from 'react-toastify';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { cartContext } from '../../../providers/cartContext';

interface Product {
  name: string;
  price: number;
  category: string;
  img: string;
  id: number;
}

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const { setCart, cart, setTotal, total } = useContext(cartContext);

  function handleAdd(prop: Product) {
    const newCart = [...cart, prop];

    function verifyProduct() {
      return cart.some((sale) => sale.id === product.id);
    }
    if (!verifyProduct()) {
      setCart(newCart);
      setTotal(total + product.price);
      toast.success('Produto adicionado ao carrinho ', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.warn('Produto Já adicionado ao carrinho, tente outro!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>
          {product.category}
        </StyledParagraph>
        <StyledParagraph className='price'>{product.price}</StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => handleAdd(product)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};
export default ProductCard;
