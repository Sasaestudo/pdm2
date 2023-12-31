import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Sobre from '../screens/Sobre';

const Drawer = createDrawerNavigator();

const NavegacaoGaveta = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>    
      <Drawer.Screen name='Sobre' component={Sobre}/>
      <Drawer.Screen name='Home' component={Home}/> 
    </Drawer.Navigator>    
  );
};


export default NavegacaoGaveta;