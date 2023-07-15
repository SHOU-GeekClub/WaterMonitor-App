import React, {Component} from 'react';
import { View, Text ,StyleSheet, TextStyle} from 'react-native';

export default function MainScreen(){
  return(
    <View>
       <Text style={styles.text}>主页面</Text>
    </View>
);}
const styles =StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});
