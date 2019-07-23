import React, {Component} from 'react';
import {Text,View} from 'react-native'
import {Avatar, Badge} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';


class Friend extends Component {
    render() {
        return (
            <View style = {{flex:1, alignItems: "center", justifyContent: "center"}}>
                <View>
            <Avatar
                rounded
                source ={{uri: 'https://i.pravatar.cc/300',}}
                showEditButton
                editButton = {{name: 'add', type: 'material', color: 'white', underlayColor: "green",}}
                size = "medium"
                onPress = {() => console.log('add friend to activity')}
                activeOpacity={0.7}
                containerStyle = {{shadowOpacity: 0.2, shadowColor: "black"}}
                avatarStyle = {{borderWidth: 2, borderRadius: 100, borderColor: "white", shadowOpacity: 1, shadowColor: "black"}}
            />
                <Badge
                    status="success"
                    containerStyle={{ position: 'absolute'}}
                />
                </View>
            <Text style = {{color: "white", fontWeight: "bold"}}> {this.props.name} </Text>
            </View>
        );
    }
}

Friend.propTypes = {};

export default Friend;
