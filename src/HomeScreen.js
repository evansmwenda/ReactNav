import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };



    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to details"
                    onPress={() => this.props.navigation.navigate('Details')}
                    />
            </View>
        )
    }
}

export default HomeScreen