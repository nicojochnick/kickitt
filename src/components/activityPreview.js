import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native'
import { Card, ListItem, Button, Icon} from 'react-native-elements'

import PropTypes from 'prop-types';

const fakeData = {
    name: ["Berkeley Fire Trails"],
    image: ['../assets/developmentAssets/natureTrails.jpg'],
    fans: [10],
    popularTimes: ["4-6"]

};

class ActivityPreview extends Component {
    render() {
        return (
            <View style = {{}}>
            <Card
                titleStyle = {{padding: 0, color:'#3678FF' }}
                containerStyle = {{borderRadius: 6,shadowOpacity:0.2,
                    shadowColor: "black", shadowOffset:{width: 0, height: 2}, margin: 10}}
                image={require('../assets/developmentAssets/natureTrails.jpg')}
                imageStyle = {{ overflow: "hidden", borderTopLeftRadius: 6, borderTopRightRadius: 6}}
                imageProps = {{resizeMode: "cover", overflow:"hidden"}}
                featuredTitle = {fakeData.name + '🔥'}
                >
                <Text style={{marginBottom: 10, fontWeight: "bold"}}>
                    {fakeData.fans} friends are fans {"\n"}
                    Most popular times: {fakeData.popularTimes}
                </Text>
                <Button
                    containerStyle = {{flexDirection: "row", margin: -8}}
                    icon={<Icon name='chevron-right' color='#3678FF' />}
                    iconRight
                    type = {"clear"}
                    backgroundColor='#3678FF'
                    buttonStyle={{ size: 10}}
                    title='learn more' />
            </Card>
            </View>
        );
    }
}

ActivityPreview.propTypes = {};

export default ActivityPreview;
