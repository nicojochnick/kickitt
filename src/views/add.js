import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {viewStyles} from './viewTheme'
import {Text, View, FlatList} from 'react-native';
import TrendingBoard from '../components/trendingBoard';
import UserTopActivities from '../components/userTopActivities';
import FriendBoard from '../components/friendBoard';

class Add extends Component {
    render() {
        return (
            <View style = {viewStyles.backgroundMainGlobal}>
                <View style = {{flex: 0.35,  backgroundColor: '#3678FF',}}>
                    <Text style = {{color: "white", fontWeight: "bold", fontSize: 20, padding:10}}> Friends </Text>
                    <FriendBoard/>
                </View>
                <View style = {{flex: 0.45}}>
                    <Text style = {{color: '#3678FF', fontWeight: "bold", fontSize: 20, padding:10}}> Activities </Text>
                    <UserTopActivities/>
                </View>
                <View style = {{flex: 0.2,backgroundColor: 'white'}}>

                </View>
            </View>


        );
    }
}

Add.propTypes = {};

export default Add;
