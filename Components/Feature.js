import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import Forest from '../assets/archery.jpg';
import { Card, Button } from 'react-native-paper';
import axios from 'axios';
function Feature({ navigation, route }){
    return(
        <View style={styles.container}>
            <ImageBackground source={Forest} style={{height:'100%', backgroundColor: 'black', opacity:0.7}} resizeMode='stretch'>
                <View style={styles.row1}>
                    <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'black'}}>ExerQuest</Text>
                </View>
                <View style={{flexDirection:'column', width:'100%', height:'60%', margin:"20%", marginLeft:30}}>
                    <ScrollView>
                        <View style={{flexDirection:'row'}}>
                            <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                                <View style={{flexDirection:'column',  marginRight:10, marginLeft:10,}}>
                                    <Button icon='star' labelStyle={{fontSize:100, color:'orange'}} onPress={() => {
                                        axios.post('https://fitness-game-server.herokuapp.com/getURL', {
                                            email: route.params.email
                                        }).then((response) => {
                                                Linking.openURL(response.data.url);
                                        }).catch((err) => {
                                            alert(err.message);
                                        })
                                    }}></Button>
                                </View>
                            </Card>
                            <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                                <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, opacity:0.8}}>
                                    <Button icon={'heart'} color='red' labelStyle={{fontSize:100, color:'red'}} onPress={() => {
                                        axios.post('https://fitness-game-server.herokuapp.com/url', {
                                            email: route.params.email
                                        }).then((response) => {
                                            if(response.data === 'Hello'){
                                                Linking.openURL(response.data.url);
                                            }
                                        }).catch((err) => {
                                            alert(err.message);
                                        })
                                    }}></Button>
                                </View>
                            </Card>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                                <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, opacity:0.8}}>
                                <Button icon='archive' labelStyle={{fontSize:100, color:'white'}} onPress={() => {
                                    alert('Hello2')
                                }}></Button>
                                </View>
                            </Card>
                            <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                                <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, opacity:0.8}}>
                                <Button icon='image' labelStyle={{fontSize:100, color:'#7AEA0C'}} onPress={() => {
                                    alert('Hello3')
                                }}></Button>
                                </View>
                            </Card>
                        </View>
                    </ScrollView>
                </View>
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
                        navigation.navigate('Notification', {
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
});

export default Feature;