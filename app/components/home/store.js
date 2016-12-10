import Alt from '../../altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import HomeActions from './actions';

@createStore(Alt)
export default class HomeStore {
  static displayName = 'HomeStore'

  constructor() {
    this.msg = 'data is not ready to use';
    this.data = [];

    this.bindListeners({
      get: HomeActions.GET,
      call: HomeActions.CALL
    });
  }

  get(data) {
    this.data = data ? data : 'data is empty';
  }

  call(msg) {
    this.msg = msg;
  }
}
