import React, {Component} from 'react';
import {StyleSheet, FlatList, Text,View, TouchableWithoutFeedback} from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import Activity from './activity'
import PropTypes from 'prop-types';

const fakeData = [{key: 'Warriors Game'}, {key: 'Kygo Concert', }, {key:'RSF'}, {key: 'Fire Trails'}, {key: 'Berkeley Social Club'},];

class TrendingBoard extends Component {
    render() {
        return (
            <Card containerStyle = {{borderRadius: 6, flex: 1, backgroundColor: '#3678FF', padding: 10}}>
                <Text style = {{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 18, marginBottom: 5}}> Whats Hot Nearby?</Text>
                <Divider style = {{borderWidth: 0.5, borderColor: "white", marginLeft: 15, marginRight: 15}}/>
                < FlatList
                           style = {{alignContent: "center", marginBottom: 20}}
                           data = {fakeData}
                           renderItem={({item}) => <Activity name = {item.key} /> }
                           nestedScrollEnabled = {true}
                />
            </Card>
        );
    }
}

TrendingBoard.propTypes = {};

export default TrendingBoard;

const style = StyleSheet.create({

    board: {
        backgroundColor: "white",
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 5,
        borderRadius: 6,
        margin: 10,
        padding: 10,
        flex: 1

    }


});
