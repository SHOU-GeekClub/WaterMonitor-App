import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (username) => {
    this.setState({ username });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleLogin = () => {
    // 处理登录逻辑，例如验证用户名和密码等

    // 登录成功后跳转到 mainScreen
    this.props.navigation.navigate('MainScreen');
  };

  render() {
    const { username, password } = this.state;

    return (
      <View>
        <Text style={styles.text}>登录页面</Text>
        <TextInput
          placeholder="用户名"
          value={username}
          onChangeText={this.handleUsernameChange}
        />
        <TextInput
          placeholder="密码"
          secureTextEntry={true}
          value={password}
          onChangeText={this.handlePasswordChange}
        />
        <Button title="登录" onPress={this.handleLogin} />
      </View>
    );
  }
}
const styles = {
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
};
export default LoginScreen;
