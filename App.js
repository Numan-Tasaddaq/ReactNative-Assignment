import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,Image} from 'react-native';  
  
type Props = {};  
export default class App extends Component<Props> {  
  render() {  
    return (  
      <View> 
       <Image source={require('./xyz.jpg') } style={{ width: 150, height: 150, marginTop:30 }} /> 
         <Text style={styles.welcome}>PMAS</Text>  
         <Text style={styles.welcome}>AAUR</Text> 
         <Image source={require('./nomi.jpg') } style={{ width: 150, height: 150, marginTop:30, alignSelf: 'center',}} /> 
         <Text style={styles.welcome}>NUMAN TASADDAQ</Text>  
         <Text style={styles.welcome}>19-ARID-1262</Text>
         <Text style={styles.welcome}>BS(Software Engineering)</Text> 
         <Text style={styles.welcome}>(UIIT)</Text> 
      </View>      
    );  
  }  
}  
const styles = StyleSheet.create({  
  welcome: {  
    fontSize: 20, 
    textAlign: 'center', 
    marginTop:0, 
  }  
});