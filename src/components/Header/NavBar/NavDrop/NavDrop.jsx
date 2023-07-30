import React from 'react';
import './NavDrop.scss';
import dataNav from '../../../../assets/datamNav.json';

export const NavDrop = ({ prop }) => {
  return (
    <div className="navBarDropBar">
      {Object.keys(dataNav.datam).map((val) => (
        <div
          key={val}
          className={prop === dataNav['iitems'][val] ? 'navdrop_show' : 'navdrop_notvisible'}>
          <div>
            <label>
              <ul className="navdrop_content">
                {dataNav.datam[val].map((item) => (
                  <li key={item}>
                    <p className="navdrop_p">{item}</p>
                  </li>
                ))}
              </ul>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NavDrop;
