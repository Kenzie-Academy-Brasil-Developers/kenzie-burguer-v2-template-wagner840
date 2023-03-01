import { useContext } from 'react';
import { toast } from 'react-toastify';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { cartContext } from '../../../providers/cartContext';

const ProductCard = ({ name, price, category, img, product }) => {
  const { setCart, cart, setTotal, total } = useContext(cartContext);

  function handleAdd() {
    const newCart = [...cart, product];

    function verifyProduct() {
      return cart.some((sale) => sale.id === product.id);
    }
    if (!verifyProduct()) {
      setCart(newCart);
      setTotal(total + price);
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
        <img src={img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>{price}</StyledParagraph>
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
