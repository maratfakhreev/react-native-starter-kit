import React, { Component } from 'react';
import { Text, View } from 'react-native';
import connectToStores from 'alt-utils/lib/connectToStores';
import EntitiesActions from '../../actions/entities';
import EntitiesStore from '../../stores/entities';
import Styles from '../welcome/welcomeStyles';

@connectToStores
export default class Welcome extends Component {
  static getStores(props) {
    return [EntitiesStore];
  }

  static getPropsFromStores(props) {
    return EntitiesStore.getState();
  }

  componentDidMount() {
    EntitiesActions.call();
    EntitiesActions.get();
  }

  render() {
    return (
      <View style={ Styles.container }>
        <Text style={ Styles.welcome }>
          Welcome to React Native!
          { '\n' }
        </Text>
        <Text style={ Styles.state }>
          Flux state: { this.props.msg }
          { '\n' }
          Data state: { this.props.data }
          { '\n' }
        </Text>
        <Text style={ Styles.url }>
          https://github.com/maratfakhreev/react-native-starter-kit
          { '\n' }{ '\n' }
        </Text>
        <Text style={ Styles.instructions }>
          To get started, edit index.android.js
        </Text>
        <Text style={ Styles.instructions }>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}
