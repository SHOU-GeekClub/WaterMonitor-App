import React, { Component } from 'react';
import { View, Text, TextInput, Button ,StyleSheet, TextStyle} from 'react-native';



class LoginScreen extends Component<any, any>{
  constructor(props : any)  {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (username :any ) => {
    this.setState({ username });
  };

  handlePasswordChange = (password :any ) => {
    this.setState({ password });
  };

  handleLogin = () => {
    // 处理登录逻辑，例如验证用户名和密码等

    // 登录成功后跳转到 mainScreen
    this.props.navigation.navigate('MainScreen');
  };

  handleRegister = () => {
    // 处理登录逻辑，例如验证用户名和密码等

    // 登录成功后跳转到 mainScreen
    this.props.navigation.navigate('RegisterScreen');
  };

  render() {
    const { username, password } = this.state;

    return (
      <View>
        <Text style={styles_top.text}>登录页面</Text>
        <TextInput 
          style={styles_content.input}
          placeholder="用户名"
          value={username}
          onChangeText={this.handleUsernameChange}
        />
        <TextInput
          style={styles_content.input}
          placeholder="密码"
          secureTextEntry={true}
          value={password}
          onChangeText={this.handlePasswordChange}
        />
        <Button 
          title="登录" 
          onPress={this.handleLogin} />

        <Button 
          
          title="注册"
          onPress={this.handleRegister} />
      </View>
    );
  }
}
const styles_top = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
});

const styles_content = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
