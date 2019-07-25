import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogoHeader from '../components/logoHeader'
import { Badge, Icon, withBadge } from 'react-native-elements'
import ThirdLevel from './thirdLevel'
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator,
    NavigationScreenProp as navigation,
} from 'react-navigation';

import Chat from '../views/chat'
import Feed from '../views/feed';
import Explore from '../views/explore';
import Add from '../views/add';
import Notifications from '../views/notifications';
import Profile from '../views/profile';
import Loading from '../views/loading';
import SignUp from '../views/auth/signUp';
import Login from '../views/login'

class SecondLevel extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <ThirdLevel/>
        );
    }
}


const DrawerNavigator = createBottomTabNavigator(
    { feed: Feed, explore: Explore, add: Add, notifications: Notifications, profile: Profile
    }, { defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'profile'){
                    iconName = `md-person`;
                } else if (routeName === 'add') {
                    iconName = 'md-add'
                } else if (routeName === 'explore') {
                    iconName = 'md-search'
                } else if (routeName === 'notifications') {
                    iconName = 'md-notifications'
                } else if (routeName === 'feed') {
                    iconName = 'md-home'
                }

                return <IconComponent style = {{marginTop: 9}} name={iconName}  size={24} color={tintColor} />;
            },
            drawerBackgroundColor: "black"

        }),
        tabBarOptions: {
            activeTintColor: '#3678FF',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#353535',
            },

        },
    }
);

const BadgedIcon = withBadge(1)(Icon);

const AppStack = createStackNavigator(
    {
        main: DrawerNavigator,
        chat: Chat,

    }, {
        initialRouteName: "main",
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerTransparent: true,
            headerRight: (
                <View style = {{paddingRight: 20}}>
                {/*<BadgedIcon*/}
                {/*    badStyle*/}
                {/*    type="ionicon"*/}
                {/*    name="ios-chatbubbles"*/}
                {/*    color = '#3678FF'*/}
                {/*/>*/}
                </View>
            ),
        },
    });

const AuthStack = createStackNavigator({
    Login: Login,
    SignUp: SignUp
},{
    initialRouteName: "SignUp"
});

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: Loading,
        App: AppStack,
        Auth: AuthStack,
    }, {
        initialRouteName: "AuthLoading"
    }
));

export default AppContainer;

SecondLevel.propTypes = {};
