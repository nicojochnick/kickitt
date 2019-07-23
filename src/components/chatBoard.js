import React, {Component} from 'react';
import {Text} from 'react-native'
import {Card} from 'react-native-elements'
import PropTypes from 'prop-types';

class ChatBoard extends Component {
    render() {
        return (
            <Card style = {{flex:1}}>
                <Text> hey there</Text>

            </Card>
        );
    }
}

ChatBoard.propTypes = {};

export default ChatBoard;
