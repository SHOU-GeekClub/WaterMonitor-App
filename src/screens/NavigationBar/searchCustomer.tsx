import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

export default function SearchCustomer({ navigation }: any) {
  // const [PageSize, setPageSize] = useState(0);
  // const [PageIndex, setPageIndex] = useState(0);
  const [Username, setUsername] = useState('');
  const [Name, setName] = useState('');
  const [Gender, setGender] = useState('');
  const [Role, setRole] = useState('');

  const api = 'http://47.102.117.173:5000/User/LoadUsers';

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios
      .get(api)
      .then(function (response) {
        // handle success data
        // setPageSize(response.data.user.PageSize);
        // setPageIndex(response.data.user.PageIndex);
        setUsername(response.data.user.Username);
        setName(response.data.user.Name);
        setGender(response.data.user.Gender);
        setRole(response.data.user.Role);
      })
      .catch(function (error) {
        // handle error situation
        console.log(error);
        console.log(error.response);
      });
  };



  return (
    <View>
      {/* <Text>PageSize: {PageSize}</Text>
      <Text>PageIndex: {PageIndex}</Text> */}
      <Text>UserName: {Username}</Text>
      <Text>Name: {Name}</Text>
      <Text>Gender: {Gender}</Text>
      <Text>Role: {Role}</Text>
    </View>
  );
}
