import React,{useState} from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';

const WordInput = props => {
    const [enteredWord,setEntereWords] = useState('');
    const wordHandler=(e)=>{
        setEntereWords(e)
      }
return (

    <View style={styles.screen}>
           <TextInput 
                 placeholder="Enter World"  
                 style={styles.inputStyle} 
                 onChangeText={wordHandler}
                 value={enteredWord}/>

<Button 
          title="ADD" 
          onPress={props.addToList}
          style={{
                padding:30,
                 }}/>
                 </View>
);
}

const styles = StyleSheet.create({
    screen: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center'},
    inputStyle:{
        width:'80%',
        borderWidth:1, 
        borderColor:'black',
        borderStyle:'solid',
      },

});


export default WordInput;