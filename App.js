import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
 
  return (
  
    <View style={{padding:30 }}>

     <View style={{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'baseline'}}> 

     <TextInput placeholder="Enter Words" 
      style={{
        width:'80%',
        borderWidth:1, 
        borderColor:'black',
        borderStyle:'solid'}} />
   
    <Button title="ADD"  style={{
      padding:30,
     }}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
