import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';


class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
        backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>User ID: {JSON.stringify(navigation.getParam('userID', 'NO-ID'))}</Text>
          <Text>{JSON.stringify(navigation.getParam('otherParam', ''))}</Text>
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      );
    }
  }
  
export default DetailsScreen