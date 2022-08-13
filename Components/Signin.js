import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import { Card, Menu, Button, Divider, Provider, List, TextInput } from 'react-native-paper';
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
                    <ImageBackground source={cyclist} resizeMode='contain' style={{height: '100%', backgroundColor:'black', opacity:0.99}}>
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
                                <Menu
                                    visible={visible1}
                                    onDismiss={() => setVisible1(!visible1)}
                                    anchor={<Button color='white' onPress={() => setVisible1(!visible1)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue1(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue1(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue1(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue1(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue1(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue1(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like to provoke</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible2}
                                    onDismiss={() => setVisible2(!visible2)}
                                    anchor={<Button color='white' onPress={() => setVisible2(!visible2)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue2(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue2(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue2(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue2(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue2(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue2(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> It is important to me to always carry out my tasks completely</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible3}
                                    onDismiss={() => setVisible3(!visible3)}
                                    anchor={<Button color='white' onPress={() => setVisible3(!visible3)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue3(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue3(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue3(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue3(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue3(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue3(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like mastering difficult tasks</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible4}
                                    onDismiss={() => setVisible4(!visible4)}
                                    anchor={<Button color='white' onPress={() => setVisible4(!visible4)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue4(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue4(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue4(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue4(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue4(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue4(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like competitions where a prize can be won.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible5}
                                    onDismiss={() => setVisible5(!visible5)}
                                    anchor={<Button color='white' onPress={() => setVisible5(!visible5)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue5(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue5(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue5(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue5(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue5(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue5(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> Interacting with others is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible6}
                                    onDismiss={() => setVisible6(!visible6)}
                                    anchor={<Button color='white' onPress={() => setVisible6(!visible6)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue6(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue6(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue6(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue6(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue6(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue6(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like to try new things.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible7}
                                    onDismiss={() => setVisible7(!visible7)}
                                    anchor={<Button color='white' onPress={() => setVisible7(!visible7)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue7(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue7(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue7(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue7(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue7(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue7(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>Being independent is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible8}
                                    onDismiss={() => setVisible8(!visible8)}
                                    anchor={<Button color='white' onPress={() => setVisible8(!visible8)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue8(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue8(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue8(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue8(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue8(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue8(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>Return of investment is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible9}
                                    onDismiss={() => setVisible9(!visible9)}
                                    anchor={<Button color='white' onPress={() => setVisible9(!visible9)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue9(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue9(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue9(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue9(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue9(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue9(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> Rewards are a great way to motivate me</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible10}
                                    onDismiss={() => setVisible10(!visible10)}
                                    anchor={<Button color='white' onPress={() => setVisible10(!visible10)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue10(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue10(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue10(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue10(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue10(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue10(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I see myself as a rebel.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible11}
                                    onDismiss={() => setVisible11(!visible11)}
                                    anchor={<Button color='white' onPress={() => setVisible11(!visible11)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue11(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue11(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue11(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue11(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue11(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue11(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> It is important to me to feel like I am part of a community.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible12}
                                    onDismiss={() => setVisible12(!visible12)}
                                    anchor={<Button color='white' onPress={() => setVisible12(!visible12)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue12(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue12(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue12(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue12(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue12(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue12(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>It is difficult for me to let go of a problem before I have found a solution</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible13}
                                    onDismiss={() => setVisible13(!visible13)}
                                    anchor={<Button color='white' onPress={() => setVisible13(!visible13)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue13(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue13(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue13(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue13(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue13(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue13(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>If the reward is enough I will put in the effort.</Text>
                                </View>
                                <View style={styles.column}>
                                    <Menu
                                        visible={visible14}
                                        onDismiss={() => setVisible14(!visible14)}
                                        anchor={<Button color='white' onPress={() => setVisible14(!visible14)}>Show menu</Button>}>
                                        <Menu.Item onPress={() => {setQue14(1)}} title="Strongly Disagree" />
                                        <Menu.Item onPress={() => {setQue14(2)}} title="Disagree" />
                                        <Menu.Item onPress={() => {setQue14(3)}} title="Neither" />
                                        <Menu.Item onPress={() => {setQue14(4)}} title="Somewhat Agree" />
                                        <Menu.Item onPress={() => {setQue14(5)}} title="Agree" />
                                        <Menu.Item onPress={() => {setQue14(6)}} title="Strongly Agree" />
                                    </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> I like overcoming obstacles.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible15}
                                    onDismiss={() => setVisible15(!visible15)}
                                    anchor={<Button color='white' onPress={() => setVisible15(!visible15)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue15(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue15(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue15(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue15(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue15(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue15(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>It makes me happy if I am able to help others</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible16}
                                    onDismiss={() => setVisible16(!visible16)}
                                    anchor={<Button color='white' onPress={() => setVisible16(!visible16)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue16(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue16(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue16(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue16(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue16(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue16(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like helping others to orient themselves in new situations.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible17}
                                    onDismiss={() => setVisible17(!visible17)}
                                    anchor={<Button color='white' onPress={() => setVisible17(!visible17)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue17(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue17(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue17(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue17(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue17(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue17(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like being part of a team</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible18}
                                    onDismiss={() => setVisible18(!visible18)}
                                    anchor={<Button color='white' onPress={() => setVisible18(!visible18)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue18(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue18(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue18(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue18(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue18(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue18(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like sharing my knowledge.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible19}
                                    onDismiss={() => setVisible19(!visible19)}
                                    anchor={<Button color='white' onPress={() => setVisible19(!visible19)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue19(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue19(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue19(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue19(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue19(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue19(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I enjoy group activities.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible20}
                                    onDismiss={() => setVisible20(!visible20)}
                                    anchor={<Button color='white' onPress={() => setVisible20(!visible20)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue20(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue20(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue20(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue20(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue20(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue20(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I like to question the status quo.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible21}
                                    onDismiss={() => setVisible21(!visible21)}
                                    anchor={<Button color='white' onPress={() => setVisible21(!visible21)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue21(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue21(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue21(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue21(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue21(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue21(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}> It is important to me to follow my own path.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible22}
                                    onDismiss={() => setVisible22(!visible22)}
                                    anchor={<Button color='white' onPress={() => setVisible22(!visible22)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue22(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue22(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue22(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue22(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue22(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue22(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>The wellbeing of others is important to me.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible23}
                                    onDismiss={() => setVisible23(!visible23)}
                                    anchor={<Button color='white' onPress={() => setVisible23(!visible23)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue23(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue23(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue23(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue23(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue23(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue23(6)}} title="Strongly Agree" />
                                </Menu>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={{color: 'white', fontSize:25}}>I often let my curiosity guide me.</Text>
                                </View>
                                <View style={styles.column}>
                                <Menu
                                    visible={visible24}
                                    onDismiss={() => setVisible24(!visible24)}
                                    anchor={<Button color='white' onPress={() => setVisible24(!visible24)}>Show menu</Button>}>
                                    <Menu.Item onPress={() => {setQue24(1)}} title="Strongly Disagree" />
                                    <Menu.Item onPress={() => {setQue24(2)}} title="Disagree" />
                                    <Menu.Item onPress={() => {setQue24(3)}} title="Neither" />
                                    <Menu.Item onPress={() => {setQue24(4)}} title="Somewhat Agree" />
                                    <Menu.Item onPress={() => {setQue24(5)}} title="Agree" />
                                    <Menu.Item onPress={() => {setQue24(6)}} title="Strongly Agree" />
                                </Menu>
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
                                                        name: name,
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
                                                    alert('Error occoured');
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
                    </ImageBackground>
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