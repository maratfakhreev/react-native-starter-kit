import Alt from '../alt';
import config from '../config';
import entitiesSource from '../sources/entities';
import { request } from '../lib/request';

export default Alt.createActions(class EntitiesAction {
  get(entities) {
    return (dispatch) => {
      entitiesSource.get()
        .then(result => dispatch(result))
        .catch(() => dispatch('entities data is empty'));
    };
  }

  call() {
    return 'entities are ready to use';
  }
});
