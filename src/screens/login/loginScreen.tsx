import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from '@ant-design/react-native/lib/icon'
import Button from '@ant-design/react-native/lib/button'
import InputItem from '@ant-design/react-native/lib/input-item'
import WhiteSpace from '@ant-design/react-native/lib/white-space'
import Flex from '@ant-design/react-native/lib/flex'
import WingBlank from '@ant-design/react-native/lib/wing-blank'
import Toast from '@ant-design/react-native/lib/toast' 
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