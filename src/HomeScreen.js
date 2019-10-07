import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };



    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to details"
                    onPress={() => {this.props.navigation.navigate('Details',{
                        userID:404,
                        otherParam:'Coded by Evans'
                    });
                }}
                    />
            </View>
        )
    }
}

export default HomeScreen