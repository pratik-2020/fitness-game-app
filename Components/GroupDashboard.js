// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { Card, ProgressBar } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import axios from 'axios';
// function GroupDashboard({ route, navigation }){
//     const [grpData, setGrpData] = useState({});
//     return(
//         <View>
//             <View style={styles.viewcontainer}>
//                 <Card style={styles.card}>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Group Name</Text>
//                         </View>
//                     </View>
//                 </Card>
//                 <Card style={styles.card}>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member name</Text>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 1</Text>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 2</Text>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 3</Text>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 4</Text>
//                         </View>
//                     </View>
//                 </Card>
//                 <Card style={styles.card}>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 1</Text>
//                         </View>
//                         <View style={styles.column}>
//                             <ProgressBar progress={0.5} color='red' />
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 1</Text>
//                         </View>
//                         <View style={styles.column}>
//                             <ProgressBar progress={0.5} color='green'/>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 1</Text>
//                         </View>
//                         <View style={styles.column}>
//                             <ProgressBar progress={0.5} color='yellow' />
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.column}>
//                             <Text>Member 1</Text>
//                         </View>
//                         <View style={styles.column}>
//                             <ProgressBar progress={0.5} color='blue' />
//                         </View>
//                     </View>
//                 </Card>
//                 <View style={styles.row}>
//                     <Button title='Level Page' onPress={() => {
//                         navigation.navigate('LevelPage', {
//                             grpid: route.params.grpid
//                         })
//                     }} />
//                 </View>
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'wheat',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row'
//       },
//       viewcontainer: {
//         width: "100%",
//         height: "100%",
//         backgroundColor: 'wheat'
//       },
//       row: {
//         marginTop: 10,
//         marginRight: 10,
//         marginLeft: 10,
//         flexDirection: 'column'
//       },
//       card: {
//         marginTop: 10,
//         marginLeft: 10,
//         marginRight: 10,
//         backgroundColor: '#FAD9A1',
//         elevation: 5,
//         borderRadius: 20
//       },
//       column: {
//         flexDirection: 'column',
//         marginRight: 10,
//         marginLeft: 10,
//         marginTop: 10,
//         marginBottom: 10,
//         backgroundColor: '#FAD9A1',
//       }
// });

