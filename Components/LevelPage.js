import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Card, Button } from 'react-native-paper';
import axios from 'axios';
import BottomNavigation from './BottomNavigation';
export default function LevelPage({ route, navigation }) {
  const [grpData, setGrpData] = useState({});
  // useEffect(() => {
  //   axios.post('https://fitness-game-server.heroku/grpdata', {
  //     email: route.params.email
  //   }).then((response) => {
  //     setGrpData(response.data);
  //   }).catch((er) => {
  //     alert(er.message);
  //   })
  // })
  return (
    <SafeAreaView style={styles.cnt}>
      <View style={{width: '100%', height:'100%'}}>
        <View style={styles.row1}>
          <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>FitTrack</Text>
        </View>
        <View style={styles.row}>
          <MapView style={styles.map} />
        </View>
        <View></View>
        <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black'}}>
                <View style={styles.column}>
                    <Button icon='map-marker' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('LevelPage', {
                            grpid: () => {
                                if(userDetails !== undefined){
                                    return userDetails.grpid
                                }
                                else{
                                    return "abc"
                                }
                            }
                        })
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='menu' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('LeaderBoard');
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='home' color='white' labelStyle={{fontSize: 40}} onPress={() => {
                      navigation.navigate('User',{
                        email: route.params.email
                      })
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='bell' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('Notifications', {
                            email: route.params.email
                        })
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='information' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('Feature', {
                            email: route.params.email,
                            grpid: route.params.grpid
                        })
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='filter-variant' color='white' labelStyle={{fontSize: 30}}>
                    </Button>
                </View>
                </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    cnt: {
      backgroundColor: "transparent"
    },
    map: {
      marginTop: 0,
      width: '100%',
      height: '80%',
      overflow:'scroll',
      
    },
    row: {
      flexDirection: 'column',
      marginBottom:0,
      marginTop:0,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 50
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
    column: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'column'
    }
  });
