import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import { setLogSwitcher } from '../../redux/reducers/searchSwitcher';
import './CyberLogin.scss';

const Login: React.FC = () => {
  const [errorWarning, setErrorWarning] = React.useState(true);
  const loginSwitcher = useSelector((state: winSatte) => state.searchswitcher.logvalue);
  const dispatch = useDispatch();

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !isValidEmail((event.target as HTMLInputElement).value) &&
      (event.target as HTMLInputElement).value.length > 0
    ) {
      setErrorWarning(false);
    } else if ((event.target as HTMLInputElement).value.length == 0) {
      setErrorWarning(true);
    } else {
      setErrorWarning(true);
    }
  };

  return (
    <>
      {loginSwitcher ? (
        <div className="login">
          <div className="login_board">
            <div className="login_name">
              {errorWarning ? <div>Login</div> : <>Email is invalid</>}
            </div>
            <input
              className="login_input"
              type="text"
              onChange={handleChange}
              placeholder="   Email"
            />
            <input className="login_input" type="text" placeholder="   Password" />
            <div className="login_close" onClick={() => dispatch(setLogSwitcher(!loginSwitcher))}>
              Close
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
