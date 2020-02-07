import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredWords,setEntereWords] = useState('');
  const [worldList,setWorldList] = useState([]);

  const wordHandler=(e)=>{
    setEntereWords(e)
  }

  const addWordToList =()=>{
    setWorldList(currentWords=>[...currentWords,enteredWords])
  }
 
  return (


    <View style={{padding:50}}> 

<View style={styles.screen}>
    <TextInput 
      placeholder="Enter World"  
      style={styles.inputStyle} 
      onChangeText={wordHandler}
      value={enteredWords}
      />

   <Button 
   title="ADD" 
   onPress={addWordToList}
    style={{
     padding:30,
    }}/>
    </View>
    <View>
      {
        
      worldList.map((word)=><Text>{word}</Text>)
      
      }
    </View>
    </View>
  );
  }
const styles = StyleSheet.create({
  screen: {
    padding:50,
    flexDirection:'row'
    
  },
  inputStyle:{
    width:'80%',
    borderWidth:1, 
    borderColor:'black',
    borderStyle:'solid',
  }
});
