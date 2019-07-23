import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Avatar, Card, Input, Button, ButtonGroup} from 'react-native-elements';
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
            <Card containerStyle = {{ borderRadius: 6}}>
                <View style = {{flexDirection: "row"}}>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://i.pravatar.cc/300',
                        }}
                    />
                    <View style = {{flex: 1, marginLeft: 10}}>
                        <Text style={ {fontWeight: "bold"}}> username is down for </Text>
                    </View>
                </View>
                <View style = {{height:150}}>
                    < FlatList
                        style = {{alignContent: "center", marginTop: 10, marginBottom:2}}
                        data = {fakeData}
                        renderItem={({item}) => <Activity name = {item.key} /> }
                        nestedScrollEnabled = {true}
                    />
                </View>
                <View style = {{padding: 5}}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 25, flex: 1, borderWidth: 0}}
                    />

                <Button
                    style = {{marginTop: 10, flexDirection: "row", justifyContent: 'flex-end'}}
                    title = "lets do it!"
                />


                </View>



            </Card>
        )
    }
}

ActivityStatus.propTypes = {};

export default ActivityStatus;
