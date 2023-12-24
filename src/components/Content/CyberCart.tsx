import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import { setCart } from '../../redux/reducers/searchReducer';
import axios from 'axios';
import './CyberCart.scss';

document.title = 'CYBERBALENCIAGA' + '   ' + 'CART';

const prerenderArray = [
  {
    value: 'Cyber fighter gloves',
    id: '99999999',
    link: 'https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/strangemask.png',
    price: 99999,
    test: 'dresses',
    category: 'dress',
  },
];
const NotFound = [
  {
    value: 'Cyber fighter gloves',
    id: '99999998',
    link: 'https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/strangemask.png',
    price: 10101,
    test: 'dresses',
    category: 'dress',
  },
];
type cartItem = {
  id: string;
};

type cartValue = {
  count: number;
  id: string;
}[];

type cartContent = {
  value: string;
  link: string;
  price: number;
  category: string;
  id: string;
};

type cartContents = cartContent[];

type cartContentItem = {
  item: cartContent;
  datavalue: number;
};

const CyberCart: React.FC = () => {
  const [cartContent, setCartContent] = React.useState<cartContents>(prerenderArray);

  const dispatch = useDispatch();
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const cartItems = useSelector((state: winSatte) => state.searchslice.cartvalue);

  React.useEffect(() => {
    console.log(cartContent[0].id);
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://6429b940ebb1476fcc4f9b86.mockapi.io/items`);
        if (data.length > 0 && Object.keys(cartItems).length > 0) {
          const myArrayFiltered = data.filter((el: cartContent) => {
            return cartItems.some((f: cartItem) => {
              return f.id == el.id;
            });
          });
          setCartContent(myArrayFiltered);
        } else if (data.length === 0 && Object.keys(cartItems).length > 0) {
          document.title = 'CYBERBALENCIAGA NOT FOUND';
          setCartContent(NotFound);
        } else {
          document.title = 'CYBERBALENCIAGA NOT FOUND';
          setCartContent(prerenderArray);
        }
      } catch (error) {
        alert('Ошибка при получении данных!');
      }
    }

    fetchPizza();
  }, [cartItems]);

  const itemCarts: cartValue =
    Object.keys(cartItems).length > 0
      ? [
          ...cartItems
            .reduce((mp, o) => {
              if (!mp.has(o.id)) mp.set(o.id, { ...o, count: 0 });
              mp.get(o.id).count++;
              return mp;
            }, new Map())
            .values(),
        ]
      : prerenderArray;

  const removeCartItem = ({ item, datavalue }: cartContentItem) => {
    if (datavalue > 1) {
      const indexCart = cartItems.findIndex(({ id }) => id === item.id);
      const delitItemCart = cartItems.filter((_, i) => i !== indexCart);
      dispatch(setCart(delitItemCart));
    }
  };

  const removeCartPosition = (item: cartContent) => {
    if (Object.keys(cartItems).length > 0) {
      const removethisposition = cartItems.filter((i) => i.id !== item.id);
      const removeposition = cartContent.filter((i) => i.id !== item.id);
      const filteredCartItem = removeposition.filter(
        (ele, ind) => ind === removeposition.findIndex((elem) => elem.id === ele.id),
      );
      const middledata =
        Object.keys(filteredCartItem).length > 0 ? filteredCartItem : prerenderArray;
      dispatch(setCart(removethisposition));
      setCartContent(middledata);
    }
  };

  const renderItemCartNumber = (item: cartContent) => {
    for (let i = 0; i < Object.keys(cartItems).length; i++) {
      if (item.id === itemCarts[i].id) {
        const datavalue = itemCarts[i].count;
        return (
          <div className="cart_block">
            <div className="cart_value">{item.value}</div>
            <div className="cart_button_box">
              <div className="cart_button">
                <div className="cart_sign" onClick={() => removeCartItem({ item, datavalue })}>
                  -
                </div>
              </div>
              <div className="cart_value">{itemCarts[i].count}</div>
              <div className="cart_button">
                <div
                  className="cart_sign"
                  onClick={() => dispatch(setCart([...cartItems, { id: item.id }]))}>
                  +
                </div>
              </div>
              <div className="cart_value"> {item.price * itemCarts[i].count} $</div>
            </div>
            <div className="cart_remove">
              <div className="cart_remove_remove" onClick={() => removeCartPosition(item)}>
                Remove
              </div>
            </div>
          </div>
        );
      }
    }
  };

  const renderSkeleton = () => {
    if (cartContent[0].price === prerenderArray[0].price) {
      return (
        <>
          <div className="emptycart">Cart is empty</div>
        </>
      );
    } else if (cartContent[0].price === NotFound[0].price) {
      return (
        <>
          <div className="emptycart">Data not found</div>
        </>
      );
    }
    return (
      <div className="notfound">
        <div className="notfound_text">Data not found</div>
      </div>
    );
  };

  return (
    <div>
      <div className={windowSize ? 'cartGrid_blur' : 'cartGrid'}>
        <div className="cart_content">
          {cartContent[0].id === prerenderArray[0].id
            ? renderSkeleton()
            : cartContent.map((item: cartContent) => (
                <div key={item.id} className="cart_item">
                  <div className="cart_picture_box">
                    <img className="cart_picture" src={item.link} alt="Link" />
                  </div>
                  {renderItemCartNumber(item)}
                </div>
              ))}
        </div>
        {cartContent[0].id === '99999999' ? (
          <div></div>
        ) : (
          <div className="cart_buybar">
            <div className="cart_buybar_buy">Buy</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberCart;