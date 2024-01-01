import './CyberItem.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import { setCart } from '../../redux/reducers/searchReducer';
import axios from 'axios';
import SkeletonGoods from '../Uikit/SkeletonGoods';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type dressesContents = {
  value: string;
  link: string;
  price: number;
  category: string;
  id: string;
};

type dressesContent = dressesContents[];

const prerenderArray: dressesContent = [
  {
    value: 'Cyber fighter gloves',
    link: 'https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/strangemask.png',
    price: 99,
    category: 'dress',
    id: '000000',
  },
];
const CyberItem = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [itemContent, setItemContent] = React.useState<dressesContent>(prerenderArray);
  const searchData = useSelector((state: winSatte) => state.itemslice.value);
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const cartItems = useSelector((state: winSatte) => state.searchreducer.cartvalue);
  const searchItem = params.itempage ? params.itempage : searchData;

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const searchh = searchItem ? `id=${searchItem}` : ' ';
        const { data } = await axios.get(
          `https://6429b940ebb1476fcc4f9b86.mockapi.io/items?${searchh}`,
        );
        if (data.length > 0 && data !== itemContent) {
          setItemContent(data);
          document.title = 'CYBERBALENCIAGA' + '   ' + data[0].value.toUpperCase();
        } else {
          document.title = 'CYBERBALENCIAGA NOT FOUND';
          setItemContent(prerenderArray);
        }
      } catch (error) {
        alert('Ошибка при получении данных!');
      }
    }
    fetchPizza();
  }, [searchItem]);

  function updateCart(item: dressesContents) {
    const length = Object.keys(cartItems).length;
    if (length > 0) {
      dispatch(setCart([...cartItems, { id: item.id }]));
    } else {
      dispatch(setCart([{ id: item.id }]));
    }
  }

  const renderItem = (item: dressesContents) => {
    if (item.price * 2 > 35) {
      return (
        <div className="item_price_block">
          <Link to={'/CYBERBALENCIAGA/CART'}>
            <div className="item_price" onClick={() => updateCart(item)}>
              <div className="item_price_now">Buy now for&nbsp;&nbsp;</div>
              <div className="item_price_now_through"> {item.price * 2}$</div>
              <div className="item_price_now"> &nbsp;&nbsp;{item.price}$</div>
            </div>
          </Link>
          <div className="item_price_stars">
            <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
            <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
            <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
            <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
            <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
            <div className="item_price">
              <div className="item_price_now">5 of 5</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="item_price_block">
        <Link to={'/CYBERBALENCIAGA/CART'}>
          <div className="item_price" onClick={() => updateCart(item)}>
            <div className="item_price_now">Buy now for</div>
            <div className="item_price_now"> &nbsp;{item.price}$</div>
          </div>
        </Link>
        <div className="item_price_stars">
          <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
          <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
          <FontAwesomeIcon className="item_icon_stars" icon={faStar} />
          <div className="item_price">
            <div className="item_price_now">3 of 5</div>
          </div>
        </div>
      </div>
    );
  };

  const renderSkeleton = () => {
    if (itemContent.length === prerenderArray.length) {
      return (
        <>
          <div className="itemRenderSkeleton">
            <SkeletonGoods />
          </div>
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
      <div className={windowSize ? 'goodsGrid_blur' : 'item'}>
        {itemContent[0].id === prerenderArray[0].id
          ? renderSkeleton()
          : itemContent.map((item: dressesContents) => (
              <div className="item_content" key={item.id}>
                <img className="item_picture" src={item.link} alt="Link" />
                <div className="item_box">
                  {renderItem(item)}
                  <div className="item_name">{item.value}</div>
                  <div className="item_text">
                    <div className="item_text_center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deserunt
                      sapiente quidem amet delectus consequatur minima expedita. Quod, minima.
                      Placeat assumenda molestiae temporibus a. Ipsam ipsum fugit totam quis itaque!
                    </div>
                  </div>
                  <div className="item_check_also">Check also ...</div>
                  <div className="item_also">
                    <img className="item_picture_also" src={item.link} alt="Link" />
                    <img className="item_picture_also" src={item.link} alt="Link" />
                    <img className="item_picture_also" src={item.link} alt="Link" />
                    <img className="item_picture_also" src={item.link} alt="Link" />
                    <img className="item_picture_also" src={item.link} alt="Link" />
                    <img className="item_picture_also" src={item.link} alt="Link" />
                    <img className="item_picture_also" src={item.link} alt="Link" />
                    <img className="item_picture_also" src={item.link} alt="Link" />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
export default CyberItem;
