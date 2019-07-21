import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import Activity from './activity';
const fakeData = [{key: 'Warriors Game'}, {key: 'Kygo Concert', }, {key:'RSF'}, {key: 'Fire Trails'}, {key: 'Berkeley Social Club'},];

class UserTopActivities extends Component {
    render() {
        return (
            <View>
                < FlatList
                    style = {{alignContent: "center", marginTop: 10, marginBottom:2}}
                    data = {fakeData}
                    renderItem={({item}) => <Activity name = {item.key} /> }
                    nestedScrollEnabled = {true}
                />
            </View>
        );
    }
}

UserTopActivities.propTypes = {};

export default UserTopActivities;
