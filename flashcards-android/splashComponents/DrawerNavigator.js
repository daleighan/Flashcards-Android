import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash from './Splash';
import DeckManager from './DeckManager';

const RootDrawer = DrawerNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      drawerLabel: 'Splash',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  DeckManager: {
    screen: DeckManager,
    navigationOptions: {
      drawerLabel: 'Deck Manager',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootDrawer;
