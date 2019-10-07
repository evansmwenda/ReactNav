import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';


class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>User ID: {JSON.stringify(this.props.navigation.getParam('userID', 'NO-ID'))}</Text>
          <Text>{JSON.stringify(this.props.navigation.getParam('otherParam', ''))}</Text>
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      );
    }
  }
  
export default DetailsScreen