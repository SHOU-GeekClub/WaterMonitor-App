import React, {Component} from 'react';
import { View, Text ,StyleSheet, TextStyle} from 'react-native';
import TabBar from '@ant-design/react-native/lib/tab-bar';
import Icon from '@ant-design/react-native/lib/icon'
import SearchBar from'@ant-design/react-native/lib/search-bar'

export default class BasicTabBarExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedTab: 'buleTab',
    }
  }

  renderContent(pageText: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    })
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="首页"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}>
          {this.renderContent('首页')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="发现"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderContent('发现页')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="好友"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}>
          {this.renderContent('好友页')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    )
  }
}


// import React, {Component, useState} from 'react';
// import { View, Text ,StyleSheet, TextStyle} from 'react-native';
// import TabBar from '@ant-design/react-native/lib/tab-bar';
// import Icon from '@ant-design/react-native/lib/icon'
// import SearchBar from'@ant-design/react-native/lib/search-bar'

// export default function MainScreen ({navigation}:any){
//   const [selectedTab,setselectedTab] = useState('blueTab')

//   function onChangeTab(tabName: any) {

//     setselectedTab(tabName)
//   }
//     return (
//       <TabBar
//         unselectedTintColor="#949494"
//         tintColor="#33A3F4"
//         barTintColor="#f5f5f5">
//         <TabBar.Item
//           title="首页"
//           icon={<Icon name="home" />}
//           selected={selectedTab === 'blueTab'}
//           onPress={() => onChangeTab('blueTab')}>
//         </TabBar.Item>
//         <TabBar.Item
//           icon={<Icon name="ordered-list" />}
//           title="发现"
//           badge={0}
//           selected={selectedTab === 'redTab'}
//           onPress={() => onChangeTab('redTab')}>
//         </TabBar.Item>
//         <TabBar.Item
//           icon={<Icon name="like" />}
//           title="好友"
//           selected={selectedTab === 'greenTab'}
//           onPress={() => onChangeTab('greenTab')}>
//         </TabBar.Item>
//         <TabBar.Item
//           icon={<Icon name="user" />}
//           title="我的"
//           selected={selectedTab === 'yellowTab'}
//           onPress={() => onChangeTab('yellowTab')}>
//         </TabBar.Item>
//       </TabBar>
//     )
//   }



