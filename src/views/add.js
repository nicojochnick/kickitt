import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {viewStyles} from './viewTheme'
import {Text, View, FlatList} from 'react-native';
import {Divider, SearchBar} from 'react-native-elements';
import TrendingBoard from '../components/trendingBoard';
import UserTopActivities from '../components/userTopActivities';
import FriendBoard from '../components/friendBoard';

class Add extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View style = {viewStyles.backgroundMainGlobal}>
                <Text style = {viewStyles.headerTitle}> a<Text style = {[viewStyles.headerTitle, {color: "#3588FD" }]}>dd </Text></Text>
                <View style = {{flex: 0.35, marginBottom: 10}}>
                    <Text style = {{color: '#3678FF', fontWeight: "bold", fontSize: 20, padding:10}}> Activities </Text>
                    <Divider/>
                    <UserTopActivities/>
                    <Divider/>
                </View>
                <View style = {{flex: 0.2,backgroundColor: 'white', margin: 10, borderRadius: 5, shadowColor: "blue", shadowOpacity: 0.4, shadowOffset: {width: 0, height: 1}}}>
                    <Text style = {{color: 'black', fontWeight: "bold", fontSize: 20, padding:10}}> Plan </Text>
                    <Text style = {{color: 'grey', fontWeight: "200", fontSize: 15, padding:10, textAlign: "center"}}> add friends and an activity to create a plan </Text>

                </View>
                <View style = {{flex: 0.5,  backgroundColor: '#3678FF',}}>
                    <Text style = {{color: "white", fontWeight: "bold", fontSize: 20, padding:5}}> Friends <Text style = {{color: "white", fontWeight: "300", paddingLeft: 10, fontSize: 15}}> (tap once to allow to view, twice to invite) </Text> </Text>
                    <SearchBar
                        placeholder="search..."
                        onChangeText={this.updateSearch}
                        value={search}
                        round = {true}
                        containerStyle = {{backgroundColor:'#3678FF', borderColor: '#3678FF'}}

                    />
                    <FriendBoard/>
                    <Divider style = {{marginBottom: 5}}/>
                </View>
            </View>


        );
    }
}

Add.propTypes = {};

export default Add;
