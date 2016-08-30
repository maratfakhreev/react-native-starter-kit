import Alt from '../altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import config from '../config';
import entitiesSource from '../sources/entities';
import { request } from '../lib/request';

@createActions(Alt)
export default class EntitiesAction {
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
}
