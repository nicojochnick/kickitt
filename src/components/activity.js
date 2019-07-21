import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, ListItem} from 'react-native-elements'
import {StyleSheet, Text, View} from 'react-native';

class Activity extends Component {
    render() {
        return (
            <View>
            <Card containerStyle = {{ backgroundColor:"white", borderRadius: 6, height: 40, padding: 10}}>
                <Text style = {{fontWeight: "bold"}}> {this.props.name }</Text>
            </Card>
            </View>
        );
    }
}

Activity.propTypes = {};

export default Activity;

const style = StyleSheet.create({


});
