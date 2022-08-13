import React from 'react';

import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native';
import Wel from '../assets/Garden5.jpg'

function Welcome({ navigation }){
    return(
        <View style={styles.container}>
            <ImageBackground source={Wel} style={{height:'100%', backgroundColor: 'black', opacity:0.7}} resizeMode='stretch'>
                <View style={styles.row1}>
                    <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'#04023E'}}>ExerQuest</Text>
                </View>
                <View style={{width:'100%', height:'100%'}}>
                    <View style={{flexDirection:'column', marginTop:'150%'}}>
                        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
                            <Button
                            onPress={() => {
                                navigation.navigate('Login');
                            }}
                                title="Log In"
                                color="#04023E"
                                />
                        </View>
                        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
                            <Button
                            onPress={() => {
                                navigation.navigate('OtpGen')
                            }}
                                title="Create new account"
                                color="#04023E"
                                />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height: '100%'
    },
    row1:{
      backgroundColor:'black',
      opacity:0.5,
      flexDirection: 'column',
      marginBottom:0,
      marginTop:0,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 50
    },
})
export default Welcome