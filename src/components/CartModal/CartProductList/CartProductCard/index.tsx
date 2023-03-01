import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { cartContext } from '../../../../providers/cartContext';

interface Product {
  name: string;
  price: number;
  category: string;
  img: string;
  id: number;
}

interface Props {
  product: Product;
}

const CartProductCard = ({ product }: Props) => {
  const { cart, setCart, total, setTotal } = useContext(cartContext);

  function removeProduct() {
    const newCart = cart.filter((item) => item.id !== product.id);
    const newTotal = total - product.price;
    setCart(newCart);
    setTotal(newTotal);
  }

  return (
    <StyledCartProductCard key={product.id}>
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={removeProduct}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
