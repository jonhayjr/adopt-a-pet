import React, { useRef, useMemo} from 'react';

// import useHistory here.
import {useNavigate, useLocation} from 'react-router-dom';

const Search = () => {

  // get the history object here
  const navigate = useNavigate();

  const {search} = useLocation();

  const queryParams = useMemo(()=> {
    return new URLSearchParams(search)
  }, [search])

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirect with history.push()
    navigate(`/search?${searchQuery}`)
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
