import React, {Component} from 'react';
import {View} from 'react-native'
import PropTypes from 'prop-types';
import {Input} from 'react-native-elements';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Input/>
            </View>
        );
    }
}

SignIn.propTypes = {};

export default SignIn;
