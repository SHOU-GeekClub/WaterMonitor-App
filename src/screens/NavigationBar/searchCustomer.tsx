import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { bodyData } from '../login/loginScreen';

export default function SearchCustomer({ navigation }: any) {
  const [Username, setUsername] = useState('');
  const [Name, setName] = useState('');
  const [Gender, setGender] = useState('');
  const [Role, setRole] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const api = 'http://47.102.117.173:5000/User/LoadUsers';

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios
      .get(api, {
        headers:{
          'Application-Token':bodyData
        }
      })
      .then(function (response) {
        // handle success data
        const user = response.data.user;
        setUsername(user.username);
        setName(user.name);
        setGender(user.gender);
        setRole(user.role);
      })
      .catch(function (error) {
        // handle error situation
        console.log(error);
        console.log(error.response);
        
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getApi();
    setRefreshing(false);
  };

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>UserName: {Username}</Text>
        <Text>Name: {Name}</Text>
        <Text>Gender: {Gender}</Text>
        <Text>Role: {Role}</Text>
      </ScrollView>
    </View>
  );
}
