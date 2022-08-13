import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Input, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Card } from 'react-native-paper';
import Neeraj from '../assets/NeerajChopra.jpg';
import axios from 'axios';
function OtpGeneration( { navigation } ) {
  const [email, setEmail ] = useState("");
  const [name, setName ] = useState("");
  const [pass, setPass ] = useState("");
  return (
      <View style={styles.viewcontainer}>
        <ImageBackground source={Neeraj} resizeMode='contain' style={{backgroundColor:'black', opacity:0.9, height:'100%'}}>
          <View style={styles.row1}>
              <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>ExerQuest</Text>
          </View>
          <View style={{width:'100%', flexDirection:'column'}}>
            <View style={{flexDirection:'row', width:'100%'}}>
              <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginTop:'30%', marginLeft:40,}}>
                <TextInput label={'Name'} onChangeText={(e) => setName(e)} />
              </View>
            </View>
            <View style={{flexDirection:'row', width:'100%'}}>
              <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:10}}>
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
                <Button title='Send Otp' onPress={() => {
                  axios.post('https://fitness-game-server.herokuapp.com/otpcreation',{
                    name: name,
                    email: email,
                    password: pass
                  }).then((response) => {
                    if(response.data[0] === 'User already exist'){
                      alert('Email already exist');
                    }
                    else{
                      alert(response.data);
                      alert('Otp send check your mail');
                      navigation.navigate('OtpVer', {
                        email: email,
                        name: name,
                        pass: pass
                      })
                    }
                  }).catch((er) => {
                    alert(er.message);
                  })
                }} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewcontainer: {
      width: "100%",
      height: "100%",
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    containercard: {
      marginTop: 10,
      marginLeft: 90,
      width: "60%",
      height: "75%",
      borderRadius: 30,
      backgroundColor: 'transparent',
      borderColor: 'black'
    },
    userinputcontainer: {
      marginTop: 0,
      marginLeft: 15,
      marginRight: 15,
      backgroundColor:"transparent"
    },
    pasinputcontainer: {
      marginTop: 0,
      marginLeft: 15,
      marginRight: 15,
      backgroundColor:"transparent"
    },
    passinputcontainer: {
      marginTop: 0,
      marginLeft: 15,
      marginRight: 15
    },
    loginbtncontainer: {
      marginTop: 20,
      marginRight: 15,
      marginLeft: 15
    },
    forgetbtncnt: {
      backgroundColor: 'white',
      color: 'white'
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

export default OtpGeneration
