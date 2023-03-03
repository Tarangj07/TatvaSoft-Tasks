// import logo from './logo.svg';
// import { ThemeProvider } from '@material-ui/core';
import './App.css';
// import FirstComponent from './component/FirstComponent';
import Title from './component/Title';
import Home from './component/Home';
// import Counter from './component/Counter';
import About from './component/About';
import { useState } from 'react';

function App() {

  const [isHomeClick, setisHomeClick] = useState(false)
  const [isAboutClick, setisAboutClick] = useState(false)
  const [isTitleClick, setisTitleClick] = useState(true)

  function callHome() {
    setisHomeClick(true);
    setisTitleClick(false);
  }
  function callAbout() {
    setisAboutClick(true);
    setisTitleClick(false);
  }
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">

      {/* <Counter /> */}
      {isTitleClick && (<div><Title />
      <button onClick={callHome}>Home</button>
      <button onClick={callAbout}>About</button></div>)}
      
      {isHomeClick ? <Home/> : null}
      {isAboutClick ? <About/> : null}
      {/* <Title name="Spotify"/>
          <Title name="Amazon"/>
          <Title name="Meta"/> */}

      {/* <Home />
          <About /> */}
      {/* <FirstComponent /> */}
    </div>
    // </ThemeProvider>
  );
}

export default App;
