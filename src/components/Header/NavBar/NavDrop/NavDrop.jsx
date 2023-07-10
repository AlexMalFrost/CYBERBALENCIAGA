import React from 'react';
import './NavDrop.scss';
import data from './cyberdata.json';

const arr = [];
for (let val in data) {
  if (typeof data[val] === 'object') {
    for (let val2 in data[val]) {
      for (let val3 in data[val][val2]) {
        for (let val4 in data[val][val2][val3]) {
          if (val4 === 'new_arrivials' && data[val][val2][val3][val4]) {
            arr.push(data[val][val2][val3].title);
          }
        }
      }
    }
  }
}

const navBarDrop = (variable) => {
  let localVariable = [];
  for (let val in variable) {
    localVariable.push(variable[val].title);
  }
  return localVariable;
};

export const NavDrop = ({ women, men, implants }) => {
  console.log('huhuhu');
  return (
    <div className={men || women || implants ? 'navdrop_show' : 'navdrop_show_alter'}>
      <div className="navdrop">
        <label>
          <div tabIndex="0" className="navdrop_name">
            New arravials
          </div>
          <ul className="navdrop_content">
            {arr.map((item) => (
              <li key={item}>
                <p className="navdrop_p">{item}</p>
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div className={men ? 'navdrop' : 'navdrop_notvisible'}>
        <label>
          <div tabIndex="0" className="navdrop_name">
            men
          </div>
          <ul className="navdrop_content">
            {navBarDrop(data[1].men).map((item) => (
              <li key={item}>
                <p className="navdrop_p">{item}</p>
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div className={women ? 'navdrop' : 'navdrop_notvisible'}>
        <label>
          <div tabIndex="0" className="navdrop_name">
            women
          </div>
          <ul className="navdrop_content">
            {navBarDrop(data[2].women).map((item) => (
              <li key={item}>
                <p className="navdrop_p">{item}</p>
              </li>
            ))}
          </ul>
        </label>
      </div>
      <div className={implants ? 'navdrop' : 'navdrop_notvisible'}>
        <label>
          <div tabIndex="0" className="navdrop_name">
            implants
          </div>
          <ul className="navdrop_content">
            {navBarDrop(data[0].implants).map((item) => (
              <li key={item}>
                <p className="navdrop_p">{item}</p>
              </li>
            ))}
          </ul>
        </label>
      </div>
    </div>
  );
};
export default NavDrop;
