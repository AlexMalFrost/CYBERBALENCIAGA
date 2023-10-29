import './Searchinput.scss';
import { useSelector, useDispatch } from 'react-redux';
import { winSatte } from '../../redux/reducers';
import React from 'react';
import { setSearch } from '../../redux/reducers/searchReducer';
import { setSwitcher } from '../../redux/reducers/searchSwitcher';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SearchInput = () => {
  const windowSize = useSelector((state: winSatte) => state.windowsize.value);
  const [searchData, setSearchData] = React.useState([]);
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState('');
  const [slide, setSlide] = React.useState(0);
  const [searchSize, setSearchSize] = React.useState(2);

  React.useEffect(() => {
    if (window.innerWidth < 426) {
      setSearchSize(2);
    } else if (window.innerWidth > 769) {
      setSearchSize(4);
    } else if (window.innerWidth > 426) {
      setSearchSize(3);
    }
  }, [window.innerWidth]);

  const sliderLeft = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  const sliderRight = () => {
    if (slide + 1 < Object.keys(searchData).length - (searchSize - 1)) {
      setSlide(slide + 1);
    }
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      async function fetchPizza() {
        try {
          const searchh = query ? `&search=${query}` : '';
          if (query) {
            const { data } = await axios.get(
              `https://6429b940ebb1476fcc4f9b86.mockapi.io/items?${searchh}`,
            );
            setSearchData(data);
          }
        } catch (error) {
          alert('Ошибка при получении данных!');
        }
      }

      fetchPizza();
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [query]);

  function updateSearchValue(str: string) {
    dispatch(setSearch(str));
    console.log(str);
    setQuery('');
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchData([]);
    setQuery(e.target.value);
    dispatch(setSwitcher(true));
  }
  return (
    <>
      {query ? (
        <div className="searchBox">
          <label>
            <ul className="ul_search_content">
              {Object.keys(searchData).length > searchSize ? (
                <button type="button" className="search_arrow_button" onClick={() => sliderLeft()}>
                  <FontAwesomeIcon icon={faPlay} className="search_icon_navdrop" rotation={180} />
                </button>
              ) : (
                <></>
              )}
              <div className="search_result">
                {searchData.slice(slide, slide + searchSize).map((item: any) => (
                  <li key={item.value}>
                    <div className="search_image">
                      <img className="search_image_result" src={item.link} alt="Link" />
                    </div>
                    <Link to={`/CYBERBALENCIAGA/content`}>
                      <div
                        className="search_text_result"
                        onClick={() => updateSearchValue(item.value)}>
                        {item.value}
                      </div>
                    </Link>
                  </li>
                ))}
              </div>
              {Object.keys(searchData).length > searchSize ? (
                <button type="button" className="search_arrow_button" onClick={() => sliderRight()}>
                  <FontAwesomeIcon className="search_icon_navdrop" icon={faPlay} />
                </button>
              ) : (
                <></>
              )}
            </ul>
          </label>
        </div>
      ) : (
        <></>
      )}
      <div className={windowSize ? 'uisearchcomponent_blur' : 'uisearchcomponent'}>
        <svg
          className="uilogosvg"
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g fill="#929292" id="icon-111-search">
              <path
                d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z"
                id="search"
              />
            </g>
          </g>
        </svg>
        <input
          type="text"
          value={query}
          id="site-search"
          className="uisearchinput"
          placeholder="    Search"
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchInput;
