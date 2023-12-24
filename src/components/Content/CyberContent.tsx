import './CyberContent.scss';
import { useSelector } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import React from 'react';

const CyberContent = () => {
  React.useEffect(() => {
    document.title = 'CYBERBALENCIAGA';
  }, []);

  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  return (
    <div className={windowSize ? 'contentGrid_blur' : 'contentGrid'}>
      <div className="contentGrid1">
        <div className="grid-text">best outfits for everybody</div>
        <div className="grid-item">
          <img
            className="image_content"
            src="https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/human-legs.jpg"
            alt="description"
          />
        </div>
      </div>
      <div className="contentGrid1">
        <div className="grid-item">
          <img
            className="image_content"
            src="https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/human-armor.jpg"
            alt="description"
          />
        </div>
        <div className="grid-text">explore new tech ideas</div>
      </div>
      <div className="contentGrid1">
        <div className="grid-text">check out new implants</div>
        <div className="grid-item">
          <img
            className="image_content"
            src="https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/human-arms.jpg"
            alt="description"
          />
        </div>
      </div>
      <div className="contentGrid1">
        <div className="grid-item">
          <img
            className="image_content"
            src="https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/crysis-armor.jpg"
            alt="description"
          />
        </div>
        <div className="grid-text">sport and protection</div>
      </div>
    </div>
  );
};
export default CyberContent;
