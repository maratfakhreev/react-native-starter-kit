import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import connectToStores from 'alt-utils/lib/connectToStores';
import EntitiesActions from '../../actions/entities';
import EntitiesStore from '../../stores/entities';
import Styles from './welcomeStyles';

@connectToStores
export default class Welcome extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]).isRequired,
    msg: PropTypes.string.isRequired
  }

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
          To get started, edit index.ios.js
        </Text>
        <Text style={ Styles.instructions }>
          Press Cmd+R to reload,
          { '\n' }
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
