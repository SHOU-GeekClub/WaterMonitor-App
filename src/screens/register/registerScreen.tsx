import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios'
import RadioItem from '@ant-design/react-native/lib/radio/RadioItem';
import List from '@ant-design/react-native/lib/list';
import WhiteSpace from '@ant-design/react-native/lib/white-space'

export default function RegisterScreen({navigation}:any){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [nname, setNname] = useState('');
  const [ggender, setGgender] = useState(1);
  const [role, setRole] = useState(1);

  const handleRegister = () => {
    //发送请求
    axios.post('http://47.102.117.173:5000/User/Register', {
      username: username,
      password: password,
      cPassword: cPassword,
      nname: nname,
      ggender: ggender,
      role: role
    })
    .then(function (response) {
      //当注册成功跳转到成功提示页面
      if(response.status == 200){
        navigation.navigate('SuccessScreen');
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>注册界面</Text>
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <TextInput
        style={styles.input}
        placeholder="用户名"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="密码"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="确认密码"
        secureTextEntry={true}
        value={cPassword}
        onChangeText={text => setCPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="真实姓名"
        value={nname}
        onChangeText={text => setNname(text)}
      />
      <List renderHeader="请选择您的性别">
          <RadioItem
            checked={ggender === 1}
            onChange={() => setGgender(1)} // 更新ggender状态为1
          >
            男性
          </RadioItem>
          <RadioItem
            checked={ggender === 2}
            onChange={() => setGgender(2)} // 更新ggender状态为2
          >
            女性
          </RadioItem>
        </List>
        <List renderHeader="请选择您的身份">
          <RadioItem
            checked={role === 1}
            onChange={() => setRole(1)} // 更新role状态为1
          >
            管理员
          </RadioItem>
          <RadioItem
            checked={role === 2}
            onChange={() => setRole(2)} // 更新role状态为2
          >
            生产队长
          </RadioItem>
          <RadioItem
            checked={role === 3}
            onChange={() => setRole(3)} // 更新role状态为3
          >
            养殖人员
          </RadioItem>
        </List>
      <Button title="注册" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
  },
});


