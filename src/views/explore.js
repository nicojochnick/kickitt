import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, ScrollView} from 'react-native';
import {viewStyles} from './viewTheme';
import ActivityPreview from '../components/activityPreview'

class Explore extends Component {
    render() {
        return (
            <ScrollView style = {viewStyles.backgroundMainGlobal}>
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
