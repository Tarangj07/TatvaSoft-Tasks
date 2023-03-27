// import logo from './logo.svg';
// import { ThemeProvider } from '@material-ui/core';
import './App.css';
// import FirstComponent from './component/FirstComponent';
import Title from './component/Title';
import Home from './component/Home';
import Counter from './component/Counter';
import About from './component/About';
import { useState } from 'react';
import LoginForm from './component/LoginForm';
// import BigApp from './components/getDerivedStateFromProps1';
// import ComponentDidMountMethod from './components/ComponentDidMountMethod';
// import ShouldComponentUpdate from './components/ShouldComponentUpdate';
// import GetSnapshotBeforeUpdate from './components/GetSnapshotBeforeUpdate';
// import ComponentDidUpdate from './components/ComponentDidUpdate';
// import ComponentWillUnmount from './components/ComponentWillUnmount';
import PurComponent from './component/PurComponent';
import FocusInput from './component/FocusInput';
import RenderPropsComponent from './component/RenderPropsComponent';

function App() {

  // <ComponentWillUnmount />
  // <ComponentDidUpdate />
  // <GetSnapshotBeforeUpdate />
  // <ShouldComponentUpdate />
  // <ComponentDidMountMethod />
  // <BigApp />

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
      <RenderPropsComponent render={() => {
        return (
          <h3>I am coming from render props.</h3>
        )
      }} />

      <LoginForm />
      <PurComponent />
      <Counter />
      {isTitleClick && (<div><Title />
        <button onClick={callHome}>Home</button>
        <button onClick={callAbout}>About</button></div>)}

      {isHomeClick ? <Home /> : null}
      {isAboutClick ? <About /> : null}
      <Title name="Spotify" />
      <Title name="Amazon" />
      <Title name="Meta" />

      <FocusInput />
      <Home />
      {/* <About /> */}
      {/* <FirstComponent /> */}
    </div>
    // </ThemeProvider>
  );
}

export default App;
