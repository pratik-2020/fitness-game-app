
// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';

// function SetCustom({ navigation, route }){
//     return(
        // <View style={styles.container}>
        //     <View style={styles.row1}>
        //         <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'black'}}>ExerQuest</Text>
        //     </View>
        //     <View style={{flexDirection:'column', marginTop:'3%', textAlign:'center', justifyContent:'center', alignItems:'center', backgroundColor:'black', opacity:0.5}}>
        //         <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'black'}}>Set Custom Goal</Text>
        //     </View>
        //     <View style={{flexDirection:'column', marginTop:'3%'}}></View>
        // </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         width:'100%',
//         height: '100%',
//         backgroundColor:'black'
//     },
//     row1:{
//       backgroundColor:'black',
//       opacity:0.5,
//       flexDirection: 'column',
//       marginBottom:0,
//       marginTop:0,
//       textAlign: 'center',
//       textAlignVertical: 'center',
//       fontSize: 50
//     },
// })

// export default SetCustom;
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import Forest from '../assets/archery.jpg';
import { Card, Button, TextInput } from 'react-native-paper';
import axios from 'axios';
function Setcustom({ navigation, route }){
    const [custom, setCustom] = useState("");
    return(
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'black'}}>ExerQuest</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:'3%', textAlign:'center', justifyContent:'center', alignItems:'center', backgroundColor:'black', opacity:0.5}}>
                <Text style={{fontSize: 35, alignContent:'center', alignSelf:'center', color:'white', opacity:10, backgroundColor:'black'}}>Set Custom Goal</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:'3%'}}>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '10000'
                            }).then((response) => {
                                alert(response.data);
                            }).catch((err) => {
                                alert(err.message);
                            })
                        }}>10000</Button>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '12000'
                            }).then((response) => {
                                alert(response.data);
                            }).catch((err) => {
                                alert(err.message);
                            })
                        }}>12000</Button>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '15000'
                            }).then((response) => {
                                alert(response.data);
                            }).catch((err) => {
                                alert(err.message);
                            })
                        }}>15000</Button>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '17000'
                            }).then((response) => {
                                alert(response.data);
                            }).catch((err) => {
                                alert(err.message);
                            })
                        }}>17000</Button>
                    </View>
                </View><View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '18000'
                            }).then((response) => {
                                alert(response.data);
                            }).catch((err) => {
                                alert(err.message);
                            })
                        }}>18000</Button>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '20000'
                            }).then((response) => {
                                alert(response.data);
                            }).catch((err) => {
                                alert(err.message);
                            })
                        }}>20000</Button>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'column', marginTop:'10%'}}>
                <View style={{flexDirection:'column', width:'90%', alignContent:'center', justifyContent:'center', marginLeft:20, marginTop:10}}>
                    <TextInput label={'Custom Goal'} onChangeText={(e) => setCustom(e)} />
                </View>
            </View>
            <View style={{flexDirection:'column', marginTop:'10%'}}>
                <View style={{flexDirection:'column', width:'90%', alignContent:'center', justifyContent:'center', marginLeft:20, marginTop:10, backgroundColor:'#0DA66D'}}>
                    <Button color='white' onPress={() => {
                        axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                            grpid: route.params.grpid,
                            decision:'set custom',
                            description:route.params.description,
                            email:route.params.email
                        }).then((rep) => {
                            if(rep.data === 'Decision added'){
                                axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                    grpid: route.params.grpid,
                                    cust: custom
                                }).then((response) => {
                                    alert(response.data);
                                    navigation.navigate('User', {
                                        email: route.params.email,
                                        grpid: route.params.grpid
                                    })
                                }).catch((err) => {
                                    alert(err.message);
                                })
                            }
                        }).catch((er)=>{
                            alert(er.message);
                        })
                    }}>Set Custom</Button>
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
        backgroundColor: 'black',
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

export default Setcustom;