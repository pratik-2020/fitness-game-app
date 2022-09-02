import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Input, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Card } from 'react-native-paper';
import axios from 'axios';
import Neeraj from '../assets/NeerajChopra.jpg';
function Login( { navigation } ) {
  const [email, setEmail ] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View style={styles.viewcontainer}>
      <View style={styles.row1}>
          <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>ExerQuest</Text>
      </View>
      <View style={{width:'100%', flexDirection:'column'}}>
        <View style={{flexDirection:'row', width:'100%'}}>
          <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:"40%"}}>
            <TextInput label={'Email'} onChangeText={(e) => setEmail(e)} />
          </View>
        </View>
        <View style={{flexDirection:'row', width:'100%'}}>
          <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:10}}>
            <TextInput label={'Password'} onChangeText={(e) => setPass(e)} />
          </View>
        </View>
        <View style={{flexDirection:'row', width:'100%'}}>
          <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:10}}>
            <Button title='Login' onPress={() => {
              axios.post('https://fitness-game-server.herokuapp.com/login',{
                email: email,
                password: pass
              }).then((response) => {
                if(response.data === 'User can proceed!!'){
                  navigation.navigate('User', {
                    email: email
                  })
                }
                else{
                  alert('Invalid credentials'+response.data);
                }
              }).catch((er) => {
                alert(er.message);
              })
            }} />
          </View>
        </View>
        <View style={{flexDirection:'row', width:'100%'}}>
          <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:10}}>
            <Button title='Sigin In' onPress={() => {
              navigation.navigate('Signin');
            }} />
          </View>
        </View>
        <View style={{flexDirection:'row', width:'100%'}}>
          <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:10}}>
            <Button title='Forgot Password' style={{backgroundColor:'transparent'}} onPress={() => {
              navigation.navigate('ForgotPass');
            }} />
          </View>
        </View>
      </View>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewcontainer: {
      width: "100%",
      height: "100%",
      backgroundColor:'black',
      opacity:0.8
    },
    containercard: {
      marginTop: 150,
      marginLeft: 90,
      width: "60%",
      height: "50%",
      borderRadius: 30,
      shadowColor: 'grey',
      shadowRadius: 10,
      elevation: 25,
      borderColor: 'black',
      shadowColor: 'black'
    },
    userinputcontainer: {
      marginTop: 50,
      marginLeft: 15,
      marginRight: 15
    },
    passinputcontainer: {
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
    },
    loginbtncontainer: {
      marginTop: 20,
      marginRight: 15,
      marginLeft: 15
    },
    forgetbtncnt: {
      backgroundColor: 'transparent',
      color: 'black'
    },
    row1:{
      backgroundColor:'black',
      opacity:0.8,
      flexDirection: 'column',
      marginBottom:0,
      marginTop:0,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 50
    },
  });

export default Login
