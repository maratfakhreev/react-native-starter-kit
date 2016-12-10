import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import connectToStores from 'alt-utils/lib/connectToStores';
import HomeActions from './actions';
import HomeStore from './store';
import Styles from './styles';

@connectToStores
export default class Home extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]).isRequired,
    msg: PropTypes.string.isRequired
  }

  static getStores(props) {
    return [HomeStore];
  }

  static getPropsFromStores(props) {
    return HomeStore.getState();
  }

  componentDidMount() {
    HomeActions.call();
    HomeActions.get();
  }

  render() {
    const { msg, data } = this.props;

    return (
      <View style={ Styles.container }>
        <Text style={ Styles.welcome }>
          Welcome to React Native!
          { '\n' }
        </Text>
        <Text style={ Styles.state }>
          Flux state: { msg }
          { '\n' }
          Data state: { data }
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
