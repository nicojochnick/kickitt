import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Avatar, Card, Input, Button, ButtonGroup, Divider} from 'react-native-elements';
import PropTypes from 'prop-types';
import Activity from './activity';
const fakeData = [{key: 'RSF'}, {key: 'Peets', }, {key:'Fire Trails' }];

class ActivityStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2,
        };
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }
    render() {
        const buttons = ['Today', 'Tomorrow', 'This Week'];
        const { selectedIndex } = this.state;
        return (
            <Card containerStyle = {{ borderRadius: 6, padding: 8}}>
                <View style = {{flexDirection: "row"}}>
                    <Avatar
                        size = "small"
                        rounded
                        source={{
                            uri:
                                'https://i.pravatar.cc/300',
                        }}
                        avatarStyle = {{borderWidth: 1, borderRadius: 100, borderColor: "lightgrey", shadowOpacity: 1, shadowColor: "black"}}

                    />
                    <View style = {{flex: 1, margin: 7}}>
                        <Text style={ {fontWeight: "300", color: "black", fontSize: 15}}> username is down for... </Text>
                    </View>
                </View>
                <View style = {{height:150}}>
                    <Divider style = {{marginTop: 5, marginBottom: 0}} />
                    < FlatList
                        style = {{alignContent: "center",}}
                        data = {fakeData}
                        renderItem={({item}) => <Activity name = {item.key} /> }
                        nestedScrollEnabled = {true}
                    />
                    <Divider style = {{marginBottom: 5, marginTop:0}} />
                </View>
                <View style = {{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <View style = {{flex: 1}}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        buttonStyle = {{borderRadius:20, borderWidth: 0, height: 20}}
                        textStyle = {{fontSize: 14}}
                        selectedButtonStyle = {{backgroundColor: "white"}}
                        selectedTextStyle = {{color: "#3A74F5"}}
                        containerStyle={{height: 25, flex: 1, borderWidth: 0, alignItems: "flex-start", marginLeft: -5}}
                    />
                    </View>

                <Button
                    style = {{marginTop: 10}}
                    buttonStyle={{backgroundColor: "#3A74F5", padding:5, borderRadius: 6}}
                    title = "down"
                />


                </View>



            </Card>
        )
    }
}

ActivityStatus.propTypes = {};

export default ActivityStatus;
