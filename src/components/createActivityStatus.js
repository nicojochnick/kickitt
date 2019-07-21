import React, {Component} from 'react';
import {View} from 'react-native'
import {Avatar, Card, Button, ListItem, Text, Input, ButtonGroup} from 'react-native-elements';
import PropTypes from 'prop-types';

class CreateActivityStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2,
            extraOptionsVisible: false
        };
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Warriors Game', 'Kygo Concert', 'Fire Trails'];
        const { selectedIndex } = this.state;
        return (
            <Card containerStyle ={{borderRadius: 6}}>
                <View style = {{flexDirection: "row"}}>
                <Avatar
                    rounded
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />
                <View style = {{flex: 1, marginLeft: 10}}>
                <Input
                    placeholder = "what do you want to do?"
                    placeholderTextColor = {"grey"}
                    containerStyle={{height: 60}}
                    onChange = {()=> this.setState({ extraOptionsVisible: true })}/>
                </View>
                </View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />
                    {
                        this.state.extraOptionsVisible
                        ? <View>
                                <Input placeholder = "when?" placeholderTextColor = {"grey"}/>
                                <Button style = {{padding: 10}} title = "Add another time"/>
                        </View>
                        :null
                    }
            </Card>
        );
    }
}

CreateActivityStatus.propTypes = {};

export default CreateActivityStatus;
