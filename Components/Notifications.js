import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native'
import Archery from '../assets/archery.jpg';
import { Card, Button } from 'react-native-paper';
import BottomNavigation from './BottomNavigation';
import axios from 'axios';
function Notifications({ route, navigation }){
    const [notification, setNotification] = useState([]);
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retrievenotification', {
            email: route.params.email
        }).then((response) => {
            response.data.map((e,key) => {
                setNotification([...notification,e]);
            })
        }).catch((err) =>{
            alert(err);
        })
    }, [notification]);
    return(
        <View style={styles.container}>
            <ImageBackground source={Archery} resizeMode='contain' style={{height:'100%', backgroundColor: 'black', opacity:0.7}}>
            <View style={styles.row1}>
              <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>FitTrack</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:2, marginRight:10, marginLeft:10, marginBottom: 20, width:'100%', height:'80%'}}>
                <ScrollView>
                    {
                        () => {
                            if(notification.length === 0){
                                return(
                                    <Card style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                                        <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, backgroundColor:'black', opacity:0.8}}>
                                            <Text style={{fontSize: 25, color:'white'}}>No notification is for you</Text>
                                        </View>
                                    </Card>
                                );
                            }
                            else{
                                notification.map((e,key) => {
                                    return(
                                        <Card key={key} style={{backgroundColor:'black', opacity:0.8, marginRight:20, marginTop:15, height:100}}>
                                            <View style={{flexDirection:'column',  marginRight:10, marginLeft:10, backgroundColor:'black', opacity:0.8}}>
                                                <Text style={{fontSize: 25, color:'white'}}>{e.message}</Text>
                                            </View>
                                        </Card>
                                    );
                                })
                            }
                        }
                    }
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
                    <Button icon='bell' color='white' labelStyle={{fontSize: 30}}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='information' color='white' labelStyle={{fontSize: 30}} onPress={() => {
                        navigation.navigate('Feature', {
                            email: route.params.email,
                            grpid: route.params.grpid
                        })
                    }}>
                    </Button>
                </View>
                <View style={styles.column}>
                    <Button icon='filter-variant' color='white' labelStyle={{fontSize: 30}}>
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
        width: '100%',
        height: '100%',
        backgroundColor:'black',
        opacity:0.7
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
})
export default Notifications;