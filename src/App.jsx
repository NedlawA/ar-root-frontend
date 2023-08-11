import { useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import axios from 'axios';
import Display from './components/Display/Display';

const baseUrl = import.meta.env.VITE_APP_BACKEND;

const App = () => {
  const [resultDisplay, setResultDisplay] = useState([]);
  const [formDisplay, setFormDisplay] = useState([{formVer:'', engLetters:'', engDef:''}]);

  const handleSearch = userSearchData => {
    let param = "";
    const english = /^[A-Za-z0-9]*$/;
    if (english.test(userSearchData.data[0])) {
      param = "en_letters?engLetters=";
    } else {
      param = "ar_letters?letters=";
    }
    axios
      .get(`${baseUrl}/words/${param}${userSearchData.data}`)
      .then((res) => (res === [] ? setResultDisplay('Root not found') : setResultDisplay(res.data[0])))
      .catch((err) => console.error(err));
  };

  const handleGetForms = id => {
    console.log('oh no');
    axios
    .get(`${baseUrl}/words/${id}/forms`)
    .then((res) => setFormDisplay(res.data[0]))
    .catch((err) => console.error(err))
  }
  return (
    <>
      <Search handleSearch={handleSearch} />
      <Display resultDisplay={resultDisplay} handleGetForms={handleGetForms} formDisplay={formDisplay}/>
    </>
  );
};

export default App;
