import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const WordItem = props=>{
    return (  <View  style={styles.listItem}>
    <Text>{props.title}</Text></View>
    );
 };

 const styles = StyleSheet.create({
    listItem:{
        borderWidth:1, 
        marginTop:10,
        borderColor:'#EEE',
        borderStyle:'solid',
      },
 });


export default WordItem ;