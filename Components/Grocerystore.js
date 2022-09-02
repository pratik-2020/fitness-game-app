import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import axios from 'axios';
function Grocerystore({ navigation, route }){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [grp, setGrp] = useState({});
    const [disabled, setDisabled] = useState(true);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retgrpdata', {
            grpid: route.params.grpid
        }).then((response) => {
            setGrp(response.data[0]);
            if(grp.admin === route.params.admin){
                setDisabled(false);
            }
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
                <Text style={{fontSize: 35, alignContent:'center', alignSelf:'center', color:'white', opacity:10, backgroundColor:'black'}}>Grocery Store</Text>
            </View>
                <ScrollView>
                <View style={{flexDirection:'column', marginTop:'25%'}}>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                            <Button disabled={disabled} color='white' icon={'tree'} onPress={() => {
                                setName('tree');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'tree'
                                })
                            }} labelStyle={{fontSize:45, textAlign:'center'}}></Button>
                        </View>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('seed');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'seed'
                                })
                            }} icon={'seed'} labelStyle={{fontSize:35, textAlign:'center'}}></Button>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button disabled={disabled} color='white' onPress={() => {
                            setName('house');
                            setVisible(true);
                            navigation.navigate('Buy', {
                                email: route.params.email,
                                grpid: route.params.grpid,
                                name: 'house'
                            })
                        }} icon={'home'} labelStyle={{fontSize:35, textAlign:'center'}}></Button>
                        </View>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('flower');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'flower'
                                })
                            }} icon={'flower'} labelStyle={{fontSize:35, textAlign:'center'}}></Button>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('weed killer');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'weed killer'
                                })
                            }} icon={'bottle-soda'} labelStyle={{fontSize:35, textAlign:'center'}}></Button>
                        </View>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%', textAlign:'center'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('bag');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'bag'
                                })
                            }} icon={'bag-suitcase'} labelStyle={{fontSize:35, textAlign:'center'}}></Button>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('medium plant');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'medium plant'
                                })
                            }} icon={'barley'} labelStyle={{fontSize:35, textAlign:'center'}}></Button>
                        </View>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%', textAlign:'center'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('large plant');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'large plant'
                                })
                            }} icon={'barley'} labelStyle={{fontSize:55, textAlign:'center'}}></Button>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:'3%'}}>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('small plant');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'small plant'
                                })
                            }} icon={'barley'} labelStyle={{fontSize:25, textAlign:'center'}}></Button>
                        </View>
                        <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%', textAlign:'center'}}>
                            <Button disabled={disabled} color='white' onPress={() => {
                                setName('sod roller');
                                setVisible(true);
                                navigation.navigate('Buy', {
                                    email: route.params.email,
                                    grpid: route.params.grpid,
                                    name: 'sod roll'
                                })
                            }} icon={'printer'} labelStyle={{fontSize:35, textAlign:'center'}}></Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
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

export default Grocerystore;