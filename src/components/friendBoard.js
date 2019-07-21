import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import Activity from './activity';

const fakeData = [{key: 'Warriors Game'}, {key: 'Kygo Concert', }, {key:'RSF'}, {key: 'Fire Trails'}, {key: 'Berkeley Social Club'},];

class FriendBoard extends Component {
    render() {
        return (
            <View>
                < FlatList
                    style = {{alignContent: "center", marginTop: 10, marginBottom:2}}
                    numColumns={2}
                    data = {fakeData}
                    renderItem={({item}) => <Activity name = {item.key} /> }
                    nestedScrollEnabled = {true}
                />

            </View>
        );
    }
}

FriendBoard.propTypes = {};

export default FriendBoard;
