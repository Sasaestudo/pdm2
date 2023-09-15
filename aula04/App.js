import { useState, useEffect } from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home'

const App = () => {
  //const exibeSplash = false; //true = fica carregando 

  const [exibeSplash, setExibeSplash] = useState(true); //true = fica carregando 
  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 3000);
  }, []);

  return exibeSplash ? <Splash/> : <Home/>;
};

export default App;