import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Card, Avatar, Button } from 'react-native-paper';
import Volleyball from '../assets/volleyball.jpg'
import BottomNavigation from './BottomNavigation';
function UserDashboard ({ navigation, route }){
    const [userDetails, setUserDetails] = useState({ grpid: "ab"});
    const [weekGoal, setWeekGoal] = useState(0);
    const [status, setStatus] = useState("");
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retuserdata',{
            email: route.params.email
        }).then((response) => {
            if(response.data !== 'User does not exist'){
                setUserDetails(response.data[0]);
                axios.post('https://fitness-game-server.herokuapp.com/retgrpdata', {
                    grpid: response.data[0].grpid
                }).then((resp) => {
                    if(resp.data !== 'There is no such group id'){
                        setWeekGoal(resp.data[0].weekGoal);
                        resp.data[0].users.map((e,key) => {
                            if(e[0] === route.params.email){
                                setStatus(e[1]);
                                console.log("done");
                                axios.post('https://fitness-game-server.herokuapp.com/chkfinaldecision',{
                                    grpid: resp.data[0].grpid
                                }).then((rep) => {
                                    if(rep.data === 'No'){
                                        navigation.navigate('Vote', {
                                            email: route.params.email,
                                            grpid: resp.data[0].grpid
                                        });
                                    }
                                })
                            }
                        });
                    }
                }).catch((er) => {
                    alert(er.message);
                })
            }
            else{
                alert('User does not exist');
            }
        }).catch((err) => {
            alert(err.message);
        });
    }, [userDetails]);
    return(
        <View style={styles.container}>
                <View style={styles.row1}>
                    <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'#FFA103'}}>FitTrack</Text>
                </View>
                <View style={{width: '100%', height:'20%', flexDirection:'row'}}>
                    <View style={{flexDirection:'column', width:'30%', height:'100%', marginLeft:35, backgroundColor:'transparent'}}>
                        <Avatar.Text label={''+userDetails.grpid[0]+userDetails.grpid[1]} size={65} style={{marginTop: 25, textAlign:'center'}} />
                    </View>
                    <View style={{flexDirection:'column', width:'60%', height:'100%', backgroundColor:'transparent'}}>
                        <View style={{flexDirection:'row', width:'100%', height:'50%', backgroundColor:'transparent'}}>
                            <Text style={{color:'#FFA103', fontSize:30, marginTop:25}}>
                                {userDetails.name}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',  height:'25%', backgroundColor:'transparent'}}>
                            <View style={{flexDirection:'column', width:'50%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>Total Steps</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'50%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>Weekly Goals</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',  height:'25%', backgroundColor:'transparent'}}>
                            <View style={{flexDirection:'column', width:'50%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>{userDetails.steps}</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'50%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>{weekGoal}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', width:'100%', height:'60%'}}>
                <Card style={{width:'100%', backgroundColor:'transparent', borderWidth:5, elevation:7, shadowColor:'#FFA103', marginTop:10}}>
                        <View style={{flexDirection:'column', width:'100%', height:'100%'}}>
                            <View style={{flexDirection:'row', width:'100%', height:'20%'}}>
                                <Avatar.Text label={''+userDetails.grpid[0] + userDetails.grpid[1]} style={{marginLeft: 150, marginTop:10}} size={75} />
                            </View>
                            <View style={{flexDirection:'row', width:'100%', height:'20%', marginTop:30}}>
                                <View style={{flexDirection:'column', width:'50%', height:'100%'}}>
                                    <Text style={{fontSize:25, marginLeft:15, color:'#FFA103'}}>Team Id : </Text>
                                </View>
                                <View style={{flexDirection:'column', width:'50%', height:'100%'}}>
                                    <Text style={{fontSize:20, marginLeft:15, color:'#FFA103'}}>{userDetails.grpid}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', width:'100%', height:'20%'}}>
                                <View style={{flexDirection:'column', width:'50%', height:'100%'}}>
                                    <Text style={{fontSize:25, marginLeft:15, color:'#FFA103'}}>Player Type : </Text>
                                </View>
                                <View style={{flexDirection:'column', width:'50%', height:'100%'}}>
                                    <Text style={{fontSize:20, marginLeft:15, color:'#FFA103'}}>{userDetails.usertype}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', width:'100%', height:'20%'}}>
                                <View style={{flexDirection:'column', width:'50%', height:'100%'}}>
                                    <Text style={{fontSize:25, marginLeft:15, color:'#FFA103'}}>Request status : </Text>
                                </View>
                                <View style={{flexDirection:'column', width:'50%', height:'100%'}}>
                                    <Text style={{fontSize:25, marginLeft:15, color:'#FFA103'}}>{status}</Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <Button color='white' onPress={() => {
                            navigation.navigate('GroupDash', {
                                email: route.params.email,
                                grpid: userDetails.grpid
                            })
                        }} style={{width:'80%', marginLeft:'10%', backgroundColor:'green'}}>Group Details</Button>
                    </View>
                </View>
                <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black'}}>
                <View style={styles.column}>
                    <Button icon='map-marker' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('LevelPage', {
                            grpid: userDetails.grpid,
                            email: userDetails.email
                        })
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='menu' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('LeaderBoard', {
                            email: route.params.email,
                            grpid: userDetails.grpid
                        });
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='home' color='white' labelStyle={{fontSize: 40}}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='bell' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('Notification', {
                            email: route.params.email,
                            grpid: userDetails.grpid
                        })
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='information' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('Feature', {
                            email: route.params.email,
                            grpid: userDetails.grpid
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
      opacity:0.5,
      flexDirection: 'column',
      marginBottom:0,
      marginTop:0,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 50
    },
    column: {
        marginBottom: 20,
        marginTop: 5,
        flexDirection: 'column'
    }
})

export default UserDashboard;