import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
function Updatestepspoints({ route, navigation }){
    const [steps, setSteps] = useState(0);
    const [points, setPoints] = useState(0);
    return(
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'black'}}>ExerQuest</Text>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row', marginTop:'40%', marginLeft:'10%', marginRight:'10%'}}>
                    <TextInput label={'Enter your steps'} style={{width:'90%'}} onChangeText={(e) => setSteps(e)} />
                </View>
                <View style={{flexDirection:'row',marginTop:'10%', marginLeft:'10%', marginRight:'10%'}}>
                    <TextInput style={{width:'90%'}} label={'Enter your Points'} onChangeText={(e) => setPoints(e)} />
                </View>
                <View style={{flexDirection:'row',marginTop:'10%', marginLeft:'10%', marginRight:'10%'}}>
                    <Button onPress={() => {
                        axios.post('https://fitness-game-server.herokuapp.com/updatestepspoints', {
                            email: route.params.email,
                            grpid: route.params.grpid,
                            steps: steps,
                            points: points
                        }).then((Resp) => {
                            console.log(Resp.data);
                            console.log(route.params.email);
                            if(Resp.data === 'Data updated'){
                                navigation.navigate('User', {
                                    email: route.params.email,
                                    grpid: route.params.grpid
                                })
                            }

                        }).catch((Err) => {
                            alert(Err.message);
                        })
                    }}>Update</Button>
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

export default Updatestepspoints;