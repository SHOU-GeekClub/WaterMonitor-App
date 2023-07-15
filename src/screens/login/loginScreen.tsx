import React, { useState } from 'react';
import { View, Text, TextInput, Button ,StyleSheet} from 'react-native';

export default function LoginScreen({navigation}:any){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (username:any) => {
    setUsername(username);
  };

  const handlePasswordChange = (password:any) => {
    setPassword(password);
  };

  const handleLogin = () => {
    // 处理登录逻辑，例如验证用户名和密码等

    // 登录成功后跳转到 mainScreen
    navigation.navigate('MainScreen');
  };

  const handleRegister = () => {
    // 处理注册逻辑，例如验证用户名和密码等

    // 注册成功后跳转到 registerScreen
    navigation.navigate('RegisterScreen');
  };

  return (
    <View>
      <Text style={styles.text}>登录页面</Text>
      <TextInput 
        style={styles.input}
        placeholder="用户名"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="密码"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button 
        title="登录" 
        onPress={handleLogin} />

      <Button 
        title="注册"
        onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 8,
  },
});