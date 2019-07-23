import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {viewStyles} from './viewTheme';
import ChatBoard from '../components/chatBoard';


class Chat extends Component {
    render() {
        return (
            <View style = {viewStyles.backgroundMainGlobal}>
                <ChatBoard/>
            </View>
        );
    }
}

Chat.propTypes = {};

export default Chat;
