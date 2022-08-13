import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Input, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Card } from 'react-native-paper';
import axios from 'axios';
import Neeraj from '../assets/NeerajChopra.jpg';
function OtpVerification( { route, navigation } ) {
  const [otp, setOtp] = useState("");
  return (
    <View style={styles.viewcontainer}>
    <ImageBackground source={Neeraj} resizeMode='contain' style={{backgroundColor:'black', opacity:0.9, height:'100%'}}>
      <View style={styles.row1}>
          <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>ExerQuest</Text>
      </View>
      <View style={{width:'100%', flexDirection:'column'}}>
        <View style={{flexDirection:'row', width:'100%'}}>
          <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:"50%"}}>
            <TextInput label={'OTP'} onChangeText={(e) => setOtp(e)} />
          </View>
        </View>
        <View style={{flexDirection:'row', width:'100%'}}>
          <View style={{flexDirection:'column', width:'80%', alignContent:'center', justifyContent:'center', marginLeft:40, marginTop:10}}>
            <Button title='Verify Otp' onPress={() => {
              axios.post('https://fitness-game-server.herokuapp.com/otpverification',{
                email: route.params.email,
                otp: otp
              }).then((response) => {
                if(response.data === 'User can proceed!!'){
                  navigation.navigate('Signin', {
                    email: route.params.email,
                    name: route.params.name,
                    password: route.params.pass
                  })
                }
                else{
                  alert(route.params.email+" "+otp);
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
      backgroundColor: 'transparent'
    },
    containercard: {
      marginTop: 250,
      marginLeft: 90,
      width: "60%",
      height: "45%",
      borderRadius: 30,
      shadowColor: 'grey',
      shadowRadius: 10,
      elevation: 25,
      backgroundColor: 'transparent',
      borderColor: 'black',
      shadowColor: 'black'
    },
    userinputcontainer: {
      marginTop: 50,
      marginLeft: 15,
      marginRight: 15,
      backgroundColor:"transparent"
    },
    passinputcontainer: {
      marginTop: 50,
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

export default OtpVerification
