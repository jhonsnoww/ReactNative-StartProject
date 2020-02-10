import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import WordItem from './components/WordItem';
import WordInput from './components/WordInput'
export default function App() {

  
  const [worldList,setWorldList] = useState([]);

 

  const addWordToList = wordTitle =>{
    setWorldList(currentWords=>[...currentWords,{id:Math.random.toString,value:wordTitle}])
  }
 
  return (
    <View style={{padding:50}}> 
   
    <WordInput addToList={addWordToList}/>

    <FlatList 
    keyExtractor={(item,index)=>item.id}
    data={worldList}
    renderItem= {
      itemData => <WordItem title={itemData.item.value}/>
       }
    
    />
    </View>
  );
  }

