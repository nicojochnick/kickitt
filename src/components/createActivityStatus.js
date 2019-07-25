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
            <Card containerStyle ={{borderWidth: 0, borderRadius: 6, backgroundColor: "#3A74F5", padding: 8}}>
                <View style = {{flexDirection: "row"}}>
                <Avatar
                    rounded
                    size = "medium"
                    avatarStyle = {{borderWidth: 2, borderRadius: 100, borderColor: "white", shadowOpacity: 1, shadowColor: "black"}}
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />
                <View style = {{flex: 1, marginLeft: 10}}>
                <Input
                    placeholder = "what do you want to do?"
                    inputContainerStyle = {{borderColor:"white"}}
                    inputStyle = {{color:"white"}}
                    placeholderTextColor = {"white"}
                    containerStyle={{height: 60}}
                    onChange = {()=> this.setState({ extraOptionsVisible: true })}/>
                </View>
                </View>
                    {
                        this.state.extraOptionsVisible
                        ? <View>
                                <Input placeholder = "with who?"
                                       inputStyle = {{color:"white"}}
                                       placeholderTextColor = {"white"}
                                       inputContainerStyle = {{borderColor:"white"}}
                                />
                                <Input placeholder = "when?"
                                       inputStyle = {{color:"white"}}
                                       placeholderTextColor = {"white"}
                                       inputContainerStyle = {{borderColor:"white"}}
                                />

                                <Button
                                    type = {"clear"}
                                    titleStyle = {{color: "white"}}
                                    style = {{padding: 10}} title = "+ Add another time"/>
                        </View>
                        :null
                    }
            </Card>
        );
    }
}

CreateActivityStatus.propTypes = {};

export default CreateActivityStatus;
