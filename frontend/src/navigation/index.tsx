import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButton, Text } from '@react-navigation/elements';
import { home } from './screens/home';
import { profile } from './screens/profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import { logIn } from './screens/logIn';
import { register } from './screens/register';

const RootStack = createNativeStackNavigator({
  screens: {
    home: {
      screen: home,
      options: {
        title: 'Home',
        headerShown: false, // Hide header for Home screen
      },
    },
    Updates: {
      screen: Updates,
      options: {
        headerShown: false, // Hide header for Updates screen
      },
    },
    profile: {
      screen: profile,
      options: {
        title: 'Profile',
        headerShown: false,
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false, // Hide header for Settings screen
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
        headerShown: false, // Hide header for NotFound screen
      },
      linking: {
        path: '*',
      },
    },

    logIn: {
      screen: logIn,
      options: {
        title: 'Log In',
        headerShown: false,
      },
    },

    register: {
      screen: register,
      options: {
        title: 'Register',
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}