import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, ImageBackground } from 'react-native';
import { Button, Card } from 'react-native-paper';
import tr1 from '../assets/tr1.png';
import tr100 from '../assets/100%.jpg';
import tr90 from '../assets/90%.jpg';
import tr80 from '../assets/80%.jpg';
import tr70 from '../assets/70%.jpg';
import tr60 from '../assets/60%.jpg';
import tr50 from '../assets/50%.jpg';
import tr40 from '../assets/40%.jpg';
import tr30 from '../assets/30%.jpg';
import tr10 from '../assets/20%.jpg';
import plt100 from '../assets/100.jpg';
import plt90 from '../assets/90.jpg';
import plt80 from '../assets/80.jpg';
import plt70 from '../assets/70.jpg';
import plt60 from '../assets/60.jpg';
import plt50 from '../assets/50.jpg';
import plt40 from '../assets/40.jpg';
import plt30 from '../assets/30.jpg';
import plt20 from '../assets/20.jpg';
import plt10 from '../assets/10.jpg';
import hou90 from '../assets/#90.jpg';
import hou80 from '../assets/#80.jpg';
import hou70 from '../assets/#70.jpg';
import hou60 from '../assets/#60.jpg';
import hou50 from '../assets/#50.jpg';
import hou40 from '../assets/#40.jpg';
import hou30 from '../assets/#30.jpg';
import hou20 from '../assets/#20.jpg';
import hou10 from '../assets/#10.jpg';
import axios from 'axios';
function Garden({ route, navigation }){
    const [garden, setGarden] = useState({});
    const[col11, setCol11] = useState("#955E1B");
    const[col12, setCol12] = useState("#955E1B");
    const[col13, setCol13] = useState("#955E1B");
    const[col14, setCol14] = useState("#955E1B");
    const[col15, setCol15] = useState("#955E1B");
    const[col16, setCol16] = useState("#955E1B");
    const[col21, setCol21] = useState("#955E1B");
    const[col22, setCol22] = useState("#955E1B");
    const[col23, setCol23] = useState("#955E1B");
    const[col24, setCol24] = useState("#955E1B");
    const[col25, setCol25] = useState("#955E1B");
    const[col26, setCol26] = useState("#955E1B");
    const[col31, setCol31] = useState("#955E1B");
    const[col32, setCol32] = useState("#955E1B");
    const[col33, setCol33] = useState("#955E1B");
    const[col34, setCol34] = useState("#955E1B");
    const[col35, setCol35] = useState("#955E1B");
    const[col36, setCol36] = useState("#955E1B");
    const[col41, setCol41] = useState("#955E1B");
    const[col42, setCol42] = useState("#955E1B");
    const[col43, setCol43] = useState("#955E1B");
    const[col44, setCol44] = useState("#955E1B");
    const[col45, setCol45] = useState("#955E1B");
    const[col46, setCol46] = useState("#955E1B");
    const[col51, setCol51] = useState("#955E1B");
    const[col52, setCol52] = useState("#955E1B");
    const[col53, setCol53] = useState("#955E1B");
    const[col54, setCol54] = useState("#955E1B");
    const[col55, setCol55] = useState("#955E1B");
    const[col56, setCol56] = useState("#955E1B");
    const[col61, setCol61] = useState("#955E1B");
    const[col62, setCol62] = useState("#955E1B");
    const[col63, setCol63] = useState("#955E1B");
    const[col64, setCol64] = useState("#955E1B");
    const[col65, setCol65] = useState("#955E1B");
    const[col66, setCol66] = useState("#955E1B");
    const[col71, setCol71] = useState("#955E1B");
    const[col72, setCol72] = useState("#955E1B");
    const[col73, setCol73] = useState("#955E1B");
    const[col74, setCol74] = useState("#955E1B");
    const[col75, setCol75] = useState("#955E1B");
    const[col76, setCol76] = useState("#955E1B");
    const[col81, setCol81] = useState("#955E1B");
    const[col82, setCol82] = useState("#955E1B");
    const[col83, setCol83] = useState("#955E1B");
    const[col84, setCol84] = useState("#955E1B");
    const[col85, setCol85] = useState("#955E1B");
    const[col86, setCol86] = useState("#955E1B");
    const[col91, setCol91] = useState("#955E1B");
    const[col92, setCol92] = useState("#955E1B");
    const[col93, setCol93] = useState("#955E1B");
    const[col94, setCol94] = useState("#955E1B");
    const[col95, setCol95] = useState("#955E1B");
    const[col96, setCol96] = useState("#955E1B");
    const[col101, setCol101] = useState("#955E1B");
    const[col102, setCol102] = useState("#955E1B");
    const[col103, setCol103] = useState("#955E1B");
    const[col104, setCol104] = useState("#955E1B");
    const[col105, setCol105] = useState("#955E1B");
    const[col106, setCol106] = useState("#955E1B");
    const[col111, setCol111] = useState("#955E1B");
    const[col112, setCol112] = useState("#955E1B");
    const[col113, setCol113] = useState("#955E1B");
    const[col114, setCol114] = useState("#955E1B");
    const[col115, setCol115] = useState("#955E1B");
    const[col116, setCol116] = useState("#955E1B");
    const[col121, setCol121] = useState("#955E1B");
    const[col122, setCol122] = useState("#955E1B");
    const[col123, setCol123] = useState("#955E1B");
    const[col124, setCol124] = useState("#955E1B");
    const[col125, setCol125] = useState("#955E1B");
    const[col126, setCol126] = useState("#955E1B");
    const[col131, setCol131] = useState("#955E1B");
    const[col132, setCol132] = useState("#955E1B");
    const[col133, setCol133] = useState("#955E1B");
    const[col134, setCol134] = useState("#955E1B");
    const[col135, setCol135] = useState("#955E1B");
    const[col136, setCol136] = useState("#955E1B");
    useEffect(() => {
        axios.post('https://fitness-game-server.herokuapp.com/retgarden', {
            grpid:route.params.grpid
        }).then((response) => {
            setGarden(response.data[0]);
            if(response.data[0].tree >0 && response.data[0].tree <= 100){
                setCol22('green');
            }
            else if(response.data[0].tree > 100 && response.data[0].tree <= 1000){
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 1000 && response.data[0].tree <= 10000){
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 10000 && response.data[0].tree <= 100000){
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 100000 && response.data[0].tree <= 1000000){
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 1000000 && response.data[0].tree <= 10000000){
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 10000000 && response.data[0].tree <= 100000000){
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 100000000 && response.data[0].tree <= 1000000000){
                setCol73('green');
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 1000000000 && response.data[0].tree <= 10000000000){
                setCol74('green');
                setCol73('green');
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 10000000000 && response.data[0].tree <= 100000000000){
                setCol75('green');
                setCol74('green');
                setCol73('green');
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 100000000000 && response.data[0].tree <= 1000000000000){
                setCol114('green');
                setCol75('green');
                setCol74('green');
                setCol73('green');
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 1000000000000 && response.data[0].tree <= 10000000000000){
                setCol115('green');
                setCol114('green');
                setCol75('green');
                setCol74('green');
                setCol73('green');
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 10000000000000 && response.data[0].tree <= 100000000000000){
                setCol124('green');
                setCol115('green');
                setCol114('green');
                setCol75('green');
                setCol74('green');
                setCol73('green');
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            else if(response.data[0].tree > 100000000000000){
                setCol125('green');
                setCol124('green');
                setCol115('green');
                setCol114('green');
                setCol75('green');
                setCol74('green');
                setCol73('green');
                setCol72('green');
                setCol63('green');
                setCol62('green');
                setCol53('green');
                setCol52('green');
                setCol23('green');
                setCol22('green');
            }
            if(response.data[0].house <= 10000){
                setCol54('purple');
            }
            else{
                setCol54('purple');
                setCol55('purple');
            }
            if(response.data[0].flower > 0 && response.data[0].flower <= 100){
                setCol11('purple');
            }
            else if(response.data[0].flower > 100 && response.data[0].flower <= 1000){
                setCol11('purple');
                setCol12('red');
            }
            else if(response.data[0].flower > 1000 && response.data[0].flower <= 10000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
            }
            else if(response.data[0].flower > 10000 && response.data[0].flower <= 100000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
                setCol16('white');
            }
            else if(response.data[0].flower > 100000 && response.data[0].flower <= 1000000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
                setCol16('white');
            }
            else if(response.data[0].flower > 1000000 && response.data[0].flower <= 10000000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
                setCol16('white');
                setCol21('white');
            }
            else if(response.data[0].flower > 10000000 && response.data[0].flower <= 100000000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
                setCol16('white');
                setCol21('white');
                setCol26('red');
                setCol31('blue');
            }
            else if(response.data[0].flower > 100000000 && response.data[0].flower <= 1000000000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
                setCol16('white');
                setCol21('white');
                setCol26('red');
                setCol31('blue');
                setCol36('orange');
                setCol41('blue');
                setCol46('blue');
                setCol51('orange');
                setCol56('blue');
                setCol61('purple');
                setCol66('purple');
                setCol71('purple');
                setCol76('purple');
            }
            else if(response.data[0].flower > 1000000000 && response.data[0].flower <= 10000000000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
                setCol16('white');
                setCol21('white');
                setCol26('red');
                setCol31('blue');
                setCol36('orange');
                setCol41('blue');
                setCol46('blue');
                setCol51('orange');
                setCol56('blue');
                setCol61('purple');
                setCol66('purple');
                setCol71('purple');
                setCol76('purple');
                setCol81('red');
                setCol86('red');
                setCol91('red');
                setCol96('red');
                setCol101('blue');
                setCol106('orange');
            }
            else if(response.data[0].flower > 10000000000){
                setCol11('purple');
                setCol12('red');
                setCol13('red');
                setCol14('orange');
                setCol15('white');
                setCol16('white');
                setCol21('white');
                setCol26('red');
                setCol31('blue');
                setCol36('orange');
                setCol41('blue');
                setCol46('blue');
                setCol51('orange');
                setCol56('blue');
                setCol61('purple');
                setCol66('purple');
                setCol71('purple');
                setCol76('purple');
                setCol81('red');
                setCol86('red');
                setCol91('red');
                setCol96('red');
                setCol101('blue');
                setCol106('orange');
                setCol111('orange');
                setCol116('blue');
                setCol121('white');
                setCol126('white');
                setCol131('orange');
                setCol132('yellow');
                setCol133('white');
                setCol134('red');
                setCol135('blue');
                setCol136('purple');
            }
            if(response.data[0].largeplant > 0 && response.data[0].largeplant <= 100){
                setCol25('green');
            }
            else if(response.data[0].largeplant > 100 && response.data[0].largeplant <= 1000){
                setCol25('green');
                setCol32('green');
            }
            else if(response.data[0].largeplant > 1000 && response.data[0].largeplant <= 10000){
                setCol25('green');
                setCol32('green');
                setCol34('green');
            }
            else if(response.data[0].largeplant > 10000 && response.data[0].largeplant <= 100000){
                setCol25('green');
                setCol32('green');
                setCol34('green');
                setCol35('green');
            }
            else if(response.data[0].largeplant > 100000 && response.data[0].largeplant <= 1000000){
                setCol25('green');
                setCol32('green');
                setCol34('green');
                setCol35('green');
                setCol42('green');
            }
            else if(response.data[0].largeplant > 1000000 && response.data[0].largeplant <= 10000000){
                setCol25('green');
                setCol32('green');
                setCol34('green');
                setCol35('green');
                setCol42('green');
                setCol43('green');
            }
            else if(response.data[0].largeplant > 10000000 && response.data[0].largeplant <= 100000000 ){
                setCol25('green');
                setCol32('green');
                setCol34('green');
                setCol35('green');
                setCol42('green');
                setCol43('green');
                setCol44('green');
            }
            else if(response.data[0].largeplant > 100000000){
                setCol25('green');
                setCol32('green');
                setCol34('green');
                setCol35('green');
                setCol42('green');
                setCol43('green');
                setCol44('green');
                setCol45('green');
            }
            if(response.data[0].smallplant > 0 && response.data[0].smallplant <= 100){
                setCol24('orange');
            }
            else if(response.data[0].smallplant > 100 && response.data[0].smallplant <= 1000){
                setCol24('orange');
                setCol33('orange');
            }
            else if(response.data[0].smallplant > 1000 && response.data[0].smallplant <= 10000){
                setCol24('orange');
                setCol33('orange');
                setCol82('orange');
            }
            else if(response.data[0].smallplant > 10000 && response.data[0].smallplant <= 100000){
                setCol24('orange');
                setCol33('orange');
                setCol82('orange');
                setCol85('orange');
            }
            else if(response.data[0].smallplant > 100000 && response.data[0].smallplant <= 1000000){
                setCol24('orange');
                setCol33('orange');
                setCol82('orange');
                setCol85('orange');
                setCol94('orange');
            }
            else if(response.data[0].smallplant > 1000000 && response.data[0].smallplant <= 1000000){
                setCol24('orange');
                setCol33('orange');
                setCol82('orange');
                setCol85('orange');
                setCol94('orange');
                setCol102('orange');
            }
            else if(response.data[0].smallplant > 10000000 && response.data[0].smallplant <= 10000000){
                setCol24('orange');
                setCol33('orange');
                setCol82('orange');
                setCol85('orange');
                setCol94('orange');
                setCol102('orange');
                setCol103('orange');
            }
            else if(response.data[0].smallplant > 100000000 && response.data[0].smallplant <= 100000000){
                setCol24('orange');
                setCol33('orange');
                setCol82('orange');
                setCol85('orange');
                setCol94('orange');
                setCol102('orange');
                setCol103('orange');
                setCol112('orange');
                setCol113('orange');
            }
            if(response.data[0].mediumplant > 0 && response.data[0].mediumplant <= 100){
                setCol64('yellow');
            }
            else if(response.data[0].mediumplant > 100 && response.data[0].mediumplant <= 1000){
                setCol64('yellow');
                setCol65('yellow');
            }
            else if(response.data[0].mediumplant > 1000 && response.data[0].mediumplant <= 10000){
                setCol64('yellow');
                setCol65('yellow');
                setCol83('yellow');
                setCol84('yellow');
            }
            else if(response.data[0].mediumplant > 10000 && response.data[0].mediumplant <= 100000){
                setCol64('yellow');
                setCol65('yellow');
                setCol83('yellow');
                setCol84('yellow');
                setCol92('yellow');
            }
            else if(response.data[0].mediumplant > 100000 && response.data[0].mediumplant <= 1000000){
                setCol64('yellow');
                setCol65('yellow');
                setCol83('yellow');
                setCol84('yellow');
                setCol92('yellow');
                setCol93('yellow');
            }
            else if(response.data[0].mediumplant > 1000000 && response.data[0].mediumplant <= 10000000){
                setCol64('yellow');
                setCol65('yellow');
                setCol83('yellow');
                setCol84('yellow');
                setCol92('yellow');
                setCol93('yellow');
                setCol95('yellow');
            }
            else if(response.data[0].mediumplant > 10000000 && response.data[0].mediumplant <= 100000000){
                setCol64('yellow');
                setCol65('yellow');
                setCol83('yellow');
                setCol84('yellow');
                setCol92('yellow');
                setCol93('yellow');
                setCol95('yellow');
                setCol102('yellow');
            }
            else if(response.data[0].mediumplant > 100000000 && response.data[0].mediumplant <= 1000000000){
                setCol64('yellow');
                setCol65('yellow');
                setCol83('yellow');
                setCol84('yellow');
                setCol92('yellow');
                setCol93('yellow');
                setCol95('yellow');
                setCol102('yellow');
                setCol103('yellow');
            }
            else if(response.data[0].mediumplant > 1000000000){
                setCol64('yellow');
                setCol65('yellow');
                setCol83('yellow');
                setCol84('yellow');
                setCol92('yellow');
                setCol93('yellow');
                setCol95('yellow');
                setCol102('yellow');
                setCol103('yellow');
                setCol104('yellow');
                setCol105('yellow');
            }
        }).catch((err) => {
            alert(err.message);
        })
    }, [])
    return(
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={{fontSize: 50, alignContent:'center', alignSelf:'center', color:'white', backgroundColor:'green'}}>ExerQuest</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', opacity:0.5, backgroundColor:'black'}}>
                <Text style={{color:'white', backgroundColor:'green', fontSize:40, width:'100%', textAlign:'center'}}>Garden</Text>
            </View>
                    <View style={{flexDirection:'column', backgroundColor:'#955E1B', marginTop:'1%', marginTop:10, marginLeft:10, marginRight:10, borderColor:'#86350E', borderWidth:4}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'}color={col11}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col12}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col13}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col14}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col15}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col16}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col21}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col22}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col23}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col24}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col25}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col26}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col31}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col32}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col33}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col34}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col35}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col36}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col41}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col42}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col43}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col44}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col45}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col46}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col51}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col52}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col53}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'home'} color={col54}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'home'} color={col55}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col56}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col61}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col62}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col63}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col64}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col65}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col66}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col71}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col72}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col73}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col74}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col75}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col76}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col81}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col82}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col83}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col84}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col85}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col86}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col91}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col92}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col93}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col94}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col95}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col96}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col101}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col102}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col103}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col104}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'barley'} color={col105}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col106}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col111}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col112}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col113}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col114}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col115}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col116}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col121}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col122}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'fleur-de-lis'} color={col123}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col124}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'tree'} color={col125}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col126}></Button>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col131}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col132}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col133}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col134}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col135}></Button>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Button icon={'flower'} color={col136}></Button>
                                </View>
                            </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', width:'30%', marginTop:5, marginLeft:5, marginRight:5, backgroundColor:'#955E1B'}}>
                            <Button style={{width:'100%', backgroundColor:'#955E1B'}} icon={'seed'} labelStyle={{fontSize:30}} color='#6A0101'></Button>
                            <Text style={{fontSize:20}}>0</Text>
                        </View>
                        <View style={{flexDirection:'column', width:'30%', justifyContent:'center', alignItems:'center', marginTop:5, marginLeft:5, marginRight:5, backgroundColor:'#955E1B'}}>
                            <Button style={{width:'100%'}} icon={'bottle-soda'} color='#E6E6E6' labelStyle={{fontSize:30}}></Button>
                            <Text style={{fontSize:20}}>0</Text>
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:5, marginLeft:5, marginRight:5, width:'30%', backgroundColor:'#955E1B'}}>
                            <Button style={{width:'100%'}} icon={'bag-suitcase'} color='#F24726' labelStyle={{fontSize:30}}></Button>
                            <Text style={{fontSize:20}}>0</Text>
                        </View>
                    </View>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height: '100%',
        backgroundColor:'green'
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
})

export default Garden;
