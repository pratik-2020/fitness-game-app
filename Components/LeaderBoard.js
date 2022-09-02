import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Input, ImageBackground, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Card, Avatar, Button } from 'react-native-paper';
import axios from 'axios';
import Olympic from '../assets/olympicPodium.jpg'
import BottomNavigation from './BottomNavigation';
function LeaderBoard( { navigation, route } ) {
  const [grps, setGrps] = useState([]);
  useEffect(() => {
    axios.get('https://fitness-game-server.herokuapp.com/leaderboard').then((response) => {
    let f = [];
    console.log('resp');
    console.log(response.data);
    response.data.map((e,key) => {
        f.push(e);
        setGrps([...grps,e]);
      })
      setGrps(response.data);
      console.log('grps');
      console.log(grps);
      grps.sort((a,b) => {
        return (b.points - a.points);
      })
    }).catch((er) => {
      alert(er.message);
    })
  }, []);
  const renderPlaery3 = () => {
    if(grps.length >= 3){
      console.log('Hel1');
      return(
        <Card style={{height: '40%', backgroundColor:'#CA955C', opacity:0.9, marginTop:'60%'}}>
          <View style={{width:'70%', height:'50%'}}>
              <Avatar.Text size={35} label={() => {
                return '' + grps[2].grpid[0] + grps[2].grpid[1];
              }}  style={{marginLeft: '30%', marginTop:'10%'}}/>
          </View>
          <View style={{height:'70%', marginBottom: 10, marginTop: 5}}>
            <Text style={{marginTop:'5%', alignContent:'center', justifyContent:'center', alignSelf:'center', alignItems:'center', marginLeft:'10%', fontSize:13}}>{grps[2].grpid}</Text>
          </View>
        </Card>
      )
    }
    else{
      return(
        <View></View>
      );
    }
  }
  const renderPlaery2 = () => {
    if(grps.length >= 2){
      console.log('Hel2');
      return(
        <Card style={{height:'50%', backgroundColor:'#CFD2CF', opacity:0.9}}>
          <View style={{width:'70%', height:'30%'}}>
          <Avatar.Text size={35} label={() => {
            return ''+grps[1].grpid[0]+grps[1].grpid[1];
          }}  style={{marginLeft: '30%', marginTop:'10%'}}/>
            {/* <Image source={Olympic} style={{width:'100%', height:'100%', marginLeft: '20%', marginTop:'10%', borderRadius:500}} /> */}
          </View>
          <View style={{height:'70%', marginBottom: 10, marginTop: 15}}>
            <Text style={{marginTop:'5%', alignContent:'center', justifyContent:'center', alignSelf:'center', alignItems:'center', marginLeft:'10%', fontSize:13}}>{grps[1].grpid}</Text>
          </View>
        </Card>
      );
    }
    else{
      return(
        <View></View>
      );
    }
  }
  const renderPlyer1 = () => {
    if(grps.length >= 1){
      return(<Card style={{height: '60%', backgroundColor:'#FAC213', opacity:0.9}}>
        <View style={{width:'70%', height:'30%'}}>
          <Avatar.Text size={35} label={() => {
            return ''+grps[0].grpid[0]+grps[0].grpid[1];
          }}  style={{marginLeft: '30%', marginTop:'10%'}} />
          {/* <Image source={Olympic} style={{width:'100%', height:'100%', marginLeft: '20%', marginTop:'10%', borderRadius:500}} /> */}
        </View>
        <View style={{height:'70%', marginBottom: 10, marginTop: 25}}>
          <Text style={{marginTop:'5%', alignContent:'center', justifyContent:'center', alignSelf:'center', alignItems:'center', marginLeft:'10%', fontSize:13, color:'black'}}>{grps[0]}</Text>
        </View>
      </Card>)
    }
    else{
      return(
        <View>
          <Text style={{color:'white'}}>Hello</Text>
        </View>
      );
    }
  }
  const renderPlaery = () => {
    console.log(grps);
    if(grps.length > 0){
      return grps.map((e,key) => {
        return(
            <Card style={{flexDirection:'row', backgroundColor:'black', marginLeft:'2%', justifyContent:'center', alignItems:'center'}}>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'column', width:'50%'}}>
                  <Text style={{color:'#FFA103', fontSize:20}}>{e.grpid} : </Text>
                </View>
                <View style={{flexDirection:'column', width:'50%'}}>
                  <Text style={{color:'#FFA103', fontSize:20}}>{e.points}</Text>
                </View>
              </View>
            </Card>
        );
      })
    }
    else{
      return(
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'white'}}>No groups</Text>
        </View>
      );
    }
  }
  return (
      <View>
        <View style={styles.viewcontainer}>
            <View style={styles.row1}>
              <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'#FFA103'}}>FitTrack</Text>
            </View>
            {/* <View style={styles.row}>
              <View style={{marginLeft: '9%', marginRight:0, width: '28%', height:'100%'}}>
                <View style={{flexDirection:'column'}}>
                  <Text>Wel</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                  <Text>White</Text>
                </View>
              </View>
              <View style={{marginLeft: 0, marginRight:0, width: '28%', height:'100%', marginTop:'10%'}}>
              <View style={{flexDirection:'column'}}>
                  <Text>Pratik</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                  <Text>White</Text>
                </View>
              </View>
              <View style={{marginLeft: 0, marginRight: '10%', width: '28%', height: '90%', marginTop:'15%', backgroundColor:'black'}}>
              <View style={{flexDirection:'column', backgroundColor:'black'}}>
                  {renderPlaery3()}
                </View>
                <View style={{flexDirection:'column'}}>
                  <Text>White</Text>
                </View>
              </View>
            </View> */}
            <View style={{flexDirection:'column', marginRight:10, marginLeft:10, width:'100%', height:'60%', marginTop:'10%'}}>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#FFA103', fontSize:25}}>Group Details</Text>
              </View>
                <ScrollView style={{marginTop:'5%'}}>
                      {renderPlaery()}
                </ScrollView>
            </View>
            <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black', marginTop:'30%'}}>
                    <View style={styles.column}>
                        <Button icon='map-marker' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                            navigation.navigate('LevelPage', {
                                grpid: route.params.grpid,
                                email: route.params.email
                            })
                        }}>
                        </Button>
                    </View>
                    <View style={styles.column}>
                        <Button icon='menu' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                            navigation.navigate('LeaderBoard', {
                                email: route.params.email,
                                grpid: route.params.grpid
                            });
                        }}>
                        </Button>
                    </View>
                    <View style={styles.column}>
                        <Button icon='home' color='white' labelStyle={{fontSize: 40}} onPress={() => {
                            navigation.navigate('User', {
                                email: route.params.email,
                                grpid: route.params.grpid
                            })
                        }}>
                        </Button>
                    </View>
                    <View style={styles.column}>
                        <Button icon='bell' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                            navigation.navigate('Notification', {
                                email: route.params.email,
                                grpid: route.params.grpid
                            })
                        }}>
                        </Button>
                    </View>
                    <View style={styles.column}>
                        <Button icon='information' onPress={() => {
                            navigation.navigate('Feature', {
                                email: route.params.email,
                                grpid: route.params.grpid
                            })
                        }} color='white' labelStyle={{fontSize: 30}}>
                        </Button>
                    </View>
                    <View style={styles.column}>
                        <Button icon='filter-variant' color='white' labelStyle={{fontSize: 30}}>
                        </Button>
                    </View>
                    <View style={styles.column}>
                        <Button icon='send' color='white' labelStyle={{fontSize: 30}}>
                        </Button>
                    </View>
                </View>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    viewcontainer: {
      width: "100%",
      height: "100%",
      backgroundColor: 'black'
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
    row:{
      backgroundColor:'transparent',
      opacity:0.8,
      flexDirection: 'row',
      marginBottom:0,
      marginTop:4,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 50,
      height: '20%'
    },
    column: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'column'
    }
  });

export default LeaderBoard