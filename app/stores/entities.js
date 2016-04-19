import Alt from '../alt';
import EntitiesActions from '../actions/entities';

export default Alt.createStore(class EntitiesStore {
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
}, 'EntitiesStore');
