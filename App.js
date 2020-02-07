import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
 
  return (
  
    <View style={{padding:30 , flexDirection:'row',width:'80%',}}>

     <View style={{
       height:100,
       flex:1,
       backgroundColor:'blue',
       justifyContent:'space-between',//MainAxisAligment
       alignItems:'stretch'//CrossAxisAligment
       }}> 
        <Text>1</Text>
     </View>
     <View style={{
        height:100,
        backgroundColor:'green',
       justifyContent:'space-between',
       alignItems:'baseline'}}> 
       <Text>2</Text>
     </View>
     <View style={{
        height:100,
        backgroundColor:'red',
       justifyContent:'center',
       alignItems:'baseline'}}> 
       <Text>3</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
