import Alt from '../../altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import homeSource from './source';

@createActions(Alt)
export default class HomeActions {
  get() {
    return (dispatch) => {
      homeSource.get()
        .then(result => dispatch(result))
        .catch(() => dispatch(false));
    };
  }

  call() {
    return 'data is ready to use';
  }
}
