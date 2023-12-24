import './CyberContent.scss';
import './CyberGoods.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import { setItem } from '../../redux/reducers/itemReducer';
import axios from 'axios';
import SkeletonGoods from '../Uikit/SkeletonGoods';
import { Link, useParams } from 'react-router-dom';

let widowsize = 3;
if (window.innerWidth < 769) {
  widowsize = 4;
} else if (window.innerWidth > 769) {
  widowsize = 3;
}

const prerenderArray = [
  {
    value: 'Cyber fighter gloves',
    link: 'https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/strangemask.png',
    price: 99,
    category: 'dress',
    id: '1',
  },
];

type dressesContent = {
  value: string;
  link: string;
  price: number;
  category: string;
  id: string;
};

type dressesContents = dressesContent[];

const CyberGoods = () => {
  const [dressesContent, setDressesContent] = React.useState<dressesContents>(prerenderArray);
  const [goodsData, setGoodsData] = React.useState(widowsize);
  const [images, setImages] = React.useState(dressesContent.slice(0, goodsData));

  const params = useParams();
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const searchData = useSelector((state: winSatte) => state.searchslice.value);
  const searchGoods = params.contentpage ? params.contentpage : searchData;
  const searchswitcher = useSelector((state: winSatte) => state.searchswitcher.value);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const searchh = searchGoods ? `&search=${searchGoods}` : ' ';
        const { data } = await axios.get(
          `https://6429b940ebb1476fcc4f9b86.mockapi.io/items?${searchh}`,
        );
        if (data.length > 0 && data !== dressesContent) {
          setDressesContent(data);
          setImages(data.slice(0, goodsData));
          document.title = 'CYBERBALENCIAGA' + '   ' + searchGoods.toUpperCase();
        } else {
          document.title = 'CYBERBALENCIAGA NOT FOUND';
          setDressesContent(prerenderArray);
          setImages([]);
        }
      } catch (error) {
        alert('Ошибка при получении данных!');
      }
    }

    fetchPizza();
  }, [searchGoods, params]);

  const renderSkeleton = () => {
    if (dressesContent.length === prerenderArray.length && images.length > 0) {
      return (
        <>
          <div>
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

  const fetchMoreData = () => {
    setTimeout(() => {
      if (window.innerWidth < 769) {
        if (dressesContent.length > goodsData) {
          setGoodsData(goodsData + 4);
          setImages(dressesContent.slice(0, goodsData + 4));
        }
      } else if (window.innerWidth > 769) {
        if (dressesContent.length > goodsData) {
          setGoodsData(goodsData + 3);
          setImages(dressesContent.slice(0, goodsData + 3));
        }
      }
    }, 600);
  };

  function updateSearchItem(str: string) {
    dispatch(setItem(str));
  }

  const renderItem = (item: dressesContent) => {
    const itemLink = item.id;
    return (
      <div key={item.id} className="goods_up" onClick={() => updateSearchItem(item.id)}>
        <Link to={`/CYBERBALENCIAGA/${itemLink}`}>
          <img className="image_goods" src={item.link} alt="Link" />
          <div className="goodstext">
            {item.value}
            <div>{item.price}</div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div className={windowSize ? 'goodsGrid_blur' : 'goodsGrid'}>
        <div>
          <div className="closesearchcontent">
            {searchswitcher ? (
              <div className="text_arrow_search">SHOWING RESULTS FOR "{searchGoods}"</div>
            ) : (
              <></>
            )}
          </div>
          <InfiniteScroll
            className="goodsGrid1"
            dataLength={images.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<div></div>}>
            {dressesContent.length === prerenderArray.length
              ? renderSkeleton()
              : images.map((item) => renderItem(item))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};
export default CyberGoods;
