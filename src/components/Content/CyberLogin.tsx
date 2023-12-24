import React from 'react';
import './CyberLogin.scss';

const CyberLogin: React.FC = () => {
  return (
    <div className="login">
      <div className="login_board">
        <div className="login_name">Login</div>
        <input className="login_input" type="text" placeholder="   Email" />
        <input className="login_input" type="text" placeholder="   Password" />
        <div className="login_close">Close</div>
      </div>
    </div>
  );
};
export default CyberLogin;
