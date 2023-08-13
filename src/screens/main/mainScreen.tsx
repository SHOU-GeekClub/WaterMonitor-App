import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabBar from '@ant-design/react-native/lib/tab-bar';
import Icon from '@ant-design/react-native/lib/icon';
import SearchBar from'@ant-design/react-native/lib/search-bar';
import LoginScreen from '../login/loginScreen';
import MineScreen from '../NavigationBar/mineScreen';
import SearchCustomer from '../NavigationBar/searchCustomer';
export default function BasicTabBarExample ({navigation}:any){
  const [selectedTab, setSelectedTab] = useState('blueTab');

  const renderContent = (pageText:string) => {
    if(pageText === '首页'){
      return(
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
          <SearchBar placeholder="Search" showCancelButton />
          <Text style={{ margin: 50 }}>{pageText}</Text>
        </View>
      )
    }
    if(pageText === '用户信息页'){
      return (
        <SearchCustomer />
      )
    }
    if(pageText === '我的'){
      return (
        <MineScreen />
      )
    }
    if(pageText === '资料页'){
      return(
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
          <SearchBar placeholder="Search" showCancelButton />
          <Text style={{ margin: 50 }}>{pageText}</Text>
        </View>
      )
    }
    ;
  };

  const onChangeTab = (tabName:any) => {
    setSelectedTab(tabName);
  };

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="#f5f5f5">
      <TabBar.Item
        title="首页"
        icon={<Icon name="home" />}
        selected={selectedTab === 'blueTab'}
        onPress={() => onChangeTab('blueTab')}>
        {renderContent('首页')}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="ordered-list" />}
        title="用户信息"
        badge={122}
        selected={selectedTab === 'redTab'}
        onPress={() => onChangeTab('redTab')}>
        {renderContent('用户信息页')}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="like" />}
        title="资料"
        selected={selectedTab === 'greenTab'}
        onPress={() => onChangeTab('greenTab')}>
        {renderContent('资料页')}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="user" />}
        title="我的"
        selected={selectedTab === 'yellowTab'}
        onPress={() => onChangeTab('yellowTab')}>
        {renderContent('我的')}
      </TabBar.Item>
    </TabBar>
  );
};

