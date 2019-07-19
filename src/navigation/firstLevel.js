import React from "react";
import {View} from "react-native"
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Feed from '../views/feed';
import Explore from '../views/explore';
import Add from '../views/add';
import Notifications from '../views/notifications';
import Profile from '../views/profile';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class FirstLevel extends React.Component {

    render( ) {
        return (

                <AppContainer/>

        );
    }
}

const AppNavigator = createBottomTabNavigator(
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
            activeTintColor: 'dodgerblue',
            inactiveTintColor: 'gray',
        },
    }
);

const AppContainer =  createAppContainer(AppNavigator);
