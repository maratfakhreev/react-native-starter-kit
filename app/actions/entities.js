import Alt from '../altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import entitiesSource from '../sources/entities';

@createActions(Alt)
export default class EntitiesAction {
  get(entities) {
    return (dispatch) => {
      entitiesSource.get()
        .then(result => dispatch(result))
        .catch(() => dispatch(false));
    };
  }

  call() {
    return 'entities are ready to use';
  }
}
