import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Forest from '../assets/forest2.jpg';
import Dollar from '../assets/dollar.jpg';
import BottomNavigation from './BottomNavigation';
import axios from 'axios';
function Voting({ navigation, route }){
    
    return(
        <View style={styles.container}>
            <ImageBackground source={Forest} style={{height:'100%', backgroundColor: 'black', opacity:0.7}} resizeMode='stretch'>
                <View style={styles.row1}>
                    <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'green'}}>ExerQuest</Text>
                </View>
                <View style={{flexDirection:'row', width:'40%', height:'10%',elevation:70, shadowColor:'green', backgroundColor:'green', opacity:0.9, margin:'10%', borderRadius:500}}>
                    <View style={{flexDirection:'column'}}>
                        <Button icon='star' color='orange' labelStyle={{fontSize:45}} style={{width:'100%', height:'100%'}}></Button>
                    </View>
                    <View style={{flexDirection:'column', alignContent:'center', justifyContent:'center'}}>
                        <Text style={{color:'white', margin:10, fontSize:30}}>100</Text>
                    </View>
                </View>
                <View style={{flexDirection:'column', width:'100%', height:'60%', margin:10, marginLeft:30}}>
                    <ScrollView>
                        <View style={{flexDirection:'row'}}>
                            <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                                <View style={{flexDirection:'column',  marginRight:10, marginLeft:10,}}>
                                    <Button icon='trophy' labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                            email:route.params.email,
                                            vote:'Earn trophy',
                                            gameSession:'abcd'
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
                                    <Button icon='bullseye' labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                        axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                            email:route.params.email,
                                            vote:'Set week goal',
                                            gameSession:'abcd'
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
                                <Button icon='account-multiple' labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                    axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                        email:route.params.email,
                                        vote:'Change leader',
                                        gameSession:'abcd'
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
                                <Button icon='car-brake-fluid-level' labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                    axios.post('https://fitness-game-server.herokuapp.com/addvote',{
                                        email:route.params.email,
                                        vote:'Lottery',
                                        gameSession:'abcd'
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
                    </ScrollView>
                </View>
                <View style={{width:'100%', height:'10%'}}>
                    <BottomNavigation />
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
});


export default Voting;