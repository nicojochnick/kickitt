import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import Activity from './activity';
import Friend from './friend';

const fakeData = [{key: 'Dan'}, {key: 'Mike', },
    {key:'EJ'}, {key: 'Amy'}, {key: 'Charles'},
    {key: 'Lily'},{key: 'Mark'},{key: 'Liana'},{key: 'Alex'},{key: 'Nandan'}, {key: 'Alex K'},{key: 'Coco'}]
class FriendBoard extends Component {
    render() {
        return (
            <View style = {{margin: 10}}>
                < FlatList
                    style = {{alignContent: "center", marginTop: 10, marginBottom:2}}
                    numColumns={4}
                    data = {fakeData}
                    renderItem={({item}) => <Friend image = {item.image} name = {item.key} /> }
                    nestedScrollEnabled = {true}
                />

            </View>
        );
    }
}

FriendBoard.propTypes = {};

export default FriendBoard;
