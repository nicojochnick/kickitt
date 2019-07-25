import React, {Component} from 'react';
import {ScrollView, View, FlatList, Text} from "react-native";
import PropTypes from 'prop-types';
import {viewStyles} from './viewTheme';
import CreateActivityStatus from '../components/createActivityStatus';
import TrendingBoard from '../components/trendingBoard';
import ActivityStatus from '../components/activityStatus'
import {Button} from 'react-native'

class Feed extends Component {

    render() {
        return (

            <ScrollView style = {viewStyles.backgroundMainGlobal}>
                <Text style = {viewStyles.headerTitle}> gath<Text style = {[viewStyles.headerTitle, {color: "#3588FD" }]}>rr </Text></Text>
                <CreateActivityStatus/>
                <ActivityStatus/>
                <FlatList>
                </FlatList>
            </ScrollView>

        );
    }
}


Feed.propTypes = {};

export default Feed;
