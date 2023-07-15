import React, {Component} from 'react';
import { View, Text ,StyleSheet, TextStyle} from 'react-native';
class MainScreen extends Component<any, any>{
     render() {
        return(
         <View>
            <Text style={styles.text}>欢迎来到主页面</Text>
         </View>
     );
     }
}
const styles =StyleSheet.create({
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginTop: 20,
    },
  });
export default MainScreen;