import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import searchReducer from './searchReducer';
import { setCart, setSearch } from './searchReducer';
import SkeletonGoods from '../../components/Uikit/SkeletonGoods';
import UiFooter from '../../components/Uikit/UiFooter';
import CyberContent from '../../components/Content/CyberContent';
import { Provider } from 'react-redux';
import Login from '../../components/Uikit/Login';
import store from '../store';

afterEach(() => {
  cleanup();
});

describe('test redux', () => {
  it('nana', () => {
    const state = { cartvalue: [{ id: '5555555' }], value: '0000000' };
    const result = searchReducer(state, { type: '' });
    expect(result).toEqual({ cartvalue: [{ id: '5555555' }], value: '0000000' });
  });
  it('huhu', () => {
    const state = { cartvalue: [{ id: '0000000' }] };
    const action = setCart({ id: '0500000' });
    const result = searchReducer(state, action);
    expect(result.cartvalue['id']).toBe('0500000');
  });
  it('haha', () => {
    const state = { value: '9999998' };
    const action = { type: setSearch.type, payload: 'false' };
    const result = searchReducer(state, action);
    expect(result.value).toBe('false');
  });
  test('renders footer', () => {
    function wrapper() {
      return (
        <Provider store={store}>
          <UiFooter />
        </Provider>
      );
    }
    render(wrapper());
    const linkElement = screen.getByText(/Career at CyberBalenciaga/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders skeleton', () => {
    function wrapper() {
      return (
        <Provider store={store}>
          <SkeletonGoods />
        </Provider>
      );
    }

    render(wrapper());
    const linkElement = screen.getByText(/loading.../i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders cybercontent', () => {
    function wrapper() {
      return (
        <Provider store={store}>
          <CyberContent />
        </Provider>
      );
    }
    render(wrapper());
    const linkElement = screen.getByText(/explore/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders login', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login />
        </Provider>,
      )
      .toJSON();
    console.log(tree);
  });
});
