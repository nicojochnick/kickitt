import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, ScrollView} from 'react-native';
import {viewStyles} from './viewTheme';
import ActivityPreview from '../components/activityPreview'

class Explore extends Component {
    render() {
        return (
            <ScrollView style = {viewStyles.backgroundMainGlobal}>
                <Text style = {viewStyles.headerTitle}> hott<Text style = {[viewStyles.headerTitle, {color: "#FD701E" }]}>rr </Text></Text>
                <ActivityPreview/>
                <ActivityPreview/>
                <ActivityPreview/>
                <ActivityPreview/>
            </ScrollView>
        );
    }
}

Explore.propTypes = {};

export default Explore;
