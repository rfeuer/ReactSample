import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const api_key = "	AIzaSyB_MRVOqqmZ7udA5FNGFGD8IJLCY3gsXHg";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
