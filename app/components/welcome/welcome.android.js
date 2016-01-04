import React from 'react-native';
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

    this.state = EntitiesStore.getState();
  }

  componentDidMount() {
    EntitiesStore.listen(this.changeState.bind(this));
    EntitiesActions.call();
    EntitiesActions.fetch();
  }

  componentWillUnmount() {
    EntitiesStore.unlisten(this.changeState.bind(this));
  }

  changeState(state) {
    this.setState(state);
  }

  render() {
    return (
      <View style={ Styles.container }>
        <Text style={ Styles.welcome }>
          Welcome to React Native!
          { '\n' }
        </Text>
        <Text style={ Styles.state }>
          Flux state: { this.state.msg }
          { '\n' }
          Data state: { this.state.data }
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
