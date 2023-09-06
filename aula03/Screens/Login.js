import { View,  Text, TextInput, Button, StyleSheet, Image } from 'react-native'
const Login = () => {
  return ( 
    <View style={estilos.container}> 
      <Image style={estilos.logo}
        source={require('../assets/snack-icon.png')} 
      />     
      <Text style={estilos.titulo}>Login</Text>

      <TextInput style={estilos.input}
        placeholder={'E-mail'} 
        keyboardType={'email-address'}
      />
      <TextInput style={estilos.input}
        placeholder={'Senha'} 
        secureTextEntry={true}
      />

      <Button style={estilos.input} 
        title='Entrar'
        color='#841584'
              
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  //chamar na View o style
  container: {
    flex: 1, //expande 100% tela
    justifyContent: 'center',
    paddingHorizontal: 16    
  }, 

  logo: {
    height: 72,
    width: 72,     
  },
  titulo: {
    fontSize: 28, 
    fontWeight: 400, 
    textAlign:'cebter',
    paddingBottom: 24    
  },
  input: {
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16

  }

});

export default Login;



// SafeAreaView: é componente do funciona para IOS.