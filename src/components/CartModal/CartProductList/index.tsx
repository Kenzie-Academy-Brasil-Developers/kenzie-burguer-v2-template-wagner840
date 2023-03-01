import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { cartContext } from '../../../providers/cartContext';

const CartProductList = () => {
  const { cart, setCart, total, setTotal } = useContext(cartContext);
  function handleDelete() {
    setCart([]);
    setTotal(0);
  }
  return (
    <StyledCartProductList>
      <ul>
        {cart.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {total.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={handleDelete}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};
export default CartProductList;
