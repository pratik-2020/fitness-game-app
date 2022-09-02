import { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, LatLng, Marker} from 'react-native-maps';
import { Card, Button } from 'react-native-paper';
import axios from 'axios';
import Mpmarker from '../assets/mpmarker.jpg';
import { Constants } from 'expo-constants';
import BottomNavigation from './BottomNavigation';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
export default function LevelPage({ route, navigation }) {
  const [grpData, setGrpData] = useState({});
  const [mrkorg, setMrkorg] = useState(false);
  const [chk1, setMrkchk1] = useState(false);
  const [chk2, setMrkchk2] = useState(false);
  const [chk3, setMrkchk3] = useState(false);
  const [mrkdst, setMrkdst] = useState(false);
  useEffect(() => {
    axios.post('https://fitness-game-server.herokuapp.com/retgrpdata', {
      grpid: route.params.grpid
    }).then((response) => {
      console.log(response.data[0]);
      setGrpData(response.data[0]);
      if(response.data[0].currentLevel === "0"){
        console.log('Yel1');
        setMrkorg(true);
      }
      else if(response.data[0].currentLevel === "1"){
        setMrkchk1(true);
      }
      else if(response.data[0].currentLevel === "2"){
        setMrkchk2(true);
      }
      else if(response.data[0].currentLevel === "3"){
        setMrkchk3(true);
      }
      else if(response.data[0].currentLevel === "4"){
        console.log('Yel4')
        setMrkdst(true);
        console.log(mrkdst);
      }
    }).catch((er) => {
      alert(er.message);
    });
    console.log(grpData);
  },[]);
  const renderLvl = () => {
    if(mrkorg){
      return(
        <View>
          <Marker coordinate={{longitude:-63.594231, latitude:44.634794}} pinColor={() => {'green'}} />
              <Marker coordinate={{longitude:-63.591197, latitude:44.637397}} pinColor={() => {chk1 ? 'green':'red'}} />
              <Marker coordinate={{latitude: 44.635875, longitude: -63.592974}} pinColor={() => {chk2 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.587209, latitude:44.637425}} pinColor={() => {chk3 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.590626, latitude:44.638978}} pinColor={mrkdst ? 'green':'red'} />
        </View>
      );
    }
    else if(mrkdst){
      return(
        <View>
          <Marker coordinate={{longitude:-63.594231, latitude:44.634794}} pinColor={() => {mrkorg ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.591197, latitude:44.637397}} pinColor={() => {chk1 ? 'green':'red'}} />
              <Marker coordinate={{latitude: 44.635875, longitude: -63.592974}} pinColor={() => {chk2 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.587209, latitude:44.637425}} pinColor={() => {chk3 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.590626, latitude:44.638978}} pinColor={'green'} />
        </View>
      );
    }
    else if(chk1){
      return(
        <View>
          <Marker coordinate={{longitude:-63.594231, latitude:44.634794}} pinColor={() => {mrkorg ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.591197, latitude:44.637397}} pinColor={() => {'green'}} />
              <Marker coordinate={{latitude: 44.635875, longitude: -63.592974}} pinColor={() => {chk2 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.587209, latitude:44.637425}} pinColor={() => {chk3 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.590626, latitude:44.638978}} pinColor={'green'} />
        </View>
      );
    }
    else if(chk2){
      return(
        <View>
          <Marker coordinate={{longitude:-63.594231, latitude:44.634794}} pinColor={() => {mrkorg ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.591197, latitude:44.637397}} pinColor={() => {chk1 ? 'green':'red'}} />
              <Marker coordinate={{latitude: 44.635875, longitude: -63.592974}} pinColor={() => {'green'}} />
              <Marker coordinate={{longitude:-63.587209, latitude:44.637425}} pinColor={() => {chk3 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.590626, latitude:44.638978}} pinColor={'green'} />
        </View>
      );
    }
    else if(chk3){
      return(
        <View>
          <Marker coordinate={{longitude:-63.594231, latitude:44.634794}} pinColor={() => {mrkorg ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.591197, latitude:44.637397}} pinColor={() => {chk1 ? 'green':'red'}} />
              <Marker coordinate={{latitude: 44.635875, longitude: -63.592974}} pinColor={() => {chk2 ? 'green':'red'}} />
              <Marker coordinate={{longitude:-63.587209, latitude:44.637425}} pinColor={() => {'green'}} />
              <Marker coordinate={{longitude:-63.590626, latitude:44.638978}} pinColor={'green'} />
        </View>
      );
    }
  }
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = 0.02;
  const INITIAL_POSITION = {
    latitude: 40.767110,
    longitude: -73.979704,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  };
  console.log('hel1'+mrkdst)
  return (
    <SafeAreaView style={styles.cnt}>
      <View style={{width: '100%', height:'100%'}}>
        <View style={styles.row1}>
          <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white'}}>FitTrack</Text>
        </View>
        <View style={styles.row}>
          <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={{
            longitude:-63.594231, latitude:44.634794, latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            {renderLvl()}
            {/* <MapViewDirections origin={org} destination={dest} apikey={gg} /> */}
          </MapView>
          {/* <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: gg,
              language: 'en'
            }}
          /> */}
        </View>
        <View></View>
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    cnt: {
      backgroundColor: "transparent"
    },
    map: {
      marginTop: 0,
      width: '100%',
      height: '80%',
      overflow:'scroll',
      
    },
    row: {
      flexDirection: 'column',
      marginBottom:0,
      marginTop:0,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 50
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
  });
