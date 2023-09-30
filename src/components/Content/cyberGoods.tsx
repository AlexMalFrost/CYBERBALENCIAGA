import './CyberContent.scss';
import './CyberGoods.scss';
import dataNav from '../../assets/datamNav.json';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import { useSelector } from 'react-redux';
import { winSatte } from '../../redux/reducers';

let widowsize = 3;
if (window.innerWidth < 769) {
  widowsize = 4;
} else if (window.innerWidth > 769) {
  widowsize = 3;
}

const CyberGoods = () => {
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const [goodsData, setGoodsData] = React.useState(widowsize);
  const [images, setImages] = React.useState(dataNav.goods.slice(0, goodsData));

  const fetchMoreData = () => {
    setTimeout(() => {
      if (window.innerWidth < 769) {
        if (dataNav.goods.length > goodsData) {
          setGoodsData(goodsData + 4);
          setImages(dataNav.goods.slice(0, goodsData + 4));
        }
      } else if (window.innerWidth > 769) {
        if (dataNav.goods.length > goodsData) {
          setGoodsData(goodsData + 3);
          setImages(dataNav.goods.slice(0, goodsData + 3));
        }
      }
    }, 600);
  };

  return (
    <div className={windowSize ? 'goodsGrid_blur' : 'goodsGrid'}>
      <div>
        <InfiniteScroll
          className="goodsGrid1"
          dataLength={images.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<div></div>}>
          {images.map((item) => (
            <div key={item.link} className="goods_up">
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
  );
};
export default CyberGoods;
