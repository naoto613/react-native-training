import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CardStyleInterpolators } from 'react-navigation-stack';
import firebase from 'firebase';
import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};
firebase.initializeApp(config);

const App = createStackNavigator({
  Signup:     { screen: SignupScreen },
  Login:      { screen: LoginScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
},
  {
    defaultNavigationOptions: {
      headerTitle: 'Memot',
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerBackTitle: null,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  });

export default createAppContainer(App);