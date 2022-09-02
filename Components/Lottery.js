import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
function Lottery({ navigation, route }){
    const [ lot, setLot ] = useState("");
    const [fadeAnim] = useState(new Animated.Value(0));
    const [col1, setCol1] = useState('red');
    const [col2, setCol2] = useState('red');
    const [col3, setCol3] = useState('red');
    const [col4, setCol4] = useState('red');
    const [col5, setCol5] = useState('red');
    const [col6, setCol6] = useState('red');
    const [grp, setGrp] = useState({ currentLevel: '1'});
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/addfinal', {
            grpid: route.params.grpid,
            decision:route.params.final,
            description: route.params.desc,
            email: route.params.email
        }).then((rep) => {
            if(rep.data === 'Decision added'){
                console.log('Decision added');
            }
        }).catch((er)=>{
            alert(er.message);
        })
    }, [])
    return(
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'black'}}>ExerQuest</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:'3%', textAlign:'center', justifyContent:'center', alignItems:'center', backgroundColor:'black', opacity:0.5}}>
                <Text style={{fontSize: 35, alignContent:'center', alignSelf:'center', color:'white', opacity:10, backgroundColor:'black'}}>Challenges</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:'25%', marginRight:'2%'}}>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', margin:'2%'}}>
                        <Button color={col1} labelStyle={{fontSize:35, textAlign:'center', elevation:0.8}}>10000</Button>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', margin:'2%'}}>
                        <Button color={col2} labelStyle={{fontSize:35, textAlign:'center', elevation:0.8}}>12000</Button>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', margin:'2%'}}>
                        <Button color={col3} labelStyle={{fontSize:35, textAlign:'center', elevation:0.8}}>15000</Button>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', margin:'2%'}}>
                        <Button color={col4} labelStyle={{fontSize:35, textAlign:'center', elevation:0.8}}>17000</Button>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', margin:'2%'}}>
                        <Button color={col5} labelStyle={{fontSize:35, textAlign:'center', elevation:0.8}}>18000</Button>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', margin:'2%', textAlign:'center'}}>
                        <Button color={col6} labelStyle={{fontSize:35, textAlign:'center', elevation:0.8}}>20000</Button>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'column', marginTop:'10%'}}>
                <View style={{flexDirection:'column', width:'90%', alignContent:'center', justifyContent:'center', marginLeft:20, marginTop:10}}>
                    <Button style={{backgroundColor:'red', color:'white'}} color='white' onPress={() => {
                        let g = Math.floor(Math.random() * 6);
                        alert(g);
                        if(g === 0 && grp.currentLevel === '5'){
                            g = g +1;
                        }
                        if(g === 0){
                            setCol2('black');
                            setCol3('black');
                            setCol4('black');
                            setCol5('black');
                            setCol6('black');
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                // grpid:grpid,
                                cust: '10000'
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
                        if(g === 1){
                            setCol1('black');
                            setCol3('black');
                            setCol4('black');
                            setCol5('black');
                            setCol6('black');
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '12000'
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
                        else if(g === 2){
                            setCol2('black');
                            setCol1('black');
                            setCol4('black');
                            setCol5('black');
                            setCol6('black');
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '15000'
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
                        else if(g === 3){
                            setCol2('black');
                            setCol3('black');
                            setCol1('black');
                            setCol5('black');
                            setCol6('black');
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '17000'
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
                        else if(g === 4){
                            setCol2('black');
                            setCol3('black');
                            setCol4('black');
                            setCol1('black');
                            setCol6('black');
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '18000'
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
                        else if(g === 5){
                            setCol2('black');
                            setCol3('black');
                            setCol4('black');
                            setCol5('black');
                            setCol1('black');
                            axios.post('https://fitness-game-server.herokuapp.com/setcustom', {
                                grpid: route.params.grpid,
                                cust: '20000'
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
                    }}>Start</Button>
                </View>
            </View>
            <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black', marginTop:'10%'}}>
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

export default Lottery