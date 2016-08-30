import Alt from '../altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import EntitiesActions from '../actions/entities';

@createStore(Alt)
export default class EntitiesStore {
  static displayName = 'EntitiesStore'

  constructor() {
    this.msg = 'entities are not ready to use';
    this.data = [];

    this.bindListeners({
      get: EntitiesActions.GET,
      call: EntitiesActions.CALL
    });
  }

  get(data) {
    this.data = data;
  }

  call(msg) {
    this.msg = msg;
  }
}
