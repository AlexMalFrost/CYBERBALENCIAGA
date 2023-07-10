import './CyberContent.scss';
import pic1 from '../../assets/img/outfits/Yuan-Xin-Sci-Fi-7112690.jpg';
import pic2 from '../../assets/img/outfits/1465335654_alessandro-giulianelli_sci-fi-female-character_4.jpg';
import pic3 from '../../assets/img/implants/cc6f40ae7836a757d28b981c6f09cc5f.jpg';
import pic4 from '../../assets/img/outfits/22gait-ns2-mltpl-review12-0004.jpg';

const CyberContent = ({ active }) => {
  console.log('hhi');
  return (
    <div className={active ? 'contentGrid_blur' : 'contentGrid'}>
      <div className="contentGrid1">
        <div className="grid-text">best outfits for everybody</div>
        <div className="grid-item">
          <img src={pic1} alt="description" />
        </div>
      </div>
      <div className="contentGrid1">
        <div className="grid-item">
          <img src={pic2} alt="description" />
        </div>
        <div className="grid-text">explore new tech ideas</div>
      </div>
      <div className="contentGrid1">
        <div className="grid-text">check out new implants</div>
        <div className="grid-item">
          <img src={pic3} alt="description" />
        </div>
      </div>
      <div className="contentGrid1">
        <div className="grid-item">
          <img src={pic4} alt="description" />
        </div>
        <div className="grid-text">sport and protection</div>
      </div>
    </div>
  );
};
export default CyberContent;
