import React, {Component} from 'react';
import {ScrollView, View, FlatList} from "react-native";
import PropTypes from 'prop-types';
import {viewStyles} from './viewTheme';
import CreateActivityStatus from '../components/createActivityStatus';
import TrendingBoard from '../components/trendingBoard';
import ActivityStatus from '../components/activityStatus'

class Feed extends Component {

    render() {
        return (
            <ScrollView style = {viewStyles.backgroundMainGlobal}>
                <View style = {{height: 300}}>
                <TrendingBoard/>
                </View>
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
