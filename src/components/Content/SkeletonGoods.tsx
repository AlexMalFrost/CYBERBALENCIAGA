import React from 'react';
import './spinLoader.scss';

const SkeletonGoods: React.FC = () => {
  return (
    <div className="center">
      <div className="ring"></div>
      <span className="skeletongoods">loading...</span>
    </div>
  );
};

export default SkeletonGoods;
