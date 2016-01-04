import React from 'react-native';
import Reflux from 'reflux';
import Styles from '../welcome/welcome_styles';
import EntitiesActions from '../../actions/entities';
import EntitiesStore from '../../stores/entities';

const {
  Text,
  View
} = React;

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { msg: 'Reflux is not ready to use' };
  }

  componentWillMount() {
    this.unsubscribe = EntitiesStore.listen((msg) => {
      this.setState({ msg });
    });
  }

  componentDidMount() {
    EntitiesActions.call();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

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
}
