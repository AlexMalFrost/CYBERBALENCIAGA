import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import { setLogSwitcher } from '../../redux/reducers/searchSwitcher';
import './CyberLogin.scss';

const Login: React.FC = () => {
  const [errorWarning, setErrorWarning] = React.useState(true);
  const [passwordWarning, setPasswordWarning] = React.useState(false);
  const [warningMessage, setWarningMessage] = React.useState('');
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
    } else if (event.target.value.length === 0) {
      setErrorWarning(true);
    } else {
      setErrorWarning(true);
    }
  };

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 6 && event.target.value.length > 0) {
      setPasswordWarning(true);
      setWarningMessage('Too_short');
    } else if (
      event.target.value.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== -1 &&
      event.target.value.length > 0
    ) {
      setPasswordWarning(true);
      setWarningMessage('Bad char');
    } else if (event.target.value.length > 50) {
      setPasswordWarning(true);
      setWarningMessage('Too_long');
    } else if (event.target.value.search(/\d/) === -1 && event.target.value.length > 0) {
      setPasswordWarning(true);
      setWarningMessage('No number');
    } else if (event.target.value.search(/[a-zA-Z]/) === -1 && event.target.value.length > 0) {
      setPasswordWarning(true);
      setWarningMessage('No letter');
    } else {
      setPasswordWarning(false);
    }
  };

  const errorController = () => {
    if (errorWarning === false) {
      return <>Email is invalid</>;
    } else {
      return <>{passwordWarning ? <>{warningMessage}</> : <div>Login</div>}</>;
    }
  };

  const errorClose = () => {
    dispatch(setLogSwitcher(!loginSwitcher));
    setWarningMessage('Login');
  };

  return (
    <>
      {loginSwitcher ? (
        <div className="login">
          <div className="login_board">
            <div className="login_name">{errorController()}</div>
            <input
              className="login_input"
              type="text"
              onChange={handleChange}
              placeholder="   Email"
            />
            <input
              className="login_input"
              type="text"
              onChange={passwordChange}
              placeholder="   Password"
            />
            <div className="login_close" onClick={() => errorClose()}>
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
