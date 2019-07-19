import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThirdLevel from './thirdLevel'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Chat from '../views/chat'
import Feed from '../views/feed';
import Explore from '../views/explore';
import Add from '../views/add';
import Notifications from '../views/notifications';
import Profile from '../views/profile';

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
        }),
        tabBarOptions: {
            activeTintColor: '#3678FF',
            inactiveTintColor: 'gray',
        },
    }
);

const AppNavigator = createStackNavigator(
    {
        main: DrawerNavigator,
        chat: Chat
    }, {
        initialRouteName: "main",
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            title: 'Kickitt',
            headerTintColor: '#3678FF',
            headerStyle: {
                backgroundColor: 'white',
            },
            headerRight: (
                <Button
                    icon = {
                        <Ionicons
                        name="ios-chatbubbles"
                        size={30}
                        color="#3678FF"
                        />
                    }
                    onPress={() => console.log("press")}
                    type="clear"

                />
            ),
        },
    });









const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

SecondLevel.propTypes = {};