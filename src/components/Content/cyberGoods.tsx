import './CyberContent.scss';
import './CyberGoods.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import { useSelector } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import axios from 'axios';
import SkeletonGoods from './SkeletonGoods';

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
  //const [dressSwitcher, setDressSwitcher] = React.useState(false);
  const [dressesContent, setDressesContent] = React.useState<dressesContent>([]);
  const [goodsData, setGoodsData] = React.useState(widowsize);
  const [images, setImages] = React.useState(prerenderArray.slice(0, goodsData));
  const [notFound, setNotFound] = React.useState(false);

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
        setDressesContent(data);
        setImages(data.slice(0, goodsData));
        //setDressSwitcher(true);
      } catch (error) {
        alert('Ошибка при получении данных!');
      }
    }

    fetchPizza();
  }, [searchGoods]);

  console.log(searchGoods);

  const renderSkeleton = () => {
    setTimeout(() => {
      setNotFound(true);
    }, 1000);
    if (notFound === false) {
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

  if (!dressesContent) {
    return <>Loading...</>;
  }

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
            {dressesContent.length === 0
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
