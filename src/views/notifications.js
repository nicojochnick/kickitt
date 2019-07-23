import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {viewStyles} from './viewTheme';
import NotificationsSheet from '../components/notificationsSheet';


class Notifications extends Component {
    render() {
        return (
            <View style = {viewStyles.backgroundMainGlobal}>
                <NotificationsSheet/>
            </View>
        );
    }
}

Notifications.propTypes = {};

export default Notifications;
