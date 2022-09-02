import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import Forest from '../assets/forest2.jpg';
import Dollar from '../assets/dollar.jpg';
import BottomNavigation from './BottomNavigation';
import axios from 'axios';
function Voting({ navigation, route }){
    const [grp, setGrp] = useState({grpid: "ab", admin:"ab"});
    const [final, setFinal] = useState("");
    const [vote, setVote] = useState([]);
    const [dis, setDis] = useState(true);
    const [desc, setDesc] = useState("");
    const [buttonDis, setButtonDis] = useState(false);
    const [finalDis, setFinaldis] = useState(true);
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retgrpdata', {
            grpid: route.params.grpid
        }).then((rep) => {
            setGrp(rep.data[0]);
            if(rep.data[0].admin === route.params.admin){
                setDis(false);
            }
        }).catch((err) => {
            alert(err.message);
        });
        axios.post('https://fitness-game-server.herokuapp.com/retvote',{
            email: route.params.email,
            level:grp.currentLevel
        }).then((res) => {
            if(res.data.length > 0){
                setButtonDis(true);
            }
        }).catch((Er2) => {
            alert(Er2.message);
        })
        axios.post('https://fitness-game-server.herokuapp.com/retgrpvote',{
            grpid: route.params.grpid
        }).then((rep1) => {
            console.log(rep1.data);
            if(rep1.data === 'Yes'){
                setFinaldis(false);
            }
        }).catch((er1) => {
            alert(er1.message);
        })
    }, [])
    return(
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white',color:'#FFA103'}}>ExerQuest</Text>
            </View>
            <View style={{flexDirection:'row', width:'40%', height:'10%',elevation:70, opacity:0.9, margin:'10%', borderRadius:500}}>
                <View style={{flexDirection:'column'}}>
                    <Button icon='star' color='orange' labelStyle={{fontSize:45}} style={{width:'100%', height:'100%'}}></Button>
                </View>
                <View style={{flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
                    <Text style={{color:'white', margin:10, fontSize:30}}>{grp.points}</Text>
                </View>
            </View>
            <View style={{flexDirection:'column', width:'100%', height:'60%', margin:10, marginLeft:30}}>
                <ScrollView>
                    <View style={{flexDirection:'row'}}>
                        <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                            <View style={{flexDirection:'column',  marginRight:10, marginLeft:10,}}>
                                <Button disabled={buttonDis} color='orange' icon='trophy' labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                    axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                        email:route.params.email,
                                        vote:'Earn trophy',
                                        gameSession:grp.session,
                                        final: 'Earn a trophy'
                                    }).then((response) => {
                                        if(response.data === 'Vote added successfully'){
                                            alert(response.data);
                                            // navigation.navigate('Earn', {
                                            //     email: route.params.email,
                                            //     grpid: route.params.grpid,
                                            // });
                                        }
                                        else{
                                            alert(response.data);
                                        }
                                    }).catch(err => {
                                        alert(err);
                                    })
                                }}></Button>
                            </View>
                        </Card>
                        <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                            <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, opacity:0.8}}>
                                <Button disabled={buttonDis} icon='bullseye' labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                    axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                        email:route.params.email,
                                        vote:'Set week goal',
                                        gameSession:grp.session
                                    }).then((response) => {
                                        if(response.data === 'Vote added successfully'){
                                            alert(response.data);
                                        }
                                        else{
                                            alert(response.data);
                                        }
                                    }).catch(err => {
                                        alert(err);
                                    })
                                }}></Button>
                            </View>
                        </Card>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                            <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, opacity:0.8}}>
                            <Button icon='account-multiple' disabled={buttonDis} labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                    email:route.params.email,
                                    vote:'Change leader',
                                    gameSession:grp.session
                                }).then((response) => {
                                    if(response.data === 'Vote added successfully'){
                                        alert(response.data);
                                    }
                                    else{
                                        alert(response.data);
                                    }
                                }).catch(err => {
                                    alert(err);
                                })
                            }}></Button>
                            </View>
                        </Card>
                        <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                            <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, opacity:0.8}}>
                            <Button icon='car-brake-fluid-level' disabled={buttonDis} labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                    email:route.params.email,
                                    vote:'Lottery',
                                    gameSession:grp.session
                                }).then((response) => {
                                    if(response.data === 'Vote added successfully'){
                                        alert(response.data);
                                    }
                                    else{
                                        alert(response.data);
                                    }
                                }).catch(err => {
                                    alert(err);
                                })
                            }}></Button>
                            </View>
                        </Card>
                    </View>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'70%'}}>
                            <TextInput label={'Final decision'} style={{width:'100%'}} onChangeText={(e) => setFinal(e)} />
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'70%'}}>
                            <TextInput label={'Description'} style={{width:'100%'}} onChangeText={(e) => setDesc(e)} />
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column'}}>
                            <Button disabled={false}  color='white' onPress={() => {
                                // alert('Final decision'+final)
                                if(final === 'earn a trophy'){
                                    navigation.navigate('Earn', {
                                        email: route.params.email,
                                        grpid: route.params.grpid,
                                        final: final,
                                        desc: desc
                                    })
                                }
                                else if(final === 'set custom'){
                                    navigation.navigate('Setcust', {
                                        email: route.params.email,
                                        grpid: route.params.grpid,
                                        final: final,
                                        desc: desc
                                    })
                                }
                                else if(final === 'lottery'){
                                    alert('lotterey');
                                    navigation.navigate('Lottery', {
                                        email: route.params.email,
                                        grpid: route.params.grpid,
                                        final: final,
                                        desc: desc
                                    })
                                }
                                else if(final === 'Change leader'){
                                    alert('Change');
                                    axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                                        grpid: route.params.grpid,
                                        decision:final,
                                        description:desc,
                                        email: route.params.email
                                    }).then((rep) => {
                                        if(rep.data === 'Decision added'){
                                            axios.post('https://fitness-game-server.herokuapp.com/changeleader', {
                                                grpid: route.params.grpid
                                            }).then((rep) => {
                                                if(rep.data === 'Leader changed'){
                                                    alert('Leader changed');
                                                    navigation.navigate('User', {
                                                        email: route.params.email,
                                                        grpid: route.params.grpid
                                                    })
                                                }
                                            }).catch((err) => {
                                                alert(err.message);
                                            })
                                        }
                                    }).catch((er)=>{
                                        alert(er.message);
                                    })
                                }
                            }}>Make Final Decision</Button>
                        </View>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'70%'}}>
                            <Button color='white' onPress={() => {
                                navigation.navigate('Groupvote', {
                                    grpid:route.params.grpid
                                })
                            }}>See Votes</Button>
                        </View>
                    </View>
                    </View>
                </ScrollView>
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
        backgroundColor:'black',
        opacity:0.8
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
});


export default Voting;