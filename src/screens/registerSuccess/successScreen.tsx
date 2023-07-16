import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import Button from '@ant-design/react-native/lib/button'
import Result from '@ant-design/react-native/lib/result';
import Icon from '@ant-design/react-native/lib/icon'
import Flex from '@ant-design/react-native/lib/flex';
function successMessage(){
        return (
            <View>
                        <Icon name="like" size="lg"/>
                        <Text style={{fontSize:30}}>注册成功</Text>
            </View>
        )
    }
export default function SuccessScreen({navigation}:any){
    
    function handleClick(){
        navigation.navigate('LoginScreen');
    }
    return(
        <View>
        
        <Result
          img={
            <Image
              // source={require('./alipay.png')}
              source={{
                uri: 'https://raw.githubusercontent.com/ant-design/ant-design-mobile-rn/master/components/result/demo/alipay.png',
              }}
              style={{ width: 60, height: 60 }}
            />
          }
          title={successMessage()}
          message="所提交内容已成功完成验证"
          buttonText="返回登录页"
          buttonType="primary"
          onButtonClick={handleClick}
        />
    </View>
    )
}