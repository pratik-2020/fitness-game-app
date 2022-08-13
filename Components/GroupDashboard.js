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
    const [groupDetails, setGroupDetails] = useState({});
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retgrpdata', {
            grpid: route.params.grpid
        }).then((response) => {
            if(response.data !== 'There is no such group id'){
                setGroupDetails(response.data[0]);
            }
        })
    }, [groupDetails]);
    return(
        <View style={styles.container}>
            <ImageBackground source={Volleyball} resizeMode='stretch' style={{height:'100%', backgroundColor: 'black', opacity:0.7}}>
                <View style={styles.row1}>
                    <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'#FFA103'}}>FitTrack</Text>
                </View>
                <View style={{width: '100%', height:'20%', flexDirection:'row', backgroundColor:'black', opacity:0.5}}>
                    <View style={{flexDirection:'column', width:'30%', height:'100%', marginLeft:35, backgroundColor:'transparent', opacity:0.8}}>
                        <Avatar.Text label={() => {
                            return ''+groupDetails.grpid[0]+groupDetails.grpid[1];
                        }} size={65} style={{marginTop: 25, textAlign:'center'}} />
                    </View>
                    <View style={{flexDirection:'column', width:'60%', height:'100%', backgroundColor:'transparent'}}>
                        <View style={{flexDirection:'row', width:'100%', height:'50%', backgroundColor:'transparent'}}>
                            <Text style={{color:'#FFA103', fontSize:30, marginTop:25}}>
                                Team Name
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',  height:'25%', backgroundColor:'transparent'}}>
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
                    <View style={{flexDirection:'column', width:'100%', height:'25%'}}>
                        {() => {
                            groupDetails.users.map((e,key) => {
                                if(e[1] === 'No respond'){
                                    if(groupDetails.admin === route.params.email){
                                        return(
                                            <Card key={key} style={{width:'100%', marginTop:10, marginBottom:0, marginRight:10, marginLeft:10, backgroundColor:'transparent'}}>
                                                <View style={{flexDirection:'column', width:'100%', height:'100%'}}>
                                                    <View style={{flexDirection:'row', width:'100%', marginTop:22, marginLeft:2, marginRight:2}}>
                                                        <View style={{flexDirection:'column', width:'50%', height:'100%', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                                                            <Text style={{color:'white', fontSize:20}}>{e}</Text>
                                                        </View>
                                                        <View style={{flexDirection:'column', width:'50%', height:'100%', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                                                            <Text style={{color:'white', fontSize:20}}>{resp.data.steps}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{flexDirection:'row', width:'100%', marginTop:22, marginLeft:2, marginRight:2}}>
                                                        <View style={{flexDirection:'column', width:'90%', height:'100%', margin:10}}>
                                                            <Button color='green' onPress={() => {
                                                                axios.post('https://fitness-game-server.herokuapp.com/replyjoinreq', {
                                                                    email: e[0],
                                                                    grpid: groupDetails.grpid,
                                                                    reply:'Accepted'
                                                                }).then((response) => {
                                                                    if( response.data === 'Reply updated successfully'){
                                                                        alert(response.data);
                                                                    }
                                                                }).catch((err) => {
                                                                    alert(err.message);
                                                                })
                                                            }}>Accept</Button>
                                                        </View>
                                                        <View style={{flexDirection:'column', width:'90%', height:'100%', margin:10}}>
                                                            <Button color='red' onPress={() => {
                                                                axios.post('https://fitness-game-server.herokuapp.com/replyjoinreq', {
                                                                    email: e[0],
                                                                    grpid: groupDetails.grpid,
                                                                    reply:'Declined'
                                                                }).then((response) => {
                                                                    if( response.data === 'Reply updated successfully'){
                                                                        alert(response.data);
                                                                    }
                                                                }).catch((err) => {
                                                                    alert(err.message);
                                                                })
                                                            }}>Decline</Button>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Card>
                                        );
                                    }
                                    else{
                                        return(
                                            <Card key={key} style={{width:'100%', marginTop:10, marginBottom:0, marginRight:10, marginLeft:10, backgroundColor:'transparent'}}>
                                                <View style={{flexDirection:'column', width:'100%', height:'100%'}}>
                                                    <View style={{flexDirection:'row', width:'100%', marginTop:22, marginLeft:2, marginRight:2}}>
                                                        <View style={{flexDirection:'column', width:'50%', height:'100%', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                                                            <Text style={{color:'white', fontSize:20}}>{e}</Text>
                                                        </View>
                                                        <View style={{flexDirection:'column', width:'50%', height:'100%', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                                                            <Text style={{color:'white', fontSize:20}}>{resp.data.steps}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{flexDirection:'row', width:'100%', marginTop:22, marginLeft:2, marginRight:2}}>
                                                        <View style={{flexDirection:'column', width:'90%', height:'100%', margin:10}}>
                                                            <Button disabled={true} color='green'>Accept</Button>
                                                        </View>
                                                        <View style={{flexDirection:'column', width:'90%', height:'100%', margin:10}}>
                                                            <Button disabled={true} color='red'>Decline</Button>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Card>
                                        );
                                    }
                                }
                                else if(e[1] === 'Accepted'){
                                    axios.post('https://fitness-game-server.herokuapp.com/retuserdata',{
                                        email: e
                                    }).then((resp) => {
                                        return(
                                            <Card key={key} style={{width:'100%', marginTop:10, marginBottom:0, marginRight:10, marginLeft:10, backgroundColor:'transparent'}}>
                                                <View style={{flexDirection:'column', width:'100%', height:'100%'}}>
                                                    <View style={{flexDirection:'row', width:'100%', marginTop:22, marginLeft:2, marginRight:2}}>
                                                        <View style={{flexDirection:'column', width:'50%', height:'100%', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                                                            <Text style={{color:'white', fontSize:20}}>{e}</Text>
                                                        </View>
                                                        <View style={{flexDirection:'column', width:'50%', height:'100%', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                                                            <Text style={{color:'white', fontSize:20}}>{resp.data.steps}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{flexDirection:'row', width:'100%', marginTop:22, marginLeft:2, marginRight:2}}>
                                                        <View style={{flexDirection:'column', width:'90%', height:'100%', margin:10}}>
                                                        {/* <Text style={{color:'white', fontSize:20}}>Steve Rogers</Text> */}
                                                        {/* <ProgressBar progress={0.5} color="white"  style={{ height: 5, width: undefined }} /> */}
                                                        <ProgressBar progress={() => {
                                                            if(groupDetails.weekGoal === 0){
                                                                return 0;
                                                            }
                                                            return parseFloat(resp.data.steps/groupDetails.weekGoal);
                                                        }} color='blue' style={{width:undefined, height:'20%', marginBottom:10}} />
                                                        </View>
                                                    </View>
                                                </View>
                                            </Card>
                                        );
                                    }).catch((err) => {
                                        alert(err.message);
                                    })
                                }
                                else{
                                    return(
                                        <View></View>
                                    );
                                }
                            })
                        }}
                    </View>
                </ScrollView>
                <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black'}}>
                <View style={styles.column}>
                    <Button icon='map-marker' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('LevelPage', {
                            grpid: route.params.grpid
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
                        navigation.navigate('User', {
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
                    <Button icon='information' color='white' labelStyle={{fontSize: 30}}>
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
    column: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'column'
    }
})

export default GroupDashboard;