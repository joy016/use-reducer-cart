import React from 'react';
import styles from '../styles/cartItem.module.scss';
import cartItems from '../constant/data';

const CartItem = () => {
  return (
    <div className={styles.cartItemContainer}>
      <div>Your Bag</div>
      {cartItems.map((item) => (
        <div className={styles.cartItemContainer__items} key={item.id}>
          <img src={item.img} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button>remove</button>
          </div>
          <div>
            <p>{item.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
