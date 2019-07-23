import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native'
import {Avatar} from 'react-native-elements';


class ProfileHeader extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: "row", flex: 1, padding: 14}}>
                    <Avatar
                        rounded
                        size = "large"
                        source={{
                            uri:
                                'https://i.pravatar.cc/300',
                        }}
                    />
                    <View style={ {paddingLeft: 20}}>
                    <Text style={ {paddingTop: 20, color: "white", fontWeight: "bold", fontSize: 30}}>    5         50        60  </Text>
                    <Text style={ { color: "white", fontWeight: "bold"}}> Activities      Followers      Following  </Text>
                    </View>
                </View>
                <Text style = {{ paddingLeft: 20, color: "white", fontWeight: "bold"}}> USERNAME</Text>
            </View>
        );
    }
}

ProfileHeader.propTypes = {};

export default ProfileHeader;