// export default GroupDashboard;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Card, Avatar, ProgressBar, Button } from 'react-native-paper';
import Volleyball from '../assets/forest1.jpg'
import BottomNavigation from './BottomNavigation';
import axios from 'axios';
function GroupDashboard ({route, navigation}){
    const [groupDetails, setGroupDetails] = useState({ grpid: 'ab', users:[]});
    const [dis, setDis] = useState(true);
    const [trp1, setTrp1] = useState(0);
    const [trp2, setTrp2] = useState(0);
    const [trp3, setTrp3] = useState(0);
    const [trp4, setTrp4] = useState(0);
    const [trp5, setTrp5] = useState(0);
    const [trp6, setTrp6] = useState(0);
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retgrpdata', {
            grpid: route.params.grpid
        }).then((response) => {
            if(response.data !== 'There is no such group id'){
                setGroupDetails(response.data[0]);
                if(groupDetails.admin === route.params.email){
                    setDis(false);
                }
            }
        })
    }, []);
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/rettrophy', {
            grpid: route.params.grpid
        }).then((rep) => {
            if(rep.data !== 'No trophy'){
                rep.data.map((el,ky) => {
                    if(el.achieved === 'Yes'){
                        if(el.point === 10000){
                            setTrp1(trp1+1);
                        }
                        else if(el.point === 12000){
                            setTrp2(trp2+1);
                        }
                        else if(el.point === 15000){
                            setTrp3(trp3+1);
                        }
                        else if(el.point === 17000){
                            setTrp4(trp4+1);
                        }
                        else if(el.point === 18000){
                            setTrp5(trp5+1);
                        }
                        else if(el.point === 20000){
                            setTrp6(trp6+1);
                        }
                    }
                })
            }
            console.log(rep.data);
        }).catch((eror) => {
            alert(eror.message);
        })
    },[trp1, trp2, trp3, trp4, trp5, trp6]);
    const renderPlayer = () => {
        return groupDetails.users.map((e,key) => {
            if(e[1] === 'Accepted'){
                return(
                    <View key={key} style={{flexDirection:'row', margin:50}} >
                        <View style={{flexDirection:'column'}}>
                            <Button onPress={() => {
                                navigation.navigate('Player',{
                                    email:route.params.email,
                                    grpid:route.params.grpid
                                })
                            }} color='#FFA103' style={{color:'white', fontSize:20}}>{e[0]}</Button>
                        </View>
                    </View>
                );
            }
            else if(e[1] === 'No respond'){
                return(
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <Text style={{color:'#FFA103', fontSize:16}}>{e[0]}</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <Button disabled={dis} color='green' onPress={() => {
                                axios.post('https://fitness-game-server.herokuapp.com/replyjoinreq', {
                                    email:e[0],
                                    grpid: route.params.grpid,
                                    reply: 'Accepted'
                                }).then((rep12) => {
                                    alert(rep12.data);
                                }).catch((er) => {
                                    alert(er.message);
                                })
                            }}>Accept</Button>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Button disabled={dis} color='red'  onPress={() => {
                                axios.post('https://fitness-game-server.herokuapp.com/replyjoinreq', {
                                    email:e[0],
                                    grpid: route.params.grpid,
                                    reply: 'Declined'
                                }).then((rep12) => {
                                    alert(rep12.data);
                                }).catch((er) => {
                                    alert(er.message);
                                })
                            }}>Decline</Button>
                        </View>
                    </View>
                );
            }
        })
    }
    return(
        <View style={styles.container}>
                <View style={styles.row1}>
                    <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'#FFA103'}}>FitTrack</Text>
                </View>
                <View style={{width: '100%', height:'20%', flexDirection:'row', backgroundColor:'black', opacity:0.5}}>
                    <View style={{flexDirection:'column', width:'30%', height:'100%', marginLeft:35, backgroundColor:'transparent', opacity:0.8}}>
                        <Avatar.Text label={''+groupDetails.grpid[0]+groupDetails.grpid[1]} size={65} style={{marginTop: 25, textAlign:'center'}} />
                    </View>
                    <View style={{flexDirection:'column', width:'60%', height:'100%', backgroundColor:'transparent'}}>
                        <View style={{flexDirection:'row', width:'100%', height:'50%', backgroundColor:'transparent'}}>
                            <Text style={{color:'#FFA103', fontSize:30, marginTop:25}}>
                                Team Name
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',  height:'35%', backgroundColor:'transparent'}}>
                            <View style={{flexDirection:'column', width:'33%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>Current Level</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'33%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>Total Points</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'33%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>Total Steps</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',  height:'25%', backgroundColor:'transparent'}}>
                            <View style={{flexDirection:'column', width:'33%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>{groupDetails.currentLevel}</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'33%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>{groupDetails.points}</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'33%',height:'100%'}}>
                                <Text style={{color:'#FFA103', fontSize:15, marginTop:10, marginLeft:10}}>{groupDetails.steps}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:'5%'}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{color:'#FFA103', fontSize:20}}>Player name</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            {renderPlayer()}
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:2}}>
                                <Button color='orange' icon={'trophy'}></Button>
                                <Text style={{color:'#FFA103'}}>{trp1}</Text>
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:2}}>
                                <Button color='grey' icon={'trophy-award'}></Button>
                                <Text style={{color:'#FFA103'}}>{trp2}</Text>
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:2}}>
                                <Button color='silver' icon={'trophy-outline'}></Button>
                                <Text style={{color:'#FFA103'}}>{trp3}</Text>
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:2}}>
                                <Button color='wheat' icon={'trophy-broken'}></Button>
                                <Text style={{color:'#FFA103'}}>{trp4}</Text>
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:2}}>
                                <Button color='gold' icon={'trophy-variant'}></Button>
                                <Text style={{color:'#FFA103'}}>{trp5}</Text>
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Button color='orange' icon={'trophy-variant-outline'} labelStyle={{justifyContent:'center', alignItems:'center'}}></Button>
                                <Text style={{color:'#FFA103'}}>{trp6}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <Button disabled={dis} color='white' style={{width:'80%', marginLeft:'10%', backgroundColor:'green'}} onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/sendnotification', {
                                email: route.params.email,
                                grpid: route.params.grpid,
                                message: 'Update your points'
                            }).then((response) => {
                                if(response.data === 'Notification send'){
                                    alert('Notification send')
                                }
                            }).catch((err) => {
                                alert(err.message);
                            })
                        }}>Send Notification</Button>
                    </View>
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
    column: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'column'
    }
})

export default GroupDashboard;