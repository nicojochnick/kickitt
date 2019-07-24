import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, ScrollView, View} from 'react-native';
import {viewStyles} from './viewTheme';
import FriendBoard from '../components/friendBoard';
import {Button} from 'react-native-elements'
import {Divider} from 'react-native-elements';
import UserTopActivities from '../components/userTopActivities';
import ProfileHeader from '../components/profileHeader';
import ActivityStatus from '../components/activityStatus';


class Profile extends Component {
    render() {
        return (
            <ScrollView style = {viewStyles.backgroundMainGlobal}>
                <View style = {{ flex: 1, backgroundColor: '#3678FF',}}>
                    <ProfileHeader/>
                    <Text style = {{color: 'white', fontWeight: "bold", fontSize: 20, padding:10, textAlign: "center"}}> Favorites </Text>
                    <Button
                        title="Sign Out"
                        buttonStyle = {{backgroundColor: "#00FA9A"}}
                        onPress = {() => this.props.navigation.navigate("SignUp")}
                    />
                    <Divider/>
                    <UserTopActivities style = {{height: 50}}/>
                </View>
                <View style = {{marginBottom: 10, flex: 1}}>
                </View>
                <ActivityStatus/>
            </ScrollView>
        )
    }
}

Profile.propTypes = {};

export default Profile;
