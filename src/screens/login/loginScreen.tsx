import React, { useState } from 'react';
import { View, Text, Alert , StyleSheet} from 'react-native';
import Icon from '@ant-design/react-native/lib/icon'
import Button from '@ant-design/react-native/lib/button'
import InputItem from '@ant-design/react-native/lib/input-item'
import WhiteSpace from '@ant-design/react-native/lib/white-space'
import Flex from '@ant-design/react-native/lib/flex'
import WingBlank from '@ant-design/react-native/lib/wing-blank'
import Toast from '@ant-design/react-native/lib/toast' 
import axios from 'axios';
export default function LoginScreen({navigation}:any){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (username:any) => {
    setUsername(username);
  };
  const handlePasswordChange = (password:any) => {
    setPassword(password);
  };

  //登录函数功能
  const handleLogin = () => {
    // 处理登录逻辑，例如验证用户名和密码等
    // 发起一个post请求
    const instance = axios.create({
      baseURL: 'http://47.102.117.173:5000',
    });
    instance.post('/user/login', {
      username: username,
      password: password
    })
    .then(function (response) {
      // 如果状态码为200，登录成功后跳转到 mainScresen
      if(response.status == 200){
        navigation.navigate('MainScreen');
      }
      console.log(response);
    })
    .catch(function (error) {
      showAlert('登录失败', '可能用户名或密码输入错误，请稍后再试。');
      console.log(error);
    });
  };

  //注册跳转页面函数
  const handleRegister = () => {
    // 处理注册逻辑，例如验证用户名和密码等

    // 注册成功后跳转到 registerScreen
    navigation.navigate('RegisterScreen');
  };

  //提示弹窗
  const showAlert = (title:any, message:any) => {
    Alert.alert(
      title,
      message,
      [
        { text: '确定', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      <Text style={styles.text}>登录页面</Text>
      <WhiteSpace size="xl" />
      <InputItem
            value={username}
            onChange={handleUsernameChange}
            placeholder="用户名">
            <Icon name="user" />
          </InputItem>
       <InputItem
            clear
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="密码">
            <Icon name="key"/>
          </InputItem>

          <WhiteSpace size="xl" />
      <Button type="primary" onPress={handleLogin}>
      登录
    </Button>
      <Button type="primary" onPress={handleRegister}>
      注册
    </Button>
    <WhiteSpace size="xl" />
      <Flex justify="center">
      <WingBlank size='lg'>
          <Icon name="qq" size='lg'/>
      </WingBlank>
      <WingBlank size='lg'>
          <Icon name='wechat' size='lg'/>
      </WingBlank>
          </Flex>
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