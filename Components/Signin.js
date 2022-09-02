import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import { Card, Menu, Button, Divider, Provider, List, TextInput, RadioButton } from 'react-native-paper';
import cyclist from '../assets/cyclist.jpg';
import axios from 'axios';
function SignIn({ route , navigation}) {
    const [usertype, setUsertype] = useState("");
    const [que1, setQue1] = useState(0);
    const [que2, setQue2] = useState(0);
    const [que3, setQue3] = useState(0);
    const [que4, setQue4] = useState(0);
    const [que5, setQue5] = useState(0);
    const [que6, setQue6] = useState(0);
    const [que7, setQue7] = useState(0);
    const [que8, setQue8] = useState(0);
    const [que9, setQue9] = useState(0);
    const [que10, setQue10] = useState(0);
    const [que11, setQue11] = useState(0);
    const [que12, setQue12] = useState(0);
    const [que13, setQue13] = useState(0);
    const [que14, setQue14] = useState(0);
    const [que15, setQue15] = useState(0);
    const [que16, setQue16] = useState(0);
    const [que17, setQue17] = useState(0);
    const [que18, setQue18] = useState(0);
    const [que19, setQue19] = useState(0);
    const [que20, setQue20] = useState(0);
    const [que21, setQue21] = useState(0);
    const [que22, setQue22] = useState(0);
    const [que23, setQue23] = useState(0);
    const [que24, setQue24] = useState(0);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible6, setVisible6] = useState(false);
    const [visible7, setVisible7] = useState(false);
    const [visible8, setVisible8] = useState(false);
    const [visible9, setVisible9] = useState(false);
    const [visible10, setVisible10] = useState(false);
    const [visible11, setVisible11] = useState(false);
    const [visible12, setVisible12] = useState(false);
    const [visible13, setVisible13] = useState(false);
    const [visible14, setVisible14] = useState(false);
    const [visible15, setVisible15] = useState(false);
    const [visible16, setVisible16] = useState(false);
    const [visible17, setVisible17] = useState(false);
    const [visible18, setVisible18] = useState(false);
    const [visible19, setVisible19] = useState(false);
    const [visible20, setVisible20] = useState(false);
    const [visible21, setVisible21] = useState(false);
    const [visible22, setVisible22] = useState(false);
    const [visible23, setVisible23] = useState(false);
    const [visible24, setVisible24] = useState(false);
    const [grpid, setGrpid] = useState("");
    const [name, setName] = useState("");
    return(
            <View>
                <View style={styles.viewcontainer}>
                    <View style={styles.row1}>
                        <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>FitTrack</Text>
                    </View>
                    <ScrollView>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> I dislike following rules.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que1 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue1(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que1 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue1(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que1 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue1(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que1 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue1(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que1 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue1(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que1 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue1(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que1 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue1(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like to provoke</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que2 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue2(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que2 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue2(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que2 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue2(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que2 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue2(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que2 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue2(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que2 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue2(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que2 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue1(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> It is important to me to always carry out my tasks completely</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que3 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue3(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que3 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue3(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que3 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue3(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que3 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue3(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que3 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue3(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que3 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue3(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que3 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue3(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like mastering difficult tasks</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que4 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue4(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que4 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue4(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que4 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue4(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que4 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue4(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que4 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue4(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que4 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue4(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que4 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue4(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like competitions where a prize can be won.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que5 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue5(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que5 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue5(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que5 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue5(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que5 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue5(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que5 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue5(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que5 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue5(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que5 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue5(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> Interacting with others is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que6 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue6(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que6 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue6(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que6 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue6(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que6 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue6(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que6 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue6(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que6 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue6(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que6 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue6(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like to try new things.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que7 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue7(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que7 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue7(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que7 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue7(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que7 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue7(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que7 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue7(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que7 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue7(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que6 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue6(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>Being independent is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que8 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue8(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que8 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue8(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que8 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue8(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que8 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue8(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que8 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue8(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que8 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue8(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que8 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue8(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>Return of investment is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que9 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue9(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que9 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue9(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que9 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue9(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que9 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue9(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que9 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue9(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que9 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue9(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que9 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue9(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> Rewards are a great way to motivate me</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que10 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue10(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que10 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue10(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que10 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue10(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que10 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue10(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que10 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue10(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que10 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue10(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que10 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue10(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I see myself as a rebel.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que11 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue11(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que11 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue11(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que11 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue11(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que11 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue11(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que11 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue11(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que11 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue11(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que11 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue11(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> It is important to me to feel like I am part of a community.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que12 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue12(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que12 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue12(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que12 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue12(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que12 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue12(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que12 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue12(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que12 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue12(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que12 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue12(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>It is difficult for me to let go of a problem before I have found a solution</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que13 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue13(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que13 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue13(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que13 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue13(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que13 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue13(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que13 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue13(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que13 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue10(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que13 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue10(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>If the reward is enough I will put in the effort.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que14 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue14(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que14 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue14(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que14 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue14(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que14 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue14(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que14 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue14(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que14 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue14(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que14 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue14(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> I like overcoming obstacles.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que15 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue15(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que15 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue15(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que15 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue15(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que15 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue15(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que15 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue15(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que15 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue15(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que15 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue15(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>It makes me happy if I am able to help others</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que16 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue16(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que16 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue16(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que16 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue16(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que16 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue16(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que16 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue16(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que16 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue16(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que16 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue16(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like helping others to orient themselves in new situations.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que17 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue17(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que17 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue17(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que17 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue17(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que17 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue17(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que17 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue17(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que17 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue17(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que17 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue17(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like being part of a team</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que18 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue18(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que18 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue18(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que18 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue18(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que18 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue18(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que18 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue18(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que18 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue18(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que18 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue18(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like sharing my knowledge.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que19 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue19(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que19 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue19(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que19 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue19(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que19 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue19(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que19 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue19(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que19 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue19(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que19 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue19(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I enjoy group activities.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que20 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue20(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que20 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue20(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que20 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue20(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que20 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue20(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que20 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue20(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que20 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue20(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que20 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue20(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like to question the status quo.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que21 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue21(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que21 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue21(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que21 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue21(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que21 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue21(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que21 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue21(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que21 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue21(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que21 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue21(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> It is important to me to follow my own path.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que22 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue22(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que22 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue22(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que22 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue22(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que22 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue22(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que22 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue22(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que22 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue22(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que22 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue22(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>The wellbeing of others is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que23 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue23(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que23 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue23(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que23 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue23(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que23 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue23(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que23 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue23(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que23 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue23(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que23 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue23(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I often let my curiosity guide me.</Text>
                                </View>
                                <View style={styles.column}>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que24 === 1 ? 'checked' : 'unchecked'} onPress={() => {setQue24(1)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que24 === 2 ? 'checked' : 'unchecked'} onPress={() => {setQue24(2)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que24 === 3 ? 'checked' : 'unchecked'} onPress={() => {setQue24(3)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Disagree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton status={que24 === 4 ? 'checked' : 'unchecked'} value='' onPress={() => {setQue24(4)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Neither</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que24 === 5 ? 'checked' : 'unchecked'} onPress={() => {setQue24(5)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Somewhat Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'14%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que24 === 6 ? 'checked' : 'unchecked'} onPress={() => {setQue24(6)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Agree</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', width:'15%'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value='' status={que24 === 7 ? 'checked' : 'unchecked'} onPress={() => {setQue24(7)}} />
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'white', fontSize:11}}>Strongly Agree</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <TextInput label={'Group Id'} style={{width:'100%', marginBottom:10}} onChangeText={(e) => setGrpid(e)} />
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Button color='white' onPress={() => {
                                        console.log("grpid"+grpid);
                                        let a = que1 + que2 + que3 + que4;
                                        let b = que5 + que6 + que7 + que8;
                                        let c = que9 + que10 + que11 + que12;
                                        let d = que13 + que14 + que15 + que16;
                                        let e = que17 + que18 + que19 + que20;
                                        let f = que21 + que22 + que23 + que24;
                                        if(a>=b && a>=c && a>=d && a>=e && a>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/joingroup',{
                                                user: route.params.email,
                                                grpid: grpid,
                                                
                                            }).then((response) => {
                                                alert(response.data);
                                                if(response.data === 'USer successfully joined the group!!'){
                                                    alert(response.data);
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: route.params.name,
                                                        usertype: 'Philanthropists',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((resp) => {
                                                        if(resp.data === 'User addedd successsfully!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            });        
                                                        }    
                                                    })
                                                    navigation.navigate('User', {
                                                        email: route.params.email
                                                    });
                                                }
                                                else{
                                                    console.log(response.data);
                                                    alert('Welcome')
                                                }
                                            })
                                        }
                                        else if(a<=b && b>=c && b>=d && b>=e && b>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/joingroup',{
                                                user: route.params.email,
                                                grpid: grpid,
                                                
                                            }).then((response) => {
                                                alert(response.data);
                                                if(response.data === 'USer successfully joined the group!!'){
                                                    alert(response.data);
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Socializers',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((resp) => {
                                                        if(resp.data === 'User addedd successsfully!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            });        
                                                        }    
                                                    })
                                                    navigation.navigate('User', {
                                                        email: route.params.email
                                                    });
                                                }
                                                else{
                                                    alert('Error occoured');
                                                }
                                            })
                                        }
                                        else if(c>=b && a<=c && c>=d && c>=e && c>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/joingroup',{
                                                user: route.params.email,
                                                grpid: grpid,
                                                
                                            }).then((response) => {
                                                alert(response.data);
                                                if(response.data === 'USer successfully joined the group!!'){
                                                    alert(response.data);
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Free Spirits',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((resp) => {
                                                        if(resp.data === 'User addedd successsfully!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            });        
                                                        }    
                                                    })
                                                    navigation.navigate('User', {
                                                        email: route.params.email
                                                    });
                                                }
                                                else{
                                                    alert('Error occoured');
                                                }
                                            })
                                        }
                                        else if(d>=b && d>=c && a<=d && d>=e && d>=f){
                                            // Achievers
                                            axios.post('https://fitness-game-server.herokuapp.com/joingroup',{
                                                user: route.params.email,
                                                grpid: grpid,
                                                
                                            }).then((response) => {
                                                alert(response.data);
                                                if(response.data === 'USer successfully joined the group!!'){
                                                    alert(response.data);
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Achievers',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((resp) => {
                                                        if(resp.data === 'User addedd successsfully!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            });        
                                                        }    
                                                    })
                                                    navigation.navigate('User', {
                                                        email: route.params.email
                                                    });
                                                }
                                                else{
                                                    alert('Error occoured');
                                                }
                                            })
                                        }
                                        else if(e>=b && e>=c && e>=d && a<=e && e>=f){
                                            // Players
                                            axios.post('https://fitness-game-server.herokuapp.com/joingroup',{
                                                user: route.params.email,
                                                grpid: grpid,
                                                
                                            }).then((response) => {
                                                alert(response.data);
                                                if(response.data === 'USer successfully joined the group!!'){
                                                    alert(response.data);
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Players',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((resp) => {
                                                        if(resp.data === 'User addedd successsfully!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            });        
                                                        }    
                                                    })
                                                    navigation.navigate('User', {
                                                        email: route.params.email
                                                    });
                                                }
                                                else{
                                                    alert('Error occoured');
                                                }
                                            })
                                        }
                                        else{
                                            // Disruptors
                                            axios.post('https://fitness-game-server.herokuapp.com/joingroup',{
                                                user: route.params.email,
                                                grpid: grpid,  
                                            }).then((response) => {
                                                alert(response.data);
                                                if(response.data === 'USer successfully joined the group!!'){
                                                    alert(response.data);
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Disruptors',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((resp) => {
                                                        if(resp.data === 'User addedd successsfully!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            });        
                                                        }    
                                                    })
                                                    navigation.navigate('User', {
                                                        email: route.params.email
                                                    });
                                                }
                                                else{
                                                    alert('Error occoured');
                                                }
                                            })
                                        }
                                        navigation.navigate('Join', {
                                            user: route.params.email,
                                            type: usertype
                                        })
                                    }}>Join a group</Button>
                                </View>
                                <View style={styles.column}>
                                    <Button color='white' onPress={() => {
                                        alert('Welcom')
                                        let a = que1 + que2 + que3 + que4;
                                        let b = que5 + que6 + que7 + que8;
                                        let c = que9 + que10 + que11 + que12;
                                        let d = que13 + que14 + que15 + que16;
                                        let e = que17 + que18 + que19 + que20;
                                        let f = que21 + que22 + que23 + que24;
                                        if(a>=b && a>=c && a>=d && a>=e && a>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/creategroup', {
                                                email: route.params.email,
                                                goal: "5000"
                                            }).then((response) => {
                                                if(response.data !== 'Error occoured'){
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: "Pratik",
                                                        usertype: 'Philanthropists',
                                                        grpid: response.data.grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((response) => {
                                                        alert("hi")
                                                        if(response.data === 'User addedd successsfully!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            })
                                                        }
                                                        else{
                                                            console.log(response.data);
                                                            alert("hii "+response.data);
                                                        }
                                                    }).catch((er) =>{
                                                        alert(er.message);
                                                    })
                                                }
                                                else{
                                                    alert("hello "+response.data)
                                                }
                                            }).catch((err) => {
                                                alert('Error occoured');
                                            })
                                        }
                                        else if(a<=b && b>=c && b>=d && b>=e && b>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/creategroup', {
                                                email: route.params.email,
                                                goal: "5000"
                                            }).then((response) => {
                                                if(response.data !== 'Error occoured'){
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Socialiser',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((response) => {
                                                        if(response.data === 'USer successfully joined the group!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            })
                                                        }
                                                        else{
                                                            alert('Error occoured');
                                                        }
                                                    })
                                                }
                                            }).catch((err) => {
                                                alert('Error occoured');
                                            })
                                        }
                                        else if(c>=b && a<=c && c>=d && c>=e && c>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/creategroup', {
                                                email: route.params.email,
                                                goal: "5000"
                                            }).then((response) => {
                                                if(response.data !== 'Error occoured'){
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Free Spirits',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((response) => {
                                                        if(response.data === 'USer successfully joined the group!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            })
                                                        }
                                                        else{
                                                            alert('Error occoured');
                                                        }
                                                    })
                                                }
                                            }).catch((err) => {
                                                alert('Error occoured');
                                            })
                                        }
                                        else if(d>=b && d>=c && a<=d && d>=e && d>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/creategroup', {
                                                email: route.params.email,
                                                goal: "5000"
                                            }).then((response) => {
                                                if(response.data !== 'Error occoured'){
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Achievers',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((response) => {
                                                        if(response.data === 'USer successfully joined the group!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            })
                                                        }
                                                        else{
                                                            alert('Error occoured');
                                                        }
                                                    })
                                                }
                                            }).catch((err) => {
                                                alert('Error occoured');
                                            })
                                        }
                                        else if(e>=b && e>=c && e>=d && a<=e && e>=f){
                                            axios.post('https://fitness-game-server.herokuapp.com/creategroup', {
                                                email: route.params.email,
                                                goal: "5000"
                                            }).then((response) => {
                                                if(response.data !== 'Error occoured'){
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Players',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((response) => {
                                                        if(response.data === 'USer successfully joined the group!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            })
                                                        }
                                                        else{
                                                            alert('Error occoured');
                                                        }
                                                    })
                                                }
                                            }).catch((err) => {
                                                alert('Error occoured');
                                            })
                                        }
                                        else{
                                            axios.post('https://fitness-game-server.herokuapp.com/creategroup', {
                                                email: route.params.email,
                                                goal: "5000"
                                            }).then((response) => {
                                                if(response.data !== 'Error occoured'){
                                                    axios.post('https://fitness-game-server.herokuapp.com/adduser', {
                                                        name: name,
                                                        usertype: 'Disruptors',
                                                        grpid: grpid,
                                                        password: route.params.password,
                                                        email: route.params.email
                                                    }).then((response) => {
                                                        if(response.data === 'USer successfully joined the group!!'){
                                                            navigation.navigate('User', {
                                                                email: route.params.email
                                                            })
                                                        }
                                                        else{
                                                            alert('Error occoured');
                                                        }
                                                    })
                                                }
                                            }).catch((err) => {
                                                alert('Error occoured');
                                            })
                                        }
                                    }}>Create a group</Button>
                                </View>
                            </View>
                        </Card>
                    </ScrollView>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    viewcontainer: {
        width: "100%",
        height: "100%", backgroundColor: 'black',opacity: 0.5
    },
    card: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: 'white'
    },
    row: {
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        color:'white',
        flexDirection: 'column'
    },
    column: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        backgroundColor: 'transparent',
        width:'90%'
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
export default SignIn;