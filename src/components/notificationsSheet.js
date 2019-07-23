import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-native-elements';
import {Text} from 'react-native';

class NotificationsSheet extends Component {
    render() {
        return (
            <Card style = {{flex:1}}>
                <Text> Notification </Text>
            </Card>
        );
    }
}

NotificationsSheet.propTypes = {};

export default NotificationsSheet;
