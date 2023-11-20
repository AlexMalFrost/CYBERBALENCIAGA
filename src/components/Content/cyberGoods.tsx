import './CyberContent.scss';
import './CyberGoods.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import { useSelector } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import axios from 'axios';
import SkeletonGoods from '../Uikit/SkeletonGoods';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
  },
];

type dressesContent = {
  value: string;
  link: string;
  price: number;
  category: string;
}[];

const CyberGoods = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dressesContent, setDressesContent] = React.useState<dressesContent>(prerenderArray);
  const [goodsData, setGoodsData] = React.useState(widowsize);
  const [images, setImages] = React.useState(dressesContent.slice(0, goodsData));
  const navigate = useNavigate();

  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const searchGoods = useSelector((state: winSatte) => state.searchslice.value);
  const searchswitcher = useSelector((state: winSatte) => state.searchswitcher.value);

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const searchh = searchGoods ? `&search=${searchGoods}` : '';
        const { data } = await axios.get(
          `https://6429b940ebb1476fcc4f9b86.mockapi.io/items?${searchh}`,
        );
        if (data.length > 0 && data !== dressesContent) {
          setDressesContent(data);
          setImages(data.slice(0, goodsData));
        } else {
          setDressesContent(prerenderArray);
          setImages([]);
        }
        if (searchGoods !== searchParams.get('searchGoods')) {
          setSearchParams({ searchGoods });
        }
      } catch (error) {
        alert('Ошибка при получении данных!');
      }
    }

    fetchPizza();
  }, [searchGoods]);

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
              : images.map((item) => (
                  <div key={item.value} className="goods_up">
                    <img className="image_goods" src={item.link} alt="Link" />
                    <div className="goodstext">
                      {item.value}
                      <div>{item.price}</div>
                    </div>
                  </div>
                ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};
export default CyberGoods;
