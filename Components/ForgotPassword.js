// import React, { useState } from 'react'
// import { StyleSheet, Text, View, Button, Input, ImageBackground } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TextInput, Card } from 'react-native-paper';
// import Neeraj from '../assets/NeerajChopra.jpg';
// import axios from 'axios';
// function ForgotPassword( { route, navigation } ) {
//   const [email, setEmail ] = useState("");
//   return (
//       <View>
//         <View style={styles.viewcontainer}>
//         <ImageBackground source={Neeraj} resizeMode='contain' style={{backgroundColor:'black', opacity:0.9, height:'100%'}}>
//             <View style={styles.row1}>
//                 <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>FitTrack</Text>
//             </View>
//             <Card style={{backgroundColor: 'transparent', borderBottomColor:'transparent', border: 0}}>
//               <View style={styles.containercard}>
//                 <View style={styles.userinputcontainer}>
//                   <Input label={'Email'} style={{height:'20%'}} onChangeText={(e) => setEmail(e)} />
//                 </View>
//                 <View style={styles.loginbtncontainer}>
//                   <Button title='Verify OTP' onPress={() => {
//                     axios.post('https://fitness-game-server.herokuapp.com/passotpcreation', {
//                       name: route.params.email
//                     }).then((response) => {
//                       console.log(user+' '+password)
//                       if(response.data === 'Email is send to your email id.'){
//                         console.log('Moving')
//                         navigation.navigate('ForgotPassVer');
//                       }
//                     }).catch((err) => {
//                       console.log(err);
//                     })
//                   }} />
//                 </View>
//               </View>
//             </Card>
//           </ImageBackground>
//         </View>
//       </View>
//   )
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'transparent',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     viewcontainer: {
//       width: "100%",
//       height: "100%",
//       backgroundColor: 'transparent'
//     },
//     row1:{
//       backgroundColor:'black',
//       opacity:0.8,
//       flexDirection: 'column',
//       marginBottom:0,
//       marginTop:0,
//       textAlign: 'center',
//       textAlignVertical: 'center',
//       fontSize: 50
//     },
//     containercard: {
//       marginTop: 250,
//       marginLeft: 90,
//       width: "60%",
//       height: "45%",
//       borderRadius: 30,
//       shadowColor: 'grey',
//       shadowRadius: 10,
//       elevation: 25,
//       backgroundColor: 'transparent',
//       borderColor: 'black',
//       shadowColor: 'black'
//     },
//     userinputcontainer: {
//       marginTop: 50,
//       marginLeft: 15,
//       marginRight: 15,
//       backgroundColor:"transparent"
//     },
//     passinputcontainer: {
//       marginTop: 50,
//       marginLeft: 15,
//       marginRight: 15
//     },
//     loginbtncontainer: {
//       marginTop: 20,
//       marginRight: 15,
//       marginLeft: 15
//     },
//     forgetbtncnt: {
//       backgroundColor: 'white',
//       color: 'black'
//     }
//   });

// export default ForgotPassword
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Input, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Card } from 'react-native-paper';
import Neeraj from '../assets/NeerajChopra.jpg';
import axios from 'axios';
function ForgotPassword( { navigation, route } ) {
  const [email, setEmail ] = useState("");
  return (
    <View style={styles.viewcontainer}>
        <ImageBackground source={Neeraj} resizeMode='contain' style={{backgroundColor:'black', opacity:0.9, height:'100%'}}>
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
                <Button title='Send Otp' onPress={() => {
                  axios.post('https://fitness-game-server.herokuapp.com/passotpcreation',{
                    email: email
                  }).then((response) => {
                    if(response.data[0] === 'User does not exist'){
                      alert('Email does not exist');
                    }
                    else{
                      alert('Otp send check your mail');
                      navigation.navigate('ForgotPassVer', {
                        email: email,
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
        backgroundColor: 'transparent'
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
      }
    });
export default ForgotPassword
