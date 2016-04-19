import React, { Text, View } from 'react-native';
import connectToStores from 'alt-utils/lib/connectToStores';
import EntitiesActions from '../../actions/entities';
import EntitiesStore from '../../stores/entities';
import Styles from '../welcome/welcome_styles';

export default connectToStores(class Welcome extends React.Component {
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
});
