import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import LevelPage from './Components/LevelPage';
import Login from './Components/Login';
import OtpVerification from './Components/OtpVerification';
import OtpGeneration from './Components/OtpGeneration';
import LeaderBoard from './Components/LeaderBoard';
import GroupDashboard from './Components/GroupDashboard';
import ForgotPassVerification from './Components/ForgotPassVerification';
import ForgotPassword from './Components/ForgotPassword';
import NewPassword from './Components/NewPassword';
import SignIn from './Components/Signin';
import Garden from './Components/Garden';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNavigation from './Components/BottomNavigation';
import Notifications from './Components/Notifications';
import UserDashboard from './Components/UserDashboard';
import Welcome from './Components/Welcome';
import Voting from './Components/Voting';
import Feature from './Components/Feature';
import Setcustom from './Components/SetCustom';
import Earnatrophy from './Components/Earnatrophy';
import Lottery from './Components/Lottery';
import Grocerystore from './Components/Grocerystore';
import Buyitem from './Components/Buyitem';
import PlayerDetails from './Components/PlayerDetails';
import Updatestepspoints from './Components/UpdateStepsPoints';
import Groupvote from './Components/Groupvote';
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <View style={styles.cnt}>
        <NavigationContainer>
          <stack.Navigator initialRouteName='Wel' screenOptions={{headerShown: false}}>
            <stack.Screen name = 'Login' component={Login} />
            <stack.Screen name = 'LeaderBoard' component={LeaderBoard} />
            <stack.Screen name = 'OtpVer' component={OtpVerification} />
            <stack.Screen name = 'OtpGen' component={OtpGeneration} /> 
            <stack.Screen name = 'GroupDash' component={GroupDashboard} />
            <stack.Screen name = 'ForgotPass' component={ForgotPassword} />
            <stack.Screen name = 'ForgotPassVer' component={ForgotPassVerification} />
            <stack.Screen name = 'NewPass' component={NewPassword} />
            <stack.Screen name = 'LevelPage' component={LevelPage} />
            <stack.Screen name = 'Signin' component={SignIn} />
            <stack.Screen name = 'Bottom' component={BottomNavigation} />
            <stack.Screen name = 'Notification' component={Notifications} />
            <stack.Screen name = 'User' component={UserDashboard} />
            <stack.Screen name = 'Wel' component={Welcome} />
            <stack.Screen name = 'Vote' component={Voting} />
            <stack.Screen name = 'Feature' component={Feature} />
            <stack.Screen name = 'Setcust' component={Setcustom} />
            <stack.Screen name = 'Earn' component={Earnatrophy} />
            <stack.Screen name = 'Grocery' component={Grocerystore} />
            <stack.Screen name = 'Lottery' component={Lottery} />
            <stack.Screen name = 'Buy' component={Buyitem} />
            <stack.Screen name = 'Garden' component={Garden} />
            <stack.Screen name = 'Player' component={PlayerDetails} />
            <stack.Screen name = 'Update' component={Updatestepspoints} />
            <stack.Screen name = 'Groupvote' component={Groupvote} />
          </stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  cnt: {
    flex: 1,
    marginTop: "7%",
    // backgroundColor: "transparent"
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1
  },
  text: {
    color: 'white',
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardcnt: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row"
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
    marginLeft: 2,
    marginTop: 20,
    width: 300,
    height: 100,
    shadowColor: "black",
    elevation: 30,
    backgroundColor: "#E8B016",
    textAlign: "center"
  },
  headingcnt:{
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center"
  }
});
//dark green, forst


//login
//signin
//otpgen
//otpver
//forgotpass
//forgotpassver
//newpass
