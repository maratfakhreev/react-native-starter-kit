import React from 'react-native';
import Reflux from 'reflux';
import Styles from '../welcome/welcome_styles';
import EntitiesActions from '../../actions/entities';
import EntitiesStore from '../../stores/entities';

const {
  Text,
  View
} = React;

const Welcome = React.createClass({
  mixins: [Reflux.listenTo(EntitiesStore, 'setMessage')],

  getInitialState() {
    return {
      msg: 'Reflux is not ready to use'
    };
  },

  componentDidMount() {
    EntitiesActions.call();
  },

  setMessage(msg) {
    this.setState({ msg });
  },

  render() {
    return (
      <View style={ Styles.container }>
        <Text style={ Styles.welcome }>
          Welcome to React Native!
          { '\n' }
        </Text>
        <Text style={ Styles.state }>
          Reflux state: { this.state.msg }
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
});

export default Welcome;
