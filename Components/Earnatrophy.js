import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';

function Earnatrophy(){
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
                        <Button color='white' icon={'trophy'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>10000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' icon={'trophy-award'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>12000</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' icon={'trophy-outline'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>15000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' icon={'trophy-broken'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>17000</Text>
                        </View>
                    </View>
                </View><View style={{flexDirection:'row', marginTop:'3%'}}>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%'}}>
                        <Button color='white' icon={'trophy-variant'} labelStyle={{fontSize:45}}></Button>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:13}}>18000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', width:'50%', height:'100%', backgroundColor:'#0DA66D', margin:'2%', textAlign:'center'}}>
                        <Button color='white' icon={'trophy-variant-outline'} labelStyle={{fontSize:45}}></Button>
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
            <View style={{width:'100%', height:'10%', flexDirection:'row', backgroundColor:'black', marginTop:'20%'}}>
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