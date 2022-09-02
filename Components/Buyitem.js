import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { TextInput, Button } from 'react-native-paper';
function Buyitem({ navigation, route }){
    const [quantity, setQuantity] = useState("");
    const [grp, setGrp] = useState({});
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
            <View style={{flexDirection:'column', marginTop:'32%'}}>
                <View style={{flexDirection:'row', marginLeft:'10%', width:'100%', marginRight:'12%'}}>
                    <TextInput label={'Quantity'} style={{width:'80%'}} onChangeText={(e) => setQuantity(e)} />
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <Button style={{width:'80%', color:'white', backgroundColor:'green', marginLeft:'9%', marginTop:'8%'}} color='white' onPress={() => {
                        console.log(grp.points+' '+parseInt(quantity)+' '+route.params.name);
                        if(route.params.name === 'seed'){
                            if(quantity > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'small plant'){
                            if(quantity*2 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'medium plant'){
                            if(quantity*5 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'large plant'){
                            if(quantity*10 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'tree'){
                            console.log(grp.points+' '+quantity);
                            if(parseInt(quantity)*50 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: parseInt(quantity)
                                }).then((response) => {
                                    console.log(response);
                                    alert(response.data);
                                }).catch((err) => {
                                    console.log("err.message");
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'house'){
                            if(quantity*100 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'sod roll'){
                            if(quantity*20 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'weed killer'){
                            if(quantity*40 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'bag'){
                            if(quantity*40 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                        else if(route.params.name === 'flower'){
                            if(quantity*2 > grp.points){
                                alert('points are not enough');
                            }
                            else{
                                axios.post('https://fitness-game-server.herokuapp.com/additem', {
                                    id: route.params.grpid,
                                    itemname: route.params.name,
                                    quantity: quantity
                                }).then((response) => {
                                    alert(response.data);
                                }).catch((err) => {
                                    alert(err.message);
                                });
                            }
                        }
                    }}>Buy</Button>
                </View>
            </View>
            <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black', marginTop:'90%'}}>
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

export default Buyitem;