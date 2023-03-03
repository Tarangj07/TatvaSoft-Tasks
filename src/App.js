// import logo from './logo.svg';
// import { ThemeProvider } from '@material-ui/core';
import './App.css';
// import FirstComponent from './component/FirstComponent';
import Title from './component/Title';
import Home from './component/Home';
// import Counter from './component/Counter';
import About from './component/About';

function App() {

  function callHome(){
    return <Home />
  }
  function callAbout(){
    return <About />
  }
  
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">

      {/* <Counter /> */}
      <Title />
      <button onClick={()=>callHome()}>Home</button>
      <button onClick={()=>callAbout()}>About</button>
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
