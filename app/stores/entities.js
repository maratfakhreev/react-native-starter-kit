import Alt from '../alt';
import EntitiesActions from '../actions/entities';

export default Alt.createStore(class EntitiesStore {
  constructor() {
    this.msg = 'entities are not ready to use';
    this.data = [];

    this.bindListeners({
      set: EntitiesActions.SET,
      call: EntitiesActions.CALL
    });
  }

  set(data) {
    this.data = data;
  }

  call(msg) {
    this.msg = msg;
  }
}, 'EntitiesStore');
