import React, { Component } from 'react';

import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
  } from 'react-native';

// import { Container } from './styles';

export default class cronometro extends Component {
  render() {
    return (
    <View style = {styles.container}>
       <Image
       source = {require('./src/cronometro.png')}
       style = {styles.cronometro}
       /> 

       <Text style={styles.timer}>0.0</Text>
      
      
      <View style = {styles.btnArea}>
        <TouchableOpacity style = {styles.btn}>
          <Text style = {styles.btnTexto}>GO</Text>  
        </TouchableOpacity>      

         <TouchableOpacity style = {styles.btn}>
          <Text style = {styles.btnTexto}>Limpar</Text>  
        </TouchableOpacity>   
      </View> 


    </View>  
      
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },

  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,

  },

  btnArea:{
    flexDirection: 'row',
    justifyContent: "space-between",
   
  }

})