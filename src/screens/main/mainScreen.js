import React, {Component} from 'react';
import { View, Text } from 'react-native';
class MainScreen extends Component{
     render() {
        return(
         <View>
            <Text style={styles.text}>欢迎来到主页面</Text>
         </View>
     );
     }
}
const styles ={
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginTop: 20,
    },
  };
export default MainScreen;