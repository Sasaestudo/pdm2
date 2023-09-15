import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Ionicons'

const Home = () => {
  return <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Meu App"/>
        <Appbar.Action icon="exit" onPress={() => {}}/>
      </Appbar.Header>

    </View>   
};


export default Home;

//https://reactnativepaper.com/