import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import axios from 'axios';
function Earnatrophy({ navigation, route }){
    const [goal, setGoal] = useState("");
    const [grp, setGrp] = useState({ grpid: "ab" });
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retgrpdata', {
            grpid: route.params.grpid
        }).then((response) => {
            setGrp(response.data[0]);
        }).catch((err) => {
            alert(err.message);
        })
    }, []);
    return(
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'black'}}>ExerQuest</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:'3%', textAlign:'center', justifyContent:'center', alignItems:'center', backgroundColor:'black', opacity:0.5}}>
                <Text style={{fontSize: 35, alignContent:'center', alignSelf:'center', color:'white', opacity:10, backgroundColor:'black'}}>Earn a Trophy</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:'3%'}}>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' icon={'trophy'} labelStyle={{fontSize:45}} onPress={() => {
                            // axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                            //     grpid: route.params.grpid,
                            //     cust: '10000'
                            // }).then((response) => {
                            //     alert(response.data);
                            //     axios.post('https://fitness-game-server.herokuapp.com/addtrophy', {
                            //         grpid: route.params.grpid,
                            //         trophy: 'Type A',
                            //         point: '10000'
                            //     }).then((rep) => {
                            //         if(rep.data === 'Trophy added'){
                            //             alert('Trophy added');
                            //             axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                            //                 grpid: route.params.grpid,
                            //                 decision: 'Earn a trophy',
                            //                 description: '10000',
                            //                 email: route.params.email
                            //             }).then((rep12) => {
                            //                 alert(rep12.data);
                            //                 navigation.navigate('User', {
                            //                     email: route.params.email,
                            //                     grpid: route.params.grpid
                            //                 });
                            //             }).catch((er1) => {
                            //                 console.log(er1);
                            //             });
                            //         }
                            //     }).catch((er) => {
                            //         alert(er.message);
                            //     })
                            // }).catch((err) => {
                            //     alert(err.message);
                            // })
                            axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                                grpid: route.params.grpid,
                                decision: 'Earn a trophy',
                                description: '10000',
                                email: route.params.email
                            }).then((rep1) => {
                                if(rep1.data === 'Decision added'){
                                    axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                        grpid: route.params.grpid,
                                        cust: '10000'
                                    }).then((rep2) => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addtrophy', {
                                            grpid: route.params.grpid,
                                            trophy: 'Type A',
                                            point: '10000'
                                        }).then((rep3) => {
                                            alert(rep3.data);
                                            navigation.navigate('User', {
                                                email: route.params.email,
                                                grpid: route.params.grpid
                                            })
                                        }).catch((er3) => {
                                            alert(er3.message);
                                        })
                                    }).catch((er2) => {
                                        alert(er2.message);
                                    })
                                }
                            }).catch((er1) => {
                                alert(er1.message);
                            })
                        }}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>10000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' icon={'trophy-award'} onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                                grpid: route.params.grpid,
                                decision: 'Earn a trophy',
                                description: '12000',
                                email: route.params.email
                            }).then((rep1) => {
                                if(rep1.data === 'Decision added'){
                                    axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                        grpid: route.params.grpid,
                                        cust: '12000'
                                    }).then((rep2) => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addtrophy', {
                                            grpid: route.params.grpid,
                                            trophy: 'Type B',
                                            point: '12000'
                                        }).then((rep3) => {
                                            alert(rep3.data);
                                            navigation.navigate('User', {
                                                email: route.params.email,
                                                grpid: route.params.grpid
                                            })
                                        }).catch((er3) => {
                                            alert(er3.message);
                                        })
                                    }).catch((er2) => {
                                        alert(er2.message);
                                    })
                                }
                            }).catch((er1) => {
                                alert(er1.message);
                            })
                        }} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>12000</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                                grpid: route.params.grpid,
                                decision: 'Earn a trophy',
                                description: '15000',
                                email: route.params.email
                            }).then((rep1) => {
                                if(rep1.data === 'Decision added'){
                                    axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                        grpid: route.params.grpid,
                                        cust: '15000'
                                    }).then((rep2) => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addtrophy', {
                                            grpid: route.params.grpid,
                                            trophy: 'Type C',
                                            point: '15000'
                                        }).then((rep3) => {
                                            alert(rep3.data);
                                            navigation.navigate('User', {
                                                email: route.params.email,
                                                grpid: route.params.grpid
                                            })
                                        }).catch((er3) => {
                                            alert(er3.message);
                                        })
                                    }).catch((er2) => {
                                        alert(er2.message);
                                    })
                                }
                            }).catch((er1) => {
                                alert(er1.message);
                            })
                        }} icon={'trophy-outline'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>15000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                                grpid: route.params.grpid,
                                decision: 'Earn a trophy',
                                description: '17000',
                                email: route.params.email
                            }).then((rep1) => {
                                if(rep1.data === 'Decision added'){
                                    axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                        grpid: route.params.grpid,
                                        cust: '17000'
                                    }).then((rep2) => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addtrophy', {
                                            grpid: route.params.grpid,
                                            trophy: 'Type D',
                                            point: '17000'
                                        }).then((rep3) => {
                                            alert(rep3.data);
                                            navigation.navigate('User', {
                                                email: route.params.email,
                                                grpid: route.params.grpid
                                            })
                                        }).catch((er3) => {
                                            alert(er3.message);
                                        })
                                    }).catch((er2) => {
                                        alert(er2.message);
                                    })
                                }
                            }).catch((er1) => {
                                alert(er1.message);
                            })
                        }} color='white' icon={'trophy-broken'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>17000</Text>
                        </View>
                    </View>
                </View><View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                                grpid: route.params.grpid,
                                decision: 'Earn a trophy',
                                description: '18000',
                                email: route.params.email
                            }).then((rep1) => {
                                if(rep1.data === 'Decision added'){
                                    axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                        grpid: route.params.grpid,
                                        cust: '18000'
                                    }).then((rep2) => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addtrophy', {
                                            grpid: route.params.grpid,
                                            trophy: 'Type E',
                                            point: '18000'
                                        }).then((rep3) => {
                                            alert(rep3.data);
                                            navigation.navigate('User', {
                                                email: route.params.email,
                                                grpid: route.params.grpid
                                            })
                                        }).catch((er3) => {
                                            alert(er3.message);
                                        })
                                    }).catch((er2) => {
                                        alert(er2.message);
                                    })
                                }
                            }).catch((er1) => {
                                alert(er1.message);
                            })
                        }} color='white' icon={'trophy-variant'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>18000</Text>
                        </View>
                    </View>{/*owner and tenant*/}
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%', textAlign:'center'}}>
                        <Button onPress={() => {
                            axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
                                grpid: route.params.grpid,
                                decision: 'Earn a trophy',
                                description: '20000',
                                email: route.params.email
                            }).then((rep1) => {
                                if(rep1.data === 'Decision added'){
                                    axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                        grpid: route.params.grpid,
                                        cust: '20000'
                                    }).then((rep2) => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addtrophy', {
                                            grpid: route.params.grpid,
                                            trophy: 'Type F',
                                            point: '20000'
                                        }).then((rep3) => {
                                            alert(rep3.data);      
                                            navigation.navigate('User', {
                                                email: route.params.email,
                                                grpid: route.params.grpid
                                            })
                                        }).catch((er3) => {
                                            alert(er3.message);
                                        })
                                    }).catch((er2) => {
                                        alert(er2.message);
                                    })
                                }
                            }).catch((er1) => {
                                alert(er1.message);
                            })
                        }}  color='white' icon={'trophy-variant-outline'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>20000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'column', marginTop:'10%'}}>
                <View style={{flexDirection:'column', width:'90%', alignContent:'center', justifyContent:'center', marginLeft:20, marginTop:10}}>
                    <Button style={{backgroundColor:'red', color:'white'}} color='white'>Start</Button>
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
})

export default Earnatrophy