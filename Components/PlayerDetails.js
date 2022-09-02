import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button} from 'react-native-paper';
import axios from 'axios';
function PlayerDetails({ route, navigation }){
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retuserdata', {
            email: route.params.email
        }).then((resp) => {
            setUser(resp.data[0]);
        })
    })
    return(
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'#FFA103'}}>FitTrack</Text>
            </View>
            <View style={{flexDirection:'column', margin:50}}>
                <Card style={{backgroundColor:'black', opacity:0.8, marginTop:'50%', width:'90%', height:'55%', justifyContent:'center', alignItems:'center', shadowColor:'white', elevation:98, opacity:0.5, borderWidth:2, borderColor:'#FFA103', borderRadius:30}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:'10%'}}>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', width:'30%'}}>
                            <Text style={{color:'white', fontSize:16, marginLeft:6}}>Username</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', width:'70%'}}>
                            <Text style={{color:'white', fontSize:16}}>{user.name}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', margin:2}}>
                        <View style={{flexDirection:'column', alignItems:'center', textAlign:'center', width:'30%'}}>
                            <Text style={{color:'white', fontSize:16}}>Usertype</Text>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', textAlign:'center', width:'70%'}}>
                            <Text style={{color:'white', fontSize:16}}>{user.usertype}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', margin:2}}>
                        <View style={{flexDirection:'column', alignItems:'center', textAlign:'center', width:'30%'}}>
                            <Text style={{color:'white', fontSize:16}}>Steps</Text>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', textAlign:'center', width:'70%'}}>
                            <Text style={{color:'white', fontSize:16}}>{user.steps}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', margin:2}}>
                        <View style={{flexDirection:'column', alignItems:'center', textAlign:'center', width:'30%'}}>
                            <Text style={{color:'white', fontSize:16}}>Points</Text>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', textAlign:'center', width:'70%'}}>
                            <Text style={{color:'white', fontSize:16}}>{user.point}</Text>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black'}}>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height: '100%',
        backgroundColor:'black'
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

export default PlayerDetails;