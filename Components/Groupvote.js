import axios from 'axios';
import React,  { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

function Groupvote({ navigation, route }){
    const [grpvt, setGrpvt] = useState([]);
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retvt', {
            grpid: route.params.grpid
        }).then((rep) => {
            console.log(route.params.grpid);
            console.log(rep.data);
            setGrpvt(rep.data);
        }).catch((er) => {
            console.log(er.message);
            console.log(route.params.grpid);
            alert(er.message);
        })
    }, []);
    const renderVote = () => {
        console.log(grpvt);
        if(grpvt.length > 0){
            return grpvt.map((e,key) => {
                return(
                    <View key={key} style={{flexDirection:'row', backgroundColor:'black'}}>
                        <Card style={{backgroundColor:'black'}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color:'#FFA103'}}>{e.email} : </Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color:'#FFA103'}}>{e.vote}</Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                );
            })
        }
        else{
            return(
                <View>
                    <Text style={{color:'white'}}>Hello</Text>
                </View>
            );
        }
    }
    return(
        <View style={styles.viewcontainer}>
            <View style={styles.row1}>
              <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'#FFA103'}}>FitTrack</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:'30%', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <ScrollView>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#FFA103'}}>Vote</Text>
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        {renderVote()}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewcontainer: {
        width: "100%",
        height: "100%",
        backgroundColor: 'black'
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

export default Groupvote;