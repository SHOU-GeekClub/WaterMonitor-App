import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { bodyData, ID } from '../login/loginScreen';
import List from '@ant-design/react-native/lib/list'
import RadioItem from '@ant-design/react-native/lib/radio/RadioItem'
import axios from 'axios';
import WhiteSpace from '@ant-design/react-native/lib/white-space'
export default function MineScreen({navigation}:any){
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [id, setID] = useState('');
        const [nname, setNname] = useState('');
        const [ggender, setGgender] = useState(1);
        const [role, setRole] = useState(1);
        
        if(bodyData == ""){
            console.log(bodyData)
            //返回登录
        }

        //点击修改信息提交业务
        const handleEdit = () => {
            //发送请求
            const instance = axios.create({
                baseURL: 'http://47.102.117.173:5000',
                headers: {'Application-Token': bodyData}
              });
            instance.post('/User/UserEdit', {
            id: ID,
            username: username,
            password: password,
            nname: nname,
            ggender: ggender,
            role: role
              })
            .then(function (response) {
              //当修改成功跳转到成功提示页面
              if(response.status == 200){
              }
              console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.response)
            });
          };

        //注销账号
        const handleExit = () => {

            const instance = axios.create({
                baseURL: 'http://47.102.117.173:5000',
                headers: {'Application-Token': bodyData}
              });

            instance.post('/User/UserLogout', {
                id: ID,
              })
            .then(function (response) {
              //post成功跳转到登录界面
              if(response.status == 200){
                navigation.navigate('LoginScreen');
              }
              console.log(response);
            })
            .catch(function (error) {
                console.log(ID)
                console.log(error);
                console.log(error.response)
            });
        }
    return(
    <View>
        <Text style={styles.text}>信息修改</Text>
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
      <Button title="确认修改" onPress={handleEdit} />
      <Button title="注销账号" onPress={handleExit} />
        </View>
    )
}
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

